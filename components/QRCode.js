import React, { useEffect, useState } from "react";
import { Text, StyleSheet, View, TouchableOpacity } from "react-native";
import SvgQRCode from "react-native-qrcode-svg";
import { useContextPanelQRCode } from "../providers/QRCodeProvider";
import { router } from "expo-router";
import { getAuth, signOut } from "firebase/auth";
import app from "../api/firebaseConfig";

export default function QRCode({ usuario }) {
  const [state] = useContextPanelQRCode();

  const [nombre, setNombre] = useState();
  const [grupo, setGrupo] = useState();
  const [correo, setCorreo] = useState();

  useEffect(() => {
    if (usuario) {
      setNombre(usuario.nombre);
      setGrupo(usuario.grupo);
      setCorreo(usuario.email);
    }
  }, [usuario])

  const handleLogout = async () => {
    try {
      const auth = getAuth();
      await signOut(auth);
      router.replace('/')
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{`¡Bienvenido ${nombre || ''} !`}</Text>
      <Text style={styles.title}>{`Grupo ${grupo || ''}`}</Text>
      <Text style={styles.title}>{`Correo: ${correo || ''} `}</Text>
      <Text style={styles.title}>Escanear Código QR</Text>
      <View style={styles.qrCodeContainer}>
        <SvgQRCode value={nombre || 'texto'} size={state.size} color={state.color} />
      </View>
      <TouchableOpacity
        style={styles.logoutButtonContainer}
        onPress={handleLogout}      
      >
        <Text style={styles.logoutButtonText}>Cerrar Sesión</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#3498db",
    width: 500,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#ffffff",
    marginBottom: 20,
  },
  qrCodeContainer: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    elevation: 5,
  },
  logoutButtonContainer: {
    position: 'absolute',
    top: 10,
    right: 80,
    padding: 5,
  },
  logoutButtonText: {
    color: "#ffffff",
  },
});
