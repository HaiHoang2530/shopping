import { StyleSheet } from 'react-native';
import Noralise from 'react-native-normalize';
const styleWelcome = StyleSheet.create({
    form:{
        marginLeft:Noralise(16),
        marginRight:Noralise(16),
        marginBottom:Noralise(16),
        marginTop:Noralise(64),
        backgroundColor:'#FAFAFA'
    },
    viewform:{
        flexDirection:'row',
        justifyContent:'space-between'
    },
    textWelcom:{
        fontSize:30,
        color:"#000000",
        fontWeight:'bold',
        margin:Noralise(16)
    },
    itemInput:{
        flexDirection:'column',
        alignItems:'flex-start'
    },
    textOR:{
        justifyContent:'center',
        alignItems:'center',
        fontSize:18,
        margin:Noralise(16),
    },
    forgotPass:{
        fontSize:14,
        alignItems:'flex-end',
        margin:Noralise(16),
    }
})
export default styleWelcome;