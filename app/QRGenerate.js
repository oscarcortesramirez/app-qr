import { StyleSheet, Text, View, TextInput } from 'react-native';
import PanelQRCode from '../components/PanelQRCode';
import QRCode from '../components/QRCode';
import { QRCodeProvider } from '../providers/QRCodeProvider';
import { getAuth } from 'firebase/auth';
import app from '../api/firebaseConfig';
import { doc, getDoc, getFirestore } from 'firebase/firestore'
import { useEffect, useState } from 'react';

export default function QRGenerate() {

  const [user , setUser] = useState(null);

  useEffect(() => {
    const auth = getAuth(app);
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (user) {
        const uid = user.uid;
        const email = user.email;
        const db = getFirestore(app);
        const docRef = doc(db, 'users', uid);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const userData = {...docSnap.data(), email};
          setUser(userData);
        } else {
          console.log('Ocurrio un error');
        }
      } else {
        console.log('Usuario no existe')
      }
    });

    return () => unsubscribe;
  }, [])

  return (
    <View style={styles.container}>
      
      <QRCodeProvider>
        {/* <PanelQRCode /> */}
        <QRCode usuario={user} />
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
