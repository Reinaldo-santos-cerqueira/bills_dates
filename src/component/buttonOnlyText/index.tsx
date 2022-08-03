import { Text, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './styles'
interface TouchableProps{

  functionOnpress:Function;
  textButton:string,
  textAlignConst:any

    
}

const ButtonOnlyText = ( { textButton, functionOnpress,textAlignConst } : TouchableProps ) => {

  const onPressFunction = () => {

    functionOnpress();
    
  }

  return (
    <TouchableOpacity
      
      style={styles.areaButton}
      onPress={ ()=> onPressFunction() }

    >
      <Text

        style={[styles.textButton,{textAlign:textAlignConst}]}

      >

        {textButton}

      </Text>

    </TouchableOpacity>
  )
}

export default ButtonOnlyText;