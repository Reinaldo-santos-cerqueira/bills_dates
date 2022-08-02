import {StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    backgroundImage:{
        flex:1
    },
    linearGradient: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    halfScreen:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%'
    },
    buttonMain:{
        width:'70%',
        height:50,
        borderRadius:10,
        backgroundColor:"#F15152",
        marginBottom: 20,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    buttonSecundary:{
        width:'70%',
        height:50,
        borderRadius:10,
        borderWidth:1,
        borderColor:"#fff",
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textButton:{
        color: "#fff",
        fontSize: 30,
    },
    viewTextInput:{
        width:"70%",
        borderWidth:1,
        borderColor: "#fff",
        color: "#fff",
        borderRadius:10,
        padding:5,
        height:50,
        marginBottom:30,
        paddingbottom:20
    }

});


export default styles;