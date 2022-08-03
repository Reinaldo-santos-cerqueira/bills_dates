import {StyleSheet } from 'react-native';

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

export default styles;