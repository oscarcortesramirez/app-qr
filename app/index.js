import { View, StyleSheet, Button, TextInput, inp } from "react-native";
import { router } from "expo-router";
import { useState } from "react";
import { app } from '../api/firebaseConfig';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

export default function Page() {

    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');

    const auth = getAuth(app)

    const isNumeric = (value) => /^\d+$/.test(value.split('@')[0]);

    const handleSubmit = (e) => {
        e.preventDefault();
    
        signInWithEmailAndPassword(auth, user, password)
            .then((userCredential) => {
                alert('Bienvenido')
                if (isNumeric(user)) {
                    router.replace('/QRGenerate') // Profesor
                } else {
                    router.replace('/Escanear'); // Alumno
                }
            })
            .catch((error) => {
                alert(error.message)
            })
    }

    return (
        <View style={styles.container} >
            <TextInput value={user} placeholder={'Correo electrónico'} onChangeText={setUser} keyboardType="email-address" />
            <TextInput value={password} placeholder={'Contraseña'} onChangeText={setPassword} secureTextEntry={true} />
            <Button type="button" onPress={handleSubmit} title={'Entrar'} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
         alignItems: 'center',
    }
})