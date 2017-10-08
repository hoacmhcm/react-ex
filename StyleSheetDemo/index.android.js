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
  View
} from 'react-native';

export default class StyleSheetDemo extends Component {
  render() {
    return (
      <View>
        <Text style={styleText.head}>HELLO StyleSheet </Text>
        <Text style={styleText.body}>HELLO StyleSheet 2</Text>
      </View>
    );
  }
}

var styleText = StyleSheet.create(
{
  head:{
    backgroundColor:'green',
    color:'red'
  },
  body:{
    marginTop:200
  }
});



AppRegistry.registerComponent('StyleSheetDemo', () => StyleSheetDemo);
