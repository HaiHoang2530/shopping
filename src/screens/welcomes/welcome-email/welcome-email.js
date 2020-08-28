import React from 'react';
import {
  Container,
  Content,
  Header,
  Text,
  Left,
  Icon,
  Button,
  Body,
  Right,
  Form,
  Item,
  Label,
  Input,
} from 'native-base';
import {useNavigation} from '@react-navigation/native'
import {StyleSheet} from 'react-native';
import normalize from 'react-native-normalize' ;
export default function WelcomeEmail () {
    const navigation = useNavigation();
  return (
    <Container>
      <Header style={{backgroundColor: '#fff'}}>
        <Left>
          <Icon name="chevron-left" type="Entypo" onPress={()=>navigation.navigate('login')} />
        </Left>
        <Body />
        <Right />
      </Header>
      <Content>
        <Form style={styleWelcom.form}>
            <Text style={styleWelcom.textSignup}>Sign Up</Text>
            <Item floatingLabel style={{margin: 16, borderColor: '#00C569'}}>
                <Label style={{color:'#929292'}}>Name</Label>
                <Input/>
            </Item>
            <Item floatingLabel style={{margin: 16, borderColor: '#00C569'}}>
                <Label style={{color:'#929292'}}>Email</Label>
                <Input/>
            </Item>
            <Item floatingLabel style={{margin: 16, borderColor: '#00C569'}}>
                <Label style={{color:'#929292'}}>Password</Label>
                <Input secureTextEntry={true}/>
            </Item>
            <Button block style={{margin: 16,backgroundColor:'#00C569'}} onPress={()=>navigation.navigate('verifi')}>
               <Text>Sign up</Text>
            </Button>
        </Form>
      </Content>
    </Container>
  );
}

const styleWelcom =  StyleSheet.create({
    form:{
        marginTop:normalize(64),
        marginLeft:normalize(16),
        marginRight:normalize(16),
        backgroundColor:'#FAFAFA'
    },
    textSignup:{
        fontSize:30,
        color:"#000000",
        fontWeight:'bold',
        margin:normalize(16)
    }
})