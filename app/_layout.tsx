import { Produtos } from '@/components/Produtos';
import { useFonts } from 'expo-font';
import { ImageBackground, StyleSheet, View } from 'react-native';

// NOTAS
// O servidor foi simulado (mockado) em json-server, por isso, nos casos em que o backend deveria retornar dados transformados, os dados foram simulados
// porém, todas as requisições são funcionais
// Os testes em Jets foram abandonados por erros de compatibilidade que não tive tempo hábil de resolver
// É importante salientar que, trabalhando na rede de varejo, todo o trabalho foi desenvolvido fora de expediente

export default function RootLayout() {
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  if (!loaded) {
    return null;
  }

  return (
    <>
      <View style={styles.container}>
        <Produtos />
      </View>
      <ImageBackground
        source={require('@/assets/imagens/padrao.jpg')}
        style={styles.barraTopo}
        resizeMode="cover"
      />
      <ImageBackground
        source={require('@/assets/imagens/padrao.jpg')}
        style={styles.barraBase}
        resizeMode="cover"
      />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f8f8f8"
  },
  barraTopo: {
    height: 50,
    width: "100%",
    position: "absolute",
    top: 0,
    left: 0,
  },
  barraBase: {
    height: 50,
    width: "100%",
    position: "absolute",
    bottom: 0,
    left: 0,
  },

});