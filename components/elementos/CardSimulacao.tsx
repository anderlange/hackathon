import { Colors } from "@/constants/Colors";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { ThemedText } from "./ThemedText";

export function CardSimulacao() {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <ThemedText style={styles.nomeProduto}>Nome do Produto</ThemedText>
        <View>
          <ThemedText>Juros anual: xx%</ThemedText>
          <ThemedText>Prazo máximo: xx</ThemedText>
        </View>
      </View>
      <TouchableOpacity style={styles.btnSimulacao}>
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
    fontFamily: 'CAIXAStdBold',
    color: '#3a4859',
  },
  btnSimulacao: {
    padding: 10,
    backgroundColor: Colors.laranja,
  },
  btnSimulacaoTexto: {
    color: "white",
    fontFamily: 'CAIXAStdBold',
    textAlign: "center",
    textTransform: "uppercase",
  },
});
