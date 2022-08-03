import React,{useState} from 'react';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../../App';
import ButtonMain from '../component/button_main/index';
import ButtonSecondary from '../component/button_secondary/';
import Background from '../component/background/'
import HalfScreen from '../component/halfScreen/index'
import Input from '../component/input/index'
import ButtonOnlyText from '../component/buttonOnlyText/index'

declare global {
    namespace ReactNavigation {
        interface RootParamList extends RootStackParamList { }
    }
}

const PreLogin = () => {

    const [inputEmail,setInputEmail] = useState("");

    const placeholderEmail = "Digite seu email";

    const nameIconEmail = "mail";

    const [inputPassword,setInputPassword] = useState("");

    const placeholderPassword = "Digite sua senha";

    const nameIconPassword = "key";

    const navigation = useNavigation();

    const textButtonOnlyText = "Problemas com o login?Clique aqui"

    const entrar = () => {

        alert("Entrar");

    }

    const textAlign = "right";
    return (

        <Background>

            <HalfScreen> 

            </HalfScreen>

            <HalfScreen>

                <Input
                
                    nameIcon={nameIconEmail}
                    setInput={()=>{setInputEmail}}
                    input={inputEmail}
                    placeHolder={placeholderEmail}
                
                />

                <Input
                
                    nameIcon={nameIconPassword}
                    setInput={()=>{setInputPassword}}
                    input={inputPassword}
                    placeHolder={placeholderPassword}
                
                />

                <ButtonOnlyText

                    textButton={textButtonOnlyText}
                    functionOnpress={ ()=> alert(" Please enter ") }
                    textAlignConst={textAlign}

                />

                <ButtonMain

                    textButton="Entrar"
                    functionOnpress={() => { entrar() }}

                />

            </HalfScreen>

        </Background>

    );

}

export default PreLogin;

