import { Colors } from "@/constants/Colors";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

interface BtnVoltarProps {
  alteraEstado: any;
}

export function BtnVoltar({alteraEstado}: BtnVoltarProps) {
  return (
    <TouchableOpacity onPress={() => alteraEstado(false)}>
      <Text style={styles.botao}>{"<"} Voltar</Text>
    </TouchableOpacity>
  );
}


const styles = StyleSheet.create({
  botao: {
    color: Colors.laranja,
  },
});