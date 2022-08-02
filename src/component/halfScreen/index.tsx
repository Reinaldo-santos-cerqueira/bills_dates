import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import styles from './styles'
import { LinearGradient } from 'expo-linear-gradient'

type ChildrenComponents = {
    children: React.ReactNode; // 👈️ type children
  };


const HalfScreen = (props : ChildrenComponents) => {
    return(
        <View style={styles.halfScreen}>
            {props.children}
        </View>
    )
}

export default HalfScreen;