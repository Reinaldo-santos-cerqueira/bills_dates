import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import styles from './styles'
import { LinearGradient } from 'expo-linear-gradient'

type ChildrenComponents = {
    children: React.ReactNode; // 👈️ type children
  };
  

 const Background = (props: ChildrenComponents) => {
  return (
    <ImageBackground
        
        style={styles.backgroundImage}
        resizeMode="cover"
        source={require('../../../assets/bg.jpg')}

    >

        <LinearGradient colors={[ 'transparent' , '#1E2F97']} style={styles.linearGradient}>
            
        {props.children}

        </LinearGradient>

    </ImageBackground>

  )
}

export default Background;