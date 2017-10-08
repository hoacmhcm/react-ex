/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';
//npm install --save react-navigation
//import them StackNavigator vao
import { StackNavigator } from 'react-navigation';

class HomeScreen extends Component {
  //bien title
  static navigationOptions = {
    title: 'Man hinh chinh'
  }
  render() {
    const { navigate } = this.props.navigation;
    return (
      <TouchableOpacity onPress={() => { navigate('SecondSreen') }}>
        <Text style={{ color: 'yellow', marginTop: 100 }}>Day la man hinh chinh</Text>
      </TouchableOpacity>

    );
  }
}


export default class ChatScreen extends Component {
  static navigationOptions = {
    title: 'Chat with Lucy',
  };
  render() {
    return (
      <View>
        <Text>Chat with Lucy</Text>
      </View>
    );
  }
}

var NavigatorApp = StackNavigator({
  Home: { screen: HomeScreen },
  SecondSreen: { screen: ChatScreen }
});



AppRegistry.registerComponent('NavigatorApp', () => NavigatorApp);
