import { TextInput } from "react-native";
import { useContextPanelQRCode } from "../providers/QRCodeProvider";
import { View } from "react-native-web";
import Slider from '@react-native-community/slider';
import { useEffect, useRef, useState } from "react";
import { Dropdown } from 'react-native-element-dropdown';
import { Crypto, TipoAlgoritmoCripto } from "../utils/Crypto";
// TODO
// npx expo install react-native-color-picker
import { ColorPicker } from 'react-native-color-picker';

export default function PanelQRCode () {

    const [state, dispatch] = useContextPanelQRCode();
    const [typeCrypto,setTypeCrypto] = useState(TipoAlgoritmoCripto[1]); 
    const [text, setText] = useState("MD5")
    const [timeRefreshQRCode, setTimeRefreshQRCode] = useState(5);
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

    const onEncryptText =  (itemTipoAlgoritmoCrypto) => {
        setTypeCrypto(itemTipoAlgoritmoCrypto)
        updateText()
    }

    const updateText = async () => {
      const crypto = Crypto(typeCrypto.algoritmo)
      const newText = text + new Date().getTime();
      const textoEncriptado = await crypto.encriptar(newText).then(textoEncriptado)
      dispatch({ type: "UPDATE_TEXT", text: textoEncriptado })
    }

    useEffect(() => {
      if (timeRefreshQRCode == 0) return;

      const mInterval = setInterval(updateText, timeRefreshQRCode * 1000);
      return () => clearInterval(mInterval);
    }, [timeRefreshQRCode])

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
        value={timeRefreshQRCode} 
        onChangeText={setTimeRefreshQRCode}
        type="number"
        />
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