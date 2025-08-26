import { Colors } from "@/constants/Colors";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

interface BtnEnviarProps {
  titulo: string;
  onEnviar: any;
}

export function BtnEnviar({ titulo, onEnviar }: BtnEnviarProps) {
  return (
    <TouchableOpacity onPress={onEnviar} style={styles.botao} testID="BtnEnviar">
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