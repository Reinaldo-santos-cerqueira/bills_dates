import {StyleSheet } from 'react-native';

 const styles = StyleSheet.create({
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
    textButton:{
        color: "#fff",
        fontSize: 30,
    }
})

export default styles;