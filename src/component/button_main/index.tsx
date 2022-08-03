import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './styles'

interface buttonProps {

  functionOnpress:Function;
  textButton:string

}


const ButtonMain = ({functionOnpress,textButton} : buttonProps ) =>  {

const onPressFunction = () => {

  functionOnpress();

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

export default ButtonMain;