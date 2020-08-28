import React from 'react';
import { StyleSheet } from 'react-native';
import normalize from 'react-native-normalize';
const styleExpolres = StyleSheet.create({
    view:{
        justifyContent:'space-between',
        flexDirection:'row',
        marginTop:normalize(16),
        marginBottom:normalize(16),

    },
    buttonCamera:{
        backgroundColor:'#00C569',
        borderRadius:normalize(50),
        height:normalize(51),
        width:normalize(51),
        marginRight:normalize(8)
    },
    input:{
        width:"80%",
        borderRadius:normalize(30)
        //height:normalize(0),

    },
    textCategories:{
        fontSize:18,
        fontWeight:'bold',
        color:'#000000',
        marginTop:normalize(16),
        marginBottom:normalize(16),
        marginLeft:normalize(16)
    },
    viewscroll:{
        height:normalize(100),
        width:normalize(70),
        justifyContent:'center',
        alignItems:'center',
        margin:normalize(16)
    },
    flatlist:{
        width:'100%',
        height:normalize(270),
      },
})
export{
    styleExpolres,
}