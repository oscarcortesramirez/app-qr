import { View, StyleSheet } from "react-native";
import { Link } from "expo-router";


export default function Page() {
    return (
        <View style={styles.container} >
            <Link href={"/QRGenerate"} >Inicio de Sesión Profesor</Link>
            <Link href={"/Escanear"} >Inicio de Sesión Alumno</Link>
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