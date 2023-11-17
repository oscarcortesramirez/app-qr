import { View, StyleSheet, Button, TextInput, Text, TouchableOpacity } from "react-native";
import { router } from "expo-router";
import { useState } from "react";
import { app } from '../api/firebaseConfig';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

export default function Page() {

    const [user, setUser] = useState('profesor@uteq.edu.mx');
    const [password, setPassword] = useState('123456');

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
        <View style={styles.container}>
          <Text style={styles.title}>Iniciar Sesión</Text>
          <TextInput
            style={styles.input}
            placeholder="Nombre de usuario"
            value={user}
            onChangeText={setUser}
          />
          <TextInput
            style={styles.input}
            placeholder="Contraseña"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />
          <TouchableOpacity style={styles.loginButton} onPress={handleSubmit}>
            <Text style={styles.buttonText}>Ingresar</Text>
          </TouchableOpacity>
        </View>
      );
    };
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#3498db', 
      },
      title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#ffffff', 
        marginBottom: 20,
      },
      input: {
        width: '80%',
        height: 40,
        backgroundColor: '#ffffff', 
        marginBottom: 15,
        paddingHorizontal: 10,
        borderRadius: 5,
        borderColor: '#2980b9', 
        borderWidth: 1,
      },
      loginButton: {
        backgroundColor: '#2980b9', 
        padding: 12,
        borderRadius: 5,
        width: '80%',
        alignItems: 'center',
      },
      buttonText: {
        color: '#ffffff',
        fontSize: 16,
        fontWeight: 'bold',
      },
    });
    