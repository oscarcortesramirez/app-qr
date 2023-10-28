import { TextInput } from "react-native";
import { useContextPanelQRCode } from "../providers/QRCodeProvider";
import { View } from "react-native-web";
import Slider from '@react-native-community/slider';
import { useRef, useState } from "react";
import { Dropdown } from 'react-native-element-dropdown';
import { Crypto, TipoAlgoritmoCripto } from "../utils/Crypto";
// TODO
// npx expo install react-native-color-picker
import { ColorPicker } from 'react-native-color-picker';

export default function PanelQRCode () {

    const [state, dispatch] = useContextPanelQRCode();
    const [typeCrypto,setTypeCrypto] = useState("MD5"); 
    const [text, setText] = useState("MD5")
    const colorPickerRef = useRef(null)

    const [selected, setSelected] = useState('#db643a');
   
    const onDataChange = (value) => {
        dispatch({ type: "UPDATE_TEXT", text: value })
        setText(value)
    }

    const onColorChange = (color) => {
      setSelected(color)
      dispatch({ type: "UPDATE_COLOR", color: color })   
    }

    const onValueChange = (size) => {
      dispatch({ type: "UPDATE_SIZE", size: size  })   
    }

    const onEncryptText = async (itemTipoAlgoritmoCrypto) => {
        setTypeCrypto(itemTipoAlgoritmoCrypto.tipo)
        const crypto = await Crypto(itemTipoAlgoritmoCrypto.algoritmo)
        const textoEncriptado = await crypto.encriptar(text)
        dispatch({ type: "UPDATE_TEXT", text: textoEncriptado })
    }

    return (
      <View style={{width:500, height :200}}>
        <ColorPicker
          ref={colorPickerRef}
          onColorSelected={onColorChange}
          sliderComponent={ Slider}

          style={{flex: 1}}
        />
        <Slider
          style={{width: 200, height: 40}}
          minimumValue={100}
          maximumValue={600}
          minimumTrackTintColor="black"
          maximumTrackTintColor="gray"
          onValueChange = {onValueChange}
        />
      <TextInput 
        value={text} 
        onChangeText={onDataChange}  />
          <Dropdown
            data={TipoAlgoritmoCripto}
            labelField={"algoritmo"}
            valueField="algoritmo"
            placeholder="Encriptar"
            value={typeCrypto}
            onChange={onEncryptText}
        
      />
      
      </View>
      )
}