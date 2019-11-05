import React, {Component} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Container, Header, Left, Body, Right, Button, Icon, Title } from 'native-base';
import {FlatList} from 'react-native';
import {Card} from 'react-native-elements';
const data = [
  {
    imageUrl: "http://via.placeholder.com/160x160",
    title : "Something"
  },
  {
    imageUrl: "http://via.placeholder.com/160x160",
    title : "Something 2"
  },
  {
    imageUrl: "http://via.placeholder.com/160x160",
    title : "Something 3"
  },
  {
    imageUrl: "http://via.placeholder.com/160x160",
    title : "Something 4"
  },
  {
    imageUrl: "http://via.placeholder.com/160x160",
    title : "Something 5"
  },
  {
    imageUrl: "http://via.placeholder.com/160x160",
    title : "Something 6"
  }
];

export default class App extends Component {
  constructor (props){
    super(props);
    this.state = {
      data: data
    };
  }

  render() {
    return (
    <FlatList
    horizontal
    data={this.state.data}
    renderItem={({item: rowData}) => {
      return(
        <Card
          style={{height: 200}}
          title={null}
          image={{url: rowData.imageUrl}}
          containerStyle={{padding: 0, width: 160, height:200, marginTop:150}}
        >
          <Text style={{marginBottom:10}}>{rowData.title}</Text>
        </Card>
      );
    }
  }
    keyExtractor={(item, index) => index}
    />
    );
  }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
    }
})

