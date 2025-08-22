import { Colors } from "@/constants/Colors";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

interface BtnFlutuanteProps {
  setEstadoCadastro: any;
}

export function BtnFlutuante({setEstadoCadastro}: BtnFlutuanteProps) {
  return (
    <TouchableOpacity style={styles.container} onPress={() => setEstadoCadastro(true)}>
      <Text style={styles.texto}>Incluir produto</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    color: "white",
    fontWeight: "bold",
    backgroundColor: Colors.laranja,
    position: "absolute",
    bottom: 70,
    right: 20,
    width: "auto",
    borderRadius: 50,
  },
  texto: {
    fontWeight: "bold",
    color: "white",
    textTransform: "uppercase",
  },
});