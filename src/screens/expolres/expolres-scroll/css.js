import React from 'react';
import {StyleSheet} from 'react-native';
import normalize from 'react-native-normalize';
const styleExpolreSrcoll = StyleSheet.create ({
  view: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginTop: normalize (16),
    marginBottom: normalize (16),
  },
  buttonCamera: {
    backgroundColor: '#00C569',
    borderRadius: normalize (50),
    height: normalize (51),
    width: normalize (51),
    marginRight: normalize (8),
  },
  input: {
    width: '80%',
    borderRadius: normalize (30),
    //height:normalize(0),
  },
  textCategories: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000000',
    marginTop: normalize (16),
    marginBottom: normalize (16),
    marginLeft: normalize (16),
  },
  viewSlide: {
    height: normalize (150),
    marginBottom: normalize (16),
    marginTop: normalize (16),
  },
  viewScroll: {
    height: normalize (100),
    width: normalize (180),
    justifyContent: 'center',
    alignItems: 'center',
    margin: normalize (16),
    flexDirection: 'row',
    shadowColor: '#000000',
       shadowOffset: {
         width: 0,
         height: 3
       },
       shadowRadius: 5,
       shadowOpacity: 1.0,
       elevation:3,


  },
  textB: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000000',
  },
  flatlist1: {
   width:400
  },
});
export {styleExpolreSrcoll};
