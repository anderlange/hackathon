import { useState } from "react";
import { StyleSheet, View } from "react-native";
import Modal from "react-native-modal";
import { BtnEnviar } from "./elementos/BtnEnviar";
import { CampoFormulario } from "./elementos/CampoFormulario";

interface CadastroProdutosProps {
  visivel: boolean;
  setVisivel: any;
  buscaProdutos: any;
}

type Produto = { 
  id: number;
};

export function CadastroProdutos({visivel, setVisivel, buscaProdutos}: CadastroProdutosProps) {
  const [nome, setNome] = useState(null)
  const [prazo, setPrazo] = useState(null)
  const [taxa, setTaxa] = useState(null)

  const cadastrarProduto = async () => {
    try {
      // Trecho necessário, pois o servidor mockado em json-server não cria id incremental automaticamente
      const produtos = await fetch('http://192.168.1.24:3000/produtos');
      const produtosJson = await produtos.json();
      const ultimoId = produtosJson.reduce((max: number, p: Produto) => p.id > max ? p.id : max, 0);
      const ultimoIdNumero = Number(ultimoId);
      const proximoId = ultimoIdNumero + 1;
      // fim

      const novoProduto = {
        id: proximoId,
        nome: nome,
        prazomaximo: prazo,
        txjurosanual: taxa
      };

      const resposta = await fetch('http://192.168.1.24:3000/produtos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(novoProduto)
      });

      const data = await resposta.json();
      console.log('Produto cadastrado:', data);
      buscaProdutos();
      setVisivel(false);
    } catch (erro) {
      console.error('Erro ao cadastrar produto:', erro);
    }
  };

  return (
    <Modal
      isVisible={visivel}
      onBackdropPress={() => setVisivel(false)}
      style={styles.fundo}
    >
      <View style={styles.container} testID="formularioCadastro">
        <CampoFormulario
          titulo="Nome do Produto"
          placeholder="Xxxxxxxx xxxx"
          modo="text"
          tipoTeclado="default"
          change={setNome}
        />
        <CampoFormulario
          titulo="Taxa Anual"
          placeholder="00.0"
          modo="decimal"
          tipoTeclado="decimal-pad"
          change={setTaxa}
        />
        <CampoFormulario
          titulo="Prazo Máximo"
          placeholder="00"
          modo="numeric"
          tipoTeclado="number-pad"
          change={setPrazo}
        />
        <BtnEnviar titulo="Incluir" onEnviar={cadastrarProduto} />
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  fundo: {
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    width: "80%",
    padding: 20,
    backgroundColor: "white",
    borderRadius: 10,
    gap: 10,
  },
});
