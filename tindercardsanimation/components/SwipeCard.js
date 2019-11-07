import React, { Component } from 'react'
import { StyleSheet, Image} from 'react-native'
import { Container, Header, View, DeckSwiper, Card, CardItem, Thumbnail, Text, Left, Body, Icon } from 'native-base';

const cards = [
    {
        text: 'Card One',
        name: 'One',
        image: require('./img/img1.jpg'),
    },
    {
        text: 'Card Two',
        name: 'One',
        image: require('./img/img2.jpg'),
    },
    {
        text: 'Card Three',
        name: 'One',
        image: require('./img/img3.jpg'),
    },
    {
        text: 'Card Four',
        name: 'One',
        image: require('./img/img4.jpg'),
    },
];
export default class SwipeCard extends Component {
  render() {
    return (
      <DeckSwiper
        dataSource={cards}
        renderItem={item =>
            <Card style={{ elevation: 3 }}>
              <CardItem>
                <Left>
                  <Thumbnail source={item.image} />
                  <Body>
                    <Text>{item.text}</Text>
                    <Text note>Fishes</Text>
                  </Body>
                </Left>
              </CardItem>
              <CardItem cardBody>
                <Image style={{ height: 300, flex: 1 }} source={item.image} />
              </CardItem>
              <CardItem>
                <Icon name="heart" style={{ color: '#ED4A6A' }} />
                <Text>{item.name}</Text>
              </CardItem>
            </Card>
        }
       />
    )
  }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
    }
})

