import { StyleSheet, Text, View } from "react-native";

interface MemoriaCalculoProps {
  dadosMemoria: any;
}

interface linhaMemoria {
  mes: number;
  juros: number;
  amortizacao: number;
  saldo: number;
}

export function MemoriaCalculo({dadosMemoria}: MemoriaCalculoProps) {
  return (
    <View style={styles.container} testID="MemoriaCalculo">
        <Text style={styles.titulo}>Memória de cálculo:</Text>
        <View style={styles.linha}>
            <Text style={styles.colunaMes}>Mês</Text>
            <Text style={styles.coluna}>Juros</Text>
            <Text style={styles.coluna}>Amortização</Text>
            <Text style={styles.colunaFinal}>Saldo</Text>
        </View>
        {dadosMemoria.map((linha: linhaMemoria) => (
          <View style={styles.linha} key={linha.mes} testID="LinhaMemoria">
              <Text style={styles.colunaMes}>{linha.mes}</Text>
              <Text style={styles.coluna}>
                {new Intl.NumberFormat("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                }).format(linha.juros)}
              </Text>
              <Text style={styles.coluna}>
                {new Intl.NumberFormat("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                }).format(linha.amortizacao)}
              </Text>
              <Text style={styles.colunaFinal}>
                {new Intl.NumberFormat("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                }).format(linha.saldo)}
              </Text>
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
    fontFamily: 'CAIXAStdBold',
  },
  linha: {
    justifyContent: "space-between",
    flexDirection: "row",
  },
  colunaMes: {
    flex: 2,
    fontFamily: 'CAIXAStdRegular',
  },
  coluna: {
    flex: 5,
    textAlign: "left",
    fontFamily: 'CAIXAStdRegular',
  },
  colunaFinal: {
    flex: 5,
    textAlign: "right",
    fontFamily: 'CAIXAStdRegular',
  },
});