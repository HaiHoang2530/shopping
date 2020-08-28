import React from 'react';
import {
  Container,
  Text,
  Content,
  Header,
  Form,
  Input,
  Label,
  Item,
  Button,
  Icon,
  View,
} from 'native-base';
import {useNavigation} from '@react-navigation/native';
import StyleWelcome from './css';
export default function Welcome () {
  const navigation = useNavigation ();
  return (
    <Container>
      <Content>
        <Form style={StyleWelcome.form}>
          <View style={StyleWelcome.viewform}>
            <View>
              <Text style={StyleWelcome.textWelcom}>Welcome,</Text>
              <Text style={{fontSize: 14, color: '#929292', marginLeft: 16}}>
                Sign in to Continue
              </Text>
            </View>
            <Text style={{fontSize: 14, color: '#00C569', margin: 16}}>
              Sign
            </Text>
          </View>
          <Item floatingLabel style={{margin: 16, borderColor: '#00C569'}}>
            <Label style={{color: '#929292'}}>Email</Label>
            <Input />
          </Item>
          <Item floatingLabel style={{margin: 16, borderColor: '#00C569'}}>
            <Label style={{color: '#929292'}}>Password</Label>
            <Input secureTextEntry={true} />
          </Item>
          <View style={StyleWelcome.forgotPass}>
            <Label>Forgot Password?</Label>
          </View>
          <Button
            block
            style={{margin: 16, backgroundColor: '#00C569'}}
            onPress={() => navigation.navigate ('signin')}
          >
            <Text>SIGN IN</Text>
          </Button>
        </Form>
        <View style={StyleWelcome.textOR}>
          <Text>-OR-</Text>
        </View>
        <Button iconLeft block bordered dark style={{margin: 16}}>
          <Icon name="facebook-square" type="AntDesign"  />
          <Text>Sign in with Facebook</Text>
        </Button>
        <Button iconLeft block bordered dark style={{margin: 16}}>
          <Icon name="google" type="AntDesign" />
          <Text>Sign in with Google</Text>
        </Button>

      </Content>
    </Container>
  );
}
