import React from 'react';
import {
  Container,
  Content,
  Header,
  Button,
  Icon,
  Body,
  Left,
  Right,
  Text,
  Form,
  Item,
  Input,
  View,
} from 'native-base';
import {StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import normalize from 'react-native-normalize';
export default function EmailVerification () {
  const navigation = useNavigation ();
  return (
    <Container>
      <Header style={{backgroundColor: '#fff'}}>
        <Left>
          <Icon
            name="chevron-left"
            type="Entypo"
            onPress={() => navigation.navigate ('login')}
          />
        </Left>
        <Body />
        <Right />
      </Header>
      <Content>
        <Form style={styleVerifi.form}>
          <Text style={styleVerifi.textVrifi}>Verification</Text>
          <Text style={styleVerifi.text1}>A 6 -Digit PIN has been sent to your email</Text>
          <Text style={styleVerifi.text1}>addres,enter it below to continue</Text>
          <View style={{flexDirection: 'row', margin:32}}>
            <Item regular style={{width: 50, borderRadius: 5,margin:16 }}>
              <Input maxLength={1} />
            </Item>
            <Item regular style={{width: 50, borderRadius: 5,margin:16 }}>
              <Input maxLength={1} />
            </Item>
            <Item regular style={{width: 50, borderRadius: 5,margin:16 }}>
              <Input maxLength={1} />
            </Item>
            <Item regular style={{width: 50, borderRadius: 5, margin:16}}>
              <Input maxLength={1} />
            </Item>
            <Item regular style={{width: 50, borderRadius: 5,margin:16 }}>
              <Input maxLength={1} />
            </Item>
            <Item regular style={{width: 50, borderRadius: 5,margin:16 }}>
              <Input maxLength={1} />
            </Item>

          </View>
          <Button
            block
            style={{margin: 16, backgroundColor: '#00C569'}}
            onPress={() => navigation.navigate ('expolres')}
          >
            <Text>Continue</Text>
          </Button>
        </Form>
      </Content>
    </Container>
  );
}

const styleVerifi = StyleSheet.create ({
    form :{
      flex:1,
        marginTop:normalize(64),
        marginLeft:normalize(16),
        marginRight:normalize(16),
        backgroundColor:'#FAFAFA'
    },
    textVrifi:{
        fontSize:30,
        color:"#000000",
        fontWeight:'bold',
        margin:normalize(16)
    },
    text1:{
        marginLeft:normalize(16),
        marginBottom:normalize(8),
        color:'#929292'
    }
});
