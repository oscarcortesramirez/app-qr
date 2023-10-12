import { TextInput } from "react-native";
import { useContextPanelQRCode } from "../providers/QRCodeProvider";

export default function PanelQRCode () {

    const [state, dispatch] = useContextPanelQRCode();

    const onDataChange = (value) => {
        dispatch({ type : "UPDATE_TEXT", text : value })
    } 

    return (
        <TextInput value={state.text} onChangeText={onDataChange} />
    )
}