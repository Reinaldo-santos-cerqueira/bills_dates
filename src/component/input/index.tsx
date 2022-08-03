import { View, Text, TextInput } from 'react-native'
import React from 'react'
import styles from './styles'
import Icon from 'react-native-vector-icons/Entypo';

interface propsInput{

  setInput : any,
  input:string,
  nameIcon:string,
  placeHolder:string

}

const input = ({ setInput,input,nameIcon,placeHolder } : propsInput ) => {
  return (
    <View

    style={styles.areaTextInput}

    >
        <Icon 
            name={nameIcon}
            size={30} 
            color="#fff"
            style={styles.iconTextInput}
        />

        <TextInput

            onChangeText={setInput}
            value={input}
            placeholder = {placeHolder}
            placeholderTextColor={"#fff"}
            style={styles.inputText}

        />

    </View>
  )
}

export default input;