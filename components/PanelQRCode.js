// import { TextInput, View } from "react-native";
// import { useContextPanelQRCode } from "../providers/QRCodeProvider";
// import NativeColorPicker from 'native-color-picker';
// import Slider from '@react-native-community/slider';

import React from 'react'
import { TextInput, View } from 'react-native-web'
import { useContextPanelQRCode } from '../providers/QRCodeProvider';
import NativeColorPicker from 'native-color-picker';
import Slider from '@react-native-community/slider';
import { useState } from 'react';

export default function PanelQRCode () {

    const [state, dispatch] = useContextPanelQRCode();
    const [selected, setSelected] = useState("#db643a");

    const onDataChange = (value) => {
        dispatch({ type: "UPDATE_TEXT", text: value });
      }
    
      const onColorChange = (color) => {
        setSelected(color);
        dispatch({ type: "UPDATE_COLOR", color: color });
      }
    
      const onValueChange = (size) => {
        dispatch({ type: "UPDATE_SIZE", size: size });
      }

    return (
        <View style={{width: 500, height: 200}} >
            <NativeColorPicker
                colors = {['black', 'red', 'blue']}
                selectedColor={selected}
                onSelect={onColorChange}
            />
            <Slider
                style={{width: 100, height: 40}}
                minimumValue={100}
                maximumValue={600}
                minimumTrackTintColor='black'
                maximumTrackTintColor='grey'
                onValueChange={onValueChange}
                
            />
            <TextInput value={state.text} onChangeText={onDataChange} />    
        </View>
    )
}
/*
import React from 'react'
import { TextInput, View } from 'react-native-web'
import { useContextPanelQRCode } from '../providers/QRCodeProvider';
import NativeColorPicker from 'native-color-picker';
import Slider from '@react-native-community/slider';
import { useState } from 'react';
export default function PanelQRCode({text, onChangeText}) {

  const [state, dispatch] = useContextPanelQRCode();
  const [selected, setSelected] = useState("#db643a");

  const onDataChange = (value) => {
    dispatch({ type: "UPDATE_TEXT", text: value });
  }

  const onColorChange = (color) => {
    setSelected(color);
    dispatch({ type: "UPDATE_COLOR", color: color });
  }

  const onValueChange = (size) => {
    dispatch({ type: "UPDATE_SIZE", size: size });
  }

  return (
    <View style={{width:500, height: 200}}>
      
      <NativeColorPicker
        colors = {['black', 'red', 'blue']}
        selectedColor={selected}
        onSelect={onColorChange}
      />
      <Slider
        style={{width: 100, height: 40}}
        minimumValue={0.1}
        maximumValue={1}
        minimumTrackTintColor='black'
        maximumTrackTintColor='grey'
        onValueChange={onValueChange}
        
      />
      <TextInput value={state.text} onChangeText={onDataChange} />
    </View>

  )
}
*/