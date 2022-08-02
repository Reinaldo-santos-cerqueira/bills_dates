import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './styles'

interface buttonProps {

  functionOnpress:Function;
  textButton:string

}


export default function ButtonMain({functionOnpress,textButton} : buttonProps )  {

const onPressFunction = () => {

  functionOnpress();

  //console.log(textButton);

}

  return (
    <TouchableOpacity
      style={styles.buttonMain}
      onPress={ ()=> onPressFunction() }
    >

      <Text style={styles.textButton}>
        {textButton}
      </Text>

    </TouchableOpacity>
  )
}