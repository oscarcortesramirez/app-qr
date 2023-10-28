import * as ExpoCrypto from 'expo-crypto';
// npx expo install react-native-crypto-js
import CryptoJS from 'react-native-crypto-js';
// npx expo install react-native-rsa-native
import { RSA } from 'react-native-rsa-native';

const TIPO_RSA = "RSA";
const TIPO_AES = "AES";
const TipoAlgoritmoCripto = [
    { tipo : 1, algoritmo : ExpoCrypto.CryptoDigestAlgorithm.MD5 },
    { tipo : 2, algoritmo : ExpoCrypto.CryptoDigestAlgorithm.SHA1 },
    { tipo : 3, algoritmo : ExpoCrypto.CryptoDigestAlgorithm.SHA256 },
    { tipo : 4, algoritmo : ExpoCrypto.CryptoDigestAlgorithm.SHA512 },
    { tipo : 5, algoritmo : TIPO_AES },
    { tipo : 6, algoritmo : TIPO_RSA }
]

function Asincrono() {
    const keyPublic = "";
    const keyPrivate = "";
    RSA.generateKeys(4096).then(keys => {
        keyPublic = keys.public;
        keyPrivate = keys.private;
        console.log(keys.public);
        console.log(keys.private);
    });
    return {
        encriptar: (data) => RSA.encrypt(data, keyPublic),
        desencriptar: (data) => RSA.decrypt(data, keyPrivate)
    }
}

function Sincrono() {
    const defaultSecret = "3l-B4rT0"
    return {
        encriptar : (data) => {
            return CryptoJS.AES.encrypt(data, defaultSecret).toString()
        },

        desencriptar : (dataCifrado) => {
            var bytes = CryptoJS.AES.decrypt(dataCifrado, defaultSecret).toString();
            var decryptedData = bytes.toString(CryptoJS.enc.Utf8);
            return decryptedData;
        }
    }
}

function Hash(algoritmo) {
    return {
        encriptar : (data) => ExpoCrypto.digestStringAsync(algoritmo, data)
    }
}

function Crypto(algoritmo) {
    if (algoritmo === TIPO_RSA) {
        return Asincrono(algoritmo)
    } else if (algoritmo === TIPO_AES) {
        return Sincrono(algoritmo)
    } else {
        return Hash(algoritmo)
    }
}

export { Crypto, TipoAlgoritmoCripto }