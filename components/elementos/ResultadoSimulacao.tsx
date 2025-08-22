import { Colors } from "@/constants/Colors";
import { StyleSheet, View } from "react-native";
import { MemoriaCalculo } from "./MemoriaCalculo";
import { ThemedText } from "./ThemedText";

interface ResultadoSimulacaoProps {
  resultado: any;
}

export function ResultadoSimulacao({resultado}: ResultadoSimulacaoProps) {

  if(resultado == null){
    return <ThemedText>Nenhuma simulação para apresentar</ThemedText>
  }

  return (
    <View>
      <View style={styles.tabela}>
        <View style={styles.linha}>
          <ThemedText>Produto</ThemedText>
          <ThemedText>{resultado.nomeProduto}</ThemedText>
        </View>
        <View style={styles.linha}>
          <ThemedText>Valor solicitado</ThemedText>
          <ThemedText>{resultado.valorEmprestimo}</ThemedText>
        </View>
        <View style={styles.linha}>
          <ThemedText>Prazo</ThemedText>
          <ThemedText>{resultado.prazo} meses</ThemedText>
        </View>
        <View style={styles.linha}>
          <ThemedText>Taxa efetiva mensal</ThemedText>
          <ThemedText>{resultado.txEfetiva}%</ThemedText>
        </View>
        <View style={styles.linha}>
          <ThemedText>Parcela mensal</ThemedText>
          <ThemedText>R$ 931,50</ThemedText>
        </View>
        <View style={styles.linha}>
          <ThemedText>Valor total com juros</ThemedText>
          <ThemedText>R$ {resultado.valorTotal}</ThemedText>
        </View>
      </View>
      <MemoriaCalculo dadosMemoria={resultado.memoriaCalculo} />
    </View>
  );
}

const styles = StyleSheet.create({
  tabela: {
    marginTop: 26,
  },
  linha: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    height: 30,
    borderBottomWidth: 1,
    borderBottomColor: Colors.borda,
  },
});