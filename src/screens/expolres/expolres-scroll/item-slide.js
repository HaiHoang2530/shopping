import React from 'react';
import {View,Image ,StyleSheet} from 'react-native';
export default function({item}){
    return(
        <View>
           <Image style={styleItem.Img} source={{uri: item.image}} />
        </View>
    )
}
const styleItem = StyleSheet.create({
    Img: {
        height: '70%',
        width: '100%',
      },
})