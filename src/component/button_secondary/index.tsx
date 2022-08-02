import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './styles'

interface buttonProps {

  functionOnpress:Function;
  textButton:string

}

export default function ButtonSecondary({functionOnpress,textButton} : buttonProps )  {

const onPressFunction = () => {

  functionOnpress();

}

  return (

    <TouchableOpacity style={styles.buttonSecundary}>

      <Text style={styles.textButton}>{textButton}</Text>

    </TouchableOpacity>
  )
}