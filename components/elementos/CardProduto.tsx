import { Colors } from "@/constants/Colors";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { ThemedText } from "./ThemedText";

interface CardProdutoProps {
  nome: string;
  prazo: number;
  txjuros: number;
  idProduto: number;
  marcaProdutoSimulacao: any;
  simulacaoVisivel: any;
  marcaProdutoSimulacaoMaxParcelas: any;
}

export function CardProduto({nome, prazo, txjuros, idProduto, marcaProdutoSimulacao, simulacaoVisivel, marcaProdutoSimulacaoMaxParcelas}: CardProdutoProps) {

  const abreSimulacao = () => {
    marcaProdutoSimulacao(idProduto);
    marcaProdutoSimulacaoMaxParcelas(prazo);
    simulacaoVisivel(true);
  }

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <ThemedText style={styles.nomeProduto}>{nome}</ThemedText>
        <View>
          <ThemedText>Juros anual: {txjuros}%</ThemedText>
          <ThemedText>Prazo máximo: {prazo}</ThemedText>
        </View>
      </View>
      <TouchableOpacity style={styles.btnSimulacao} onPress={() => abreSimulacao()}>
        <Text style={styles.btnSimulacaoTexto}>Simulação</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 20,
    overflow: "hidden",
    backgroundColor: "white",
  },
  content: {
    padding: 20,
    gap: 5,
  },
  nomeProduto: {
    fontSize: 20,
    fontWeight: "bold",
    color: '#3a4859',
  },
  btnSimulacao: {
    padding: 10,
    backgroundColor: Colors.laranja,
  },
  btnSimulacaoTexto: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    textTransform: "uppercase",
  },
});
