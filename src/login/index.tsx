import React,{useState} from 'react';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../../App';
import ButtonMain from '../component/button_main/index';
import ButtonSecondary from '../component/button_secondary/';
import Background from '../component/background/'
import HalfScreen from '../component/halfScreen/index'
import {StyleSheet,TextInput,View} from 'react-native'
import Icon from 'react-native-vector-icons/Entypo';

declare global {
    namespace ReactNavigation {
        interface RootParamList extends RootStackParamList { }
    }
}

const PreLogin = () => {

    const [inputEmail,setInputEmail] = useState("");

    const nameIcon = "mail";

    const navigation = useNavigation();

    const entrar = () => {

        alert("Entrar");

    }

    return (

        <Background>

            <HalfScreen> 

            </HalfScreen>

            <HalfScreen>

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

                        onChangeText={setInputEmail}
                        value={inputEmail}
                        placeholder = " Digite o email "
                        placeholderTextColor={"#fff"}
                        style={styles.inputText}

                    />

                </View>

                <ButtonMain

                    textButton="Entrar"
                    functionOnpress={() => { entrar() }}

                />

            </HalfScreen>

        </Background>

    );

}

const styles = StyleSheet.create({

    areaTextInput: {
        width: "70%",
        height: 50,
        borderRadius:10,
        borderWidth:1,
        borderColor:"#fff",
        padding:5,
        //justifyContent: "space-between",
        alignItems: "center",
        display: "flex",
        flexDirection: "row",
        marginBottom:20,
        maxWidth:"70%"
    },
    iconTextInput:{

        width: 'auto',
        marginLeft:10,
        marginRight:10,

    },
    inputText:{

        fontSize:20,
        color: '#FFFFFF',
        maxWidth: '70%',
        width: '70%'

    }

})

export default PreLogin;

