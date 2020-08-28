import React from 'react';
import {TouchableOpacity, Text, Image, StyleSheet} from 'react-native';
import normalize from 'react-native-normalize';
export default function Item({item}) {
  return (
    <TouchableOpacity style={styItem.container}>
      <Image style={styItem.Img} source={{uri: item.avatar}} />
      <Text style={styItem.textName} numberOfLines={1} >{item.name}</Text>
      <Text style={styItem.textcompany} numberOfLines={1}>{item.company}</Text>
      <Text style={styItem.textSize}>{item.size}$</Text>
    </TouchableOpacity>
  );
}

const styItem = StyleSheet.create ({
  container: {
    height: normalize (265),
    width:'45%',
    backgroundColor: '#ffffff',
    margin: normalize(8),
  },
  Img: {
    height: '70%',
    width: '100%',
  },
  textName:{
      fontSize:16,
      fontWeight:'bold',
      marginTop:normalize(8),
      marginLeft:normalize(8),
      marginRight:normalize(8),

  },
  textcompany:{
      fontSize:14,
      color:'#000000',
      opacity:0.5,
      marginLeft:normalize(8),
      marginRight:normalize(8)
  },
  textSize :{
      fontSize:14,
      color:'#00C569',
      marginLeft:normalize(8),
  }
});