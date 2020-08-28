import React, {useState, useEffect} from 'react';
import {
  Container,
  Content,
  Text,
  Footer,
  FooterTab,
  Button,
  Icon,
  Form,
  View,
} from 'native-base';
import {Searchbar,Avatar} from 'react-native-paper';
import {Image,ScrollView,FlatList} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {styleExpolreSrcoll} from './css';
import ItemView from '../expolres/item';
const API = 'https://5ceb729177d47900143b897f.mockapi.io/e-commerce';
export default function ExpolresScroll () {
  const navigation = useNavigation ();
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
        <Form style={styleExpolreSrcoll.view}>
          <Searchbar placeholder="Search" style={styleExpolreSrcoll.input} />
          <Button style={styleExpolreSrcoll.buttonCamera}>
            <Icon name="camera" type="EvilIcons" />
          </Button>
        </Form>
        <View style={styleExpolreSrcoll.viewSlide}>
            <Image style={{flex:1}} source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSuYS5u6U_e-uwAi5FGTwxoVLenduNiv50ncg&usqp=CAU'}}/>
        </View>
        <Text style={styleExpolreSrcoll.textCategories}>Feactured Brands</Text>
        <ScrollView style={{height:130}}  horizontal={true}>
          <View style={styleExpolreSrcoll.viewScroll}>
            <Avatar.Text
            size={64}
            label="Bs0"
              style={{backgroundColor: '#000'}}
            />
            <View  style={{margin:8}}>
                <Text style={styleExpolreSrcoll.textB}>BSo</Text>
                <Text style={{color:'#929292',fontSize:12}}>5693 Produc</Text>
            </View>
          </View>
          <View style={styleExpolreSrcoll.viewScroll}>
            <Avatar.Text
            size={64}
            label="Bo"
              style={{backgroundColor: 'red'}}
            />
            <View style={{margin:8}}>
                <Text style={styleExpolreSrcoll.textB}>Beats</Text>
                <Text style={{color:'#929292',fontSize:12}}>1124 produc</Text>
            </View>
          </View>

        </ScrollView>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={styleExpolreSrcoll.textCategories}>Best Selling</Text>
          <Text style={{margin: 16}}>See all</Text>
        </View>
       
       <FlatList
          data={produc}
          renderItem={({item}) => <ItemView item={item} />}
          numColumns={2}
          keyExtractor={item => item.id}
        />
      </Content>
      <Footer style={{backgroundColor: '#fff'}}>
        <FooterTab>
          <Button
            style={{backgroundColor: '#00C569'}}
            full
            onPress={() => navigation.navigate ('expolres')}
          >
            <Icon name="explore" type="MaterialIcons" />
          </Button>
          <Button 
            style={{backgroundColor: '#00C569'}}
            full
            onPress={() => navigation.navigate ('expolresscroll')}
          >
            <Icon name="cart-minus" type="MaterialCommunityIcons" />
          </Button>
          <Button style={{backgroundColor: '#00C569'}} full>
            <Icon
              name="user"
              type="SimpleLineIcons"
              onPress={() => navigation.navigate ('expolresscroll')}
            />
          </Button>
        </FooterTab>
      </Footer>
    </Container>
  );
}
