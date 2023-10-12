import { StyleSheet, Text, View, TextInput } from 'react-native';
import { useContext, useState } from 'react';
import PanelQRCode from './components/PanelQRCode';
import QRCode from './components/QRCode';

export default function App() {

  const theme = useContext();
  const [ text, setText ] = useState("hola")
  
  return (
    <View style={styles.container}>
      <Text style={styles.title} >App para generar codigo QR</Text>
      <PanelQRCode text={text} onChangeText={setText} />
      <QRCode text={text} />
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
