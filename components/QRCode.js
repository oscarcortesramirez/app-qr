import { Text } from "react-native";
import SvgQRCode from 'react-native-qrcode-svg';
import { useContextPanelQRCode } from "../providers/QRCodeProvider";

export default function QRCode() {

    const [state] = useContextPanelQRCode();

    return (
        <>  
            <Text>Escanear código QR</Text>
            <SvgQRCode value={state.text} size={state.size} color={state.color} />
        </>
    )
}