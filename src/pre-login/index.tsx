import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../../App';
import ButtonMain from '../component/button_main/index';
import ButtonSecondary from '../component/button_secondary/';
import Background from '../component/background/'
import HalfScreen from '../component/halfScreen/index'

declare global {
    namespace ReactNavigation {
        interface RootParamList extends RootStackParamList { }
    }
}

const PreLogin = () => {

    const navigation = useNavigation();

    const goLogin = () => {

        navigation.navigate("Login");

        console.log("login")

    }

    return (

        <Background>

            <HalfScreen> 

            </HalfScreen>

            <HalfScreen>

                <ButtonMain

                    textButton="Login"
                    functionOnpress={() => { goLogin() }}

                />

                <ButtonSecondary

                    textButton="Criar conta"
                    functionOnpress={() => { goLogin() }}

                />

            </HalfScreen>

        </Background>

    );

}

export default PreLogin;