import { Colors } from '@/constants/Colors';
import { StyleSheet, Text, TextProps } from 'react-native';

export function ThemedText(props: TextProps) {
  return <Text style={[styles.textoPadrao, props.style]} {...props} />;
}

const styles = StyleSheet.create({
  textoPadrao: {
    color: Colors.texto,
    fontSize: 16,
    fontFamily: 'CAIXAStdRegular',
  },
});
