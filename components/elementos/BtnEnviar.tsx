import { Colors } from "@/constants/Colors";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

interface BtnEnviarProps {
  titulo: string;
  funcao: any;
}

export function BtnEnviar({ titulo, funcao }: BtnEnviarProps) {
  return (
    <TouchableOpacity onPress={funcao} style={styles.botao}>
      <Text style={styles.texto}>{titulo}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  botao: {
    padding: 15,
    backgroundColor: Colors.laranja,
    borderRadius: 5,
  },
  texto: {
    color: "white",
    textAlign: "center",
    fontFamily: 'CAIXAStdBold',
    textTransform: "uppercase",
  },
});