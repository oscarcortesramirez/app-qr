import { Text } from "react-native";
import SvgQRCode from 'react-native-qrcode-svg';

function QRCode ({text, size = 100, color = 'black'}) {
    return (
        <>  
            <Text>Escanear código QR</Text>
            <SvgQRCode value={text} size={size} color={color} />
        </>
    )
}

export default QRCode;