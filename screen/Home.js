import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();

  function handleQRGenerate(event) {
    navigate('/qr-generate');
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={handleQRGenerate}
      >
        <Text style={styles.buttonText}>Generar QRCode</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Escanear QRCode</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: 'green', // Color de fondo del botón
    padding: 15, // Espacio alrededor del botón
    margin: 10, // Espacio entre los botones
    borderRadius: 10, // Bordes redondeados
    width: 200, // Ancho del botón
    alignItems: 'center',
  },
  buttonText: {
    color: 'white', // Color del texto del botón
    fontSize: 18, // Tamaño del texto
  },
});
