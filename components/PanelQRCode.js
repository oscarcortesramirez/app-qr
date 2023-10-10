import { TextInput } from "react-native";

export default function PanelQRCode ({text, onChangeText}) {
    return (
        <TextInput value={text} onChangeText={onChangeText} />
    )
}