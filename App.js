import { StyleSheet, Text, View, TextInput } from 'react-native';
import { useState } from 'react';
import SvgQRCode from 'react-native-qrcode-svg';

export default function App() {

  const [ text, setText ] = useState("hola")
  
  return (
    <View style={styles.container}>
      <Text style={styles.title} >App para generar codigo QR</Text>
      <TextInput value={text} style={styles.caja} onChangeText={setText} />
      <SvgQRCode value={text} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontStyle: 'bold',
    margin: 40,
    top: -300
  },
  caja: {
    margin: 1,
  }
});
