import { Colors } from "@/constants/Colors";
import { StyleSheet, View, Text, ScrollView } from "react-native";
import { CadastroProdutos } from "./CadastroProdutos";
import { BtnFlutuante } from "./elementos/BtnFlutuante";
import { CardProduto } from "./elementos/CardProduto";
import { ThemedText } from "./elementos/ThemedText";
import { Simulacoes } from "./Simulacoes";
import { useState, useEffect } from "react";

interface Produto {
  id: number;
  nome: string;
  prazomaximo: number;
  txjurosanual: number;
}

export function Produtos() {
  const [produtos, setProdutos] = useState<Produto[]>([]);
  const [mostraCadastroProdutos, setMostraCadastroProdutos] = useState(false)
  const [produtoParaSimular, setProdutoParaSimular] = useState(1)
  const [produtoParaSimularMaxParcelas, setProdutoParaSimularMaxParcelas] = useState(0)
  const [mostraSimulacao, setMostraSimulacao] = useState(false)

  const buscaProdutos = () => {
    fetch("http://192.168.1.24:3000/produtos")
      .then((res) => res.json())
      .then((data) => {
        setProdutos(data);
      })
      .catch((err) => console.error("Erro ao buscar produtos:", err));
  }

  useEffect(() => {
    buscaProdutos();
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView>
        <View>
          <ThemedText style={styles.titulo}>Olá, Jonatan.</ThemedText>
          <ThemedText style={styles.subTitulo}>
            Veja seus produtos e faça simulações.
          </ThemedText>
        </View>
        {produtos?.length ? (
          produtos.map((produto) => (
            <CardProduto
              key={produto.id}
              nome={produto.nome}
              prazo={produto.prazomaximo}
              txjuros={produto.txjurosanual}
              idProduto={produto.id}
              marcaProdutoSimulacao={setProdutoParaSimular}
              marcaProdutoSimulacaoMaxParcelas={setProdutoParaSimularMaxParcelas}
              simulacaoVisivel={setMostraSimulacao}
            />
          ))
        ) : (
          <Text>Nenhum produto disponível</Text>
        )}
      </ScrollView>
      <CadastroProdutos visivel={mostraCadastroProdutos} setVisivel={setMostraCadastroProdutos} buscaProdutos={buscaProdutos}/>
      <BtnFlutuante setEstadoCadastro={setMostraCadastroProdutos} />
      <Simulacoes idProduto={produtoParaSimular} visivel={mostraSimulacao} setVisivel={setMostraSimulacao} maximoParcelas={produtoParaSimularMaxParcelas} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 70,
    height: "100%",
    gap: 20,
  },
  titulo: {
    fontSize: 32,
    color: Colors.azul,
    fontWeight: "bold",
  },
  subTitulo: {
    fontSize: 20,
    color: Colors.azul,
    fontWeight: "bold",
  },
});
