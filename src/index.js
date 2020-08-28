import React from 'react';
import {DefaultTheme,Provider} from 'react-native-paper';
import { View, Text } from 'react-native';
import {Welcome,WelcomeEmail} from './screens/welcomes';
import Nav from './navigations/stackNavigation';


const theme={
    ...DefaultTheme.colors,
    colors:{
        ...DefaultTheme,
        Green:'#00C569',
        BlueBlack:'#120136',

    }
}

export default function Index(){
    return(
       <Nav/>
    )
}