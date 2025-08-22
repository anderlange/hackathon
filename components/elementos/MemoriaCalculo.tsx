import { StyleSheet, Text, View } from "react-native";

interface MemoriaCalculoProps {
  dadosMemoria: any;
}

export function MemoriaCalculo({dadosMemoria}: MemoriaCalculoProps) {
  return (
    <View style={styles.container}>
        <Text style={styles.titulo}>Memória de cálculo:</Text>
        <View style={styles.linha}>
            <Text style={styles.colunaMes}>Mês</Text>
            <Text style={styles.coluna}>Juros</Text>
            <Text style={styles.coluna}>Amortização</Text>
            <Text style={styles.colunaFinal}>Saldo</Text>
        </View>
        {dadosMemoria.map((linha) => (
          <View style={styles.linha} key={linha.mes}>
              <Text style={styles.colunaMes}>1</Text>
              <Text style={styles.coluna}>R$ 139,78</Text>
              <Text style={styles.coluna}>R$ 791,72</Text>
              <Text style={styles.colunaFinal}>R$ 9.208,28</Text>
          </View>
        ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    gap: 3,
    paddingBottom: 50,
  },
  titulo: {
    fontWeight: "bold",
  },
  linha: {
    justifyContent: "space-between",
    flexDirection: "row",
  },
  colunaMes: {
    flex: 2,
  },
  coluna: {
    flex: 5,
    textAlign: "left",
  },
  colunaFinal: {
    flex: 5,
    textAlign: "right",
  },
});