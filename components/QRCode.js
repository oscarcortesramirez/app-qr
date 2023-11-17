import React from "react";
import { Text, StyleSheet, View, TouchableOpacity } from "react-native";
import SvgQRCode from "react-native-qrcode-svg";
import { useContextPanelQRCode } from "../providers/QRCodeProvider";
import { router } from "expo-router";

export default function QRCode() {
  const [state] = useContextPanelQRCode();

 

  const handleLogout = () => {
    router.replace('/')
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Escanear Código QR</Text>
      <View style={styles.qrCodeContainer}>
        <SvgQRCode value={state.text} size={state.size} color={state.color} />
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
