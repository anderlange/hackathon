import { Colors } from "@/constants/Colors";
import { useState } from "react";
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { BtnVoltar } from "./elementos/BtnVoltar";
import { CampoFormulario } from "./elementos/CampoFormulario";
import { ResultadoSimulacao } from "./elementos/ResultadoSimulacao";
import Modal from "react-native-modal";

interface SimulacoesProps {
  idProduto: number;
  visivel: boolean;
  setVisivel: any;
  maximoParcelas: number;
}

export function Simulacoes({idProduto, visivel, setVisivel, maximoParcelas}: SimulacoesProps) {
  const [valorEmprestimo, setValorEmprestimo] = useState(0);
  const [parcelas, setParcelas] = useState(0);
  const [resultado, setResultado] = useState( //Dados de produto mockados incluindo dados que não podem ser retornados pelo json-server, normalmente esses dados teriam estado inicial null
    {
      "id": 1,
      "idProduto": 1,
      "valorEmprestimo": 10000,
      "parcelas": 10,
      "nomeProduto": "Produto X",
      "prazo": 12,
      "txEfetiva": 10.5,
      "valorTotal": 11200,
      "memoriaCalculo": [
        {
          "mes": 1,
          "juros": "R$ 100.00",
          "amortizacao": "R$ 700.00",
          "saldo": "R$ 9300.00"
        },
        {
          "mes": 2,
          "juros": "R$ 100.00",
          "amortizacao": "R$ 700.00",
          "saldo": "R$ 8600.00"
        },
        {
          "mes": 3,
          "juros": "R$ 100.00",
          "amortizacao": "R$ 700.00",
          "saldo": "R$ 7900.00"
        },
        {
          "mes": 4,
          "juros": "R$ 100.00",
          "amortizacao": "R$ 700.00",
          "saldo": "R$ 7200.00"
        },
        {
          "mes": 5,
          "juros": "R$ 100.00",
          "amortizacao": "R$ 700.00",
          "saldo": "R$ 6500.00"
        },
        {
          "mes": 6,
          "juros": "R$ 100.00",
          "amortizacao": "R$ 700.00",
          "saldo": "R$ 5800.00"
        },
        {
          "mes": 7,
          "juros": "R$ 100.00",
          "amortizacao": "R$ 700.00",
          "saldo": "R$ 5100.00"
        },
        {
          "mes": 8,
          "juros": "R$ 100.00",
          "amortizacao": "R$ 700.00",
          "saldo": "R$ 4400.00"
        },
        {
          "mes": 9,
          "juros": "R$ 100.00",
          "amortizacao": "R$ 700.00",
          "saldo": "R$ 3700.00"
        },
        {
          "mes": 10,
          "juros": "R$ 100.00",
          "amortizacao": "R$ 700.00",
          "saldo": "R$ 3000.00"
        }
      ]
    }
  );

  const fechaSimulacao = () => {
    setVisivel(false);
    // setResultado(null);  <-- Os dados de resultado de simulação não sendo mockados, exigiria tornar os dados nulos ao fechar a simulação
  }

  const simular = async () => {
    try {
      const simulacao = {
        idProduto: idProduto,
        valorEmprestimo: valorEmprestimo,
        parcelas: parcelas,
      };

      const resSimulacao = await fetch('http://192.168.1.24:3000/simulacoes', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(simulacao)
      });

      if (!resSimulacao.ok) throw new Error('Erro ao cadastrar simulação');
      const resultado = await resSimulacao.json();
      // setResultado(resultado);
    } catch (err) {
      console.error('❌ Erro:', err.message);
    }
  };


  

  return (
    <Modal
      isVisible={visivel}
      animationIn="slideInRight"
      animationOut="slideOutRight"
      backdropColor="white"
    >
      <ScrollView style={styles.fundo}>
        <BtnVoltar alteraEstado={fechaSimulacao}/>
        <View style={styles.formulario}>
          <CampoFormulario titulo="Valor do Empréstimo" placeholder="00.0" modo="decimal" tipoTeclado="decimal-pad" change={setValorEmprestimo}/>
          <CampoFormulario titulo="Número de parcelas" placeholder={`Máximo de ${maximoParcelas}`} modo="numeric" tipoTeclado="number-pad" change={setParcelas}/>
          <TouchableOpacity style={styles.botao} onPress={simular}>
            <Text style={styles.textoBotao}>Simular</Text>
          </TouchableOpacity>
        </View>
        <ResultadoSimulacao resultado={resultado}/>
      </ScrollView>
    </Modal>
  );
}

const styles = StyleSheet.create({
  fundo: {
    flex: 1,
    backgroundColor: 'white',
    padding: 10,
    gap: 20,
  },
  formulario: {
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: Colors.borda,
    gap: 15,
  },
  botao: {
    backgroundColor: Colors.laranja,
    padding: 15,
    borderRadius: 5,
    alignItems: "center",
  },
  textoBotao: {
    color: "white",
    textTransform: "uppercase",
    fontWeight: "bold",
  }
});