import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {Welcome,WelcomeEmail,WelcomeEmailVerification} from '../screens/welcomes';
import {Expolres,ExpolresScroll} from '../screens/expolres'

const Stack = createStackNavigator();
export default function StackNavigation (){
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName='login'>
                <Stack.Screen name='login' component={Welcome} options={{headerShown:false}}/>
                <Stack.Screen name='signin' component={WelcomeEmail} options={{headerShown:false}}/>
                <Stack.Screen name='verifi' component={WelcomeEmailVerification} options={{headerShown:false}}/>
                <Stack.Screen name='expolres' component={Expolres} options={{headerShown:false}}/>
                <Stack.Screen name='expolresscroll' component={ExpolresScroll} options={{headerShown:false}}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}