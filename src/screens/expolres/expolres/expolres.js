import React, {useEffect, useState} from 'react';
import {
  Container,
  Content,
  Button,
  Text,
  View,
  Icon,
  Form,
  Footer,
  FooterTab,
  DeckSwiper,
} from 'native-base';
import {List, Searchbar, Avatar} from 'react-native-paper';
import {ScrollView,FlatList} from 'react-native';
import {styleExpolres} from './css';
import ItemView from './item';
import {useNavigation} from '@react-navigation/native'
const API = 'https://5ceb729177d47900143b897f.mockapi.io/e-commerce';
export default function Expolres () {
  const navigation = useNavigation();
  const [produc, setProduc] = useState ();
  useEffect (
    () => {
      getProduc ();
    },
    []
  );
  const getProduc = () => {
    fetch (API)
      .then (response => response.json ())
      .then (responseJson => setProduc (responseJson))
      .catch (error => console.log (error));
  };
  return (
    <Container>
      <Content padder>
        <Form style={styleExpolres.view}>
          <Searchbar placeholder="Search" style={styleExpolres.input} />
          <Button style={styleExpolres.buttonCamera}>
            <Icon name="camera" type="EvilIcons" />
          </Button>
        </Form>

        <Text style={styleExpolres.textCategories}>Categories</Text>
        <ScrollView style={{height: 130}} horizontal={true}>
          <View style={styleExpolres.viewscroll}>
            <Avatar.Icon
              icon="shoe-formal"
              color="#00C569"
              style={{backgroundColor: '#FAFAFA'}}
            />
            <Text style={{marginTop:16}}>Men</Text>
          </View>
          <View style={styleExpolres.viewscroll}>
            <Avatar.Icon
              icon="shoe-heel"
              color="#00C569"
              style={{backgroundColor: '#FAFAFA'}}
            />
            <Text style={{marginTop:16}}>Women</Text>
          </View>
          <View style={styleExpolres.viewscroll}>
            <Avatar.Icon
              icon="lightbulb"
              color="#00C569"
              style={{backgroundColor: '#FAFAFA'}}
            />
            <Text style={{marginTop:16}}>Devices</Text>
          </View>
          <View style={styleExpolres.viewscroll}>
            <Avatar.Icon
              icon="headphones"
              color="#00C569"
              style={{backgroundColor: '#FAFAFA'}}
            />
            <Text style={{marginTop:16}}>Gadgets</Text>
          </View>
          <View style={styleExpolres.viewscroll}>
            <Avatar.Icon
              icon="gamepad"
              color="#00C569"
              style={{backgroundColor: '#FAFAFA'}}
            />
            <Text style={{marginTop:16}}>Gaming</Text>
          </View>

        </ScrollView>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={styleExpolres.textCategories}>Best Selling</Text>
          <Text style={{margin: 16}}>See all</Text>
        </View>
        <FlatList
          data={produc}
          renderItem={({item}) => <ItemView item={item} />}
          numColumns={2}
          keyExtractor={item => item.id}
        />
      </Content>
      <Footer style={{backgroundColor:'#fff'}}>
        <FooterTab>
          <Button style={{backgroundColor:'#00C569'}} full onPress={()=>navigation.navigate('expolres')}>
            <Icon name="explore" type="MaterialIcons" />
          </Button>
          <Button style={{backgroundColor:'#00C569'}} full onPress={()=> navigation.navigate('expolresscroll')}>
            <Icon name="cart-minus" type="MaterialCommunityIcons" />
          </Button>
          <Button style={{backgroundColor:'#00C569'}} full>
            <Icon name="user" type="SimpleLineIcons"  onPress={()=> navigation.navigate('expolresscroll')}/>
          </Button>
        </FooterTab>
      </Footer>
    </Container>
  );
}
