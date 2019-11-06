import React, { Component } from 'react'
import { Image, StyleSheet, Text, View } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail,Button, Icon, Left, Body, Right } from 'native-base';

export default class CardImage extends Component {
  render() {
    return (
        
        <Content>
          <Card>
            <CardItem>
              <Left>
                <Thumbnail source={require('./profile.jpeg')} />
                <Body>
                  <Text>Logan Morninstar</Text>
                  <Text note>Profile Pic</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Image source={require('./prof.jpg')} style={{height: 370, width: 150, flex: 1}}/>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent>
                  <Icon active name="thumbs-up" />
                  <Text>12 Likes</Text>
                </Button>
              </Left>
              <Body>
                <Button transparent>
                  <Icon active name="chatbubbles" />
                  <Text>4 Comments</Text>
                </Button>
              </Body>
              <Right>
                <Text>11h ago</Text>
              </Right>
            </CardItem>
          </Card>
          </Content>
        
        
     
    )
  }
}


