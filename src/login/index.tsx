import { View, ImageBackground, TouchableOpacity,Text, TextInput } from 'react-native';
import React , {useState}from 'react';
import * as Component  from './styles';
import styles from './styles';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../../App';
import Icon from 'react-native-vector-icons/Entypo';
import ButtonMain from '../component/button_main';

declare global {
    namespace ReactNavigation {
        interface RootParamList extends RootStackParamList {}
    }
}

const Login =() =>{

    //Use state

    const [ email , setEmail ] = useState("");

    const navigation = useNavigation();

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
                        functionOnpress= {()=>
                            {
                                alert("Please")
                            }
                        }

                    />                        
                </View>

           </LinearGradient>
           
        </ImageBackground>
    );

}

export default Login;