import { View, Text,StyleSheet, ImageBackground, TouchableOpacity, } from 'react-native';
import React , {createRef, useRef}from 'react';
import * as Component  from './styles';
import styles from './styles';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../../App';
import ButtonMain from '../component/button_main/index';
import ButtonSecondary from '../component/button_secondary/'
declare global {
    namespace ReactNavigation {
        interface RootParamList extends RootStackParamList {}
    }
}

const PreLogin =() =>{

    const navigation  = useNavigation();
    
    const goLogin = () =>{
        
        navigation.navigate("Login");
        
        console.log("login")

    }

    return (
        
        <ImageBackground
        
            style={styles.backgroundImage}
            resizeMode="cover"
            source={require('../../assets/bg.jpg')}

        >
           <LinearGradient colors={[ 'transparent' , '#1E2F97']} style={styles.linearGradient}>

                <View style={styles.halfScreen}>

                </View>

                <View style={styles.halfScreen}>

                <ButtonMain
                    
                    textButton = "Login"
                    functionOnpress= {()=>{goLogin()}}

                />

                <ButtonSecondary
                    
                    textButton = "Criar conta"
                    functionOnpress= {()=>{goLogin()}}

                />

                </View>

           </LinearGradient>

        </ImageBackground>

    );

}

export default PreLogin;