import { Colors } from "@/constants/Colors";
import { StyleSheet, TextInput, View } from "react-native";
import { ThemedText } from "./ThemedText";

interface CampoFormularioProps {
  titulo: string;
  placeholder?: string;
  modo?: 'text' | 'numeric' | 'decimal' | 'email' | 'tel' | 'url';
  tipoTeclado?: 
    | 'default'
    | 'email-address'
    | 'numeric'
    | 'decimal-pad'
    | 'number-pad'
    | 'phone-pad'
    | 'url'
    | 'ascii-capable'
    | 'visible-password';
  change: any
}

export function CampoFormulario({ titulo, placeholder, modo, tipoTeclado, change }: CampoFormularioProps) {
  return (
    <View>
      <ThemedText>{titulo}</ThemedText>
      <TextInput
      style={styles.input}
      placeholder={placeholder}
      inputMode={modo}
      keyboardType={tipoTeclado}
      onChangeText={(conteudo) => change(conteudo)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: Colors.borda,
    padding: 15,
    borderRadius: 4,
  },
});