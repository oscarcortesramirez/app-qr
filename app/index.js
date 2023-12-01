import { View, StyleSheet, Button, TextInput, Text, TouchableOpacity } from "react-native";
import { router } from "expo-router";
import { useState } from "react";
import { app } from '../api/firebaseConfig';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import Translations from "../components/Translations";

export default function Page() {

    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');
    const [language, setLanguage] = useState('es'); 

    const auth = getAuth(app);

    const toggleLanguage = () => {
      setLanguage((prevLanguage) => (prevLanguage === 'en' ? 'es' : 'en'));
    };
  

    const isNumeric = (value) => /^\d+$/.test(value.split('@')[0]);

    const handleSubmit = (e) => {
        e.preventDefault();
    
        signInWithEmailAndPassword(auth, user, password)
            .then((userCredential) => {
                alert(Translations[language].welcome)
                if (isNumeric(user)) {
                    router.replace('/QRGenerate', { language }) // Profesor
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
          {/* Nuevo botón de cambio de idioma */}
        <TouchableOpacity style={styles.languageButton} onPress={toggleLanguage} >
          <Text style={styles.buttonText}>{language === 'en' ? 'Español' : 'English'}</Text>
        </TouchableOpacity>
          <Text style={styles.title}>{Translations[language].welcome}</Text>
          <TextInput
            style={styles.input}
            placeholder={Translations[language].user}
            value={user}
            onChangeText={setUser}
          />
          <TextInput
            style={styles.input}
            placeholder={Translations[language].password}
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />
          <TouchableOpacity style={styles.loginButton} onPress={handleSubmit}>
            <Text style={styles.buttonText}>{Translations[language].login}</Text>
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
      languageButton: {
        position: 'absolute',
        top: 10,
        right: 10,
        backgroundColor: '#2980b9',
        padding: 8,
        borderRadius: 5,
        alignItems: 'center',
      },
    });
    