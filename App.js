import { StyleSheet, Text, View, TextInput } from 'react-native';
import PanelQRCode from './components/PanelQRCode';
import QRCode from './components/QRCode';
import { QRCodeProvider } from './providers/QRCodeProvider';

export default function App() {
  
  return (
    <View style={styles.container}>
      <QRCodeProvider>
        <PanelQRCode />
        <QRCode />
      </QRCodeProvider>
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
