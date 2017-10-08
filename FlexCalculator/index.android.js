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

export default class FlexCalculator extends Component {
  render() {
    return (
      <View style={styleCustom.container}>

        <View style={styleCustom.styleCol}>
          <View style={styleCustom.styleRow}>

          </View>
          <View style={styleCustom.styleRow}>
            <Text style={styleCustom.number}>2</Text>
            <Text style={styleCustom.char}>ABC</Text>
          </View>
          <View style={styleCustom.styleRow}>

          </View>
        </View>

        <View style={styleCustom.styleCol}>
          <View style={styleCustom.styleRow}>

          </View>
          <View style={styleCustom.styleRow}>

          </View>
          <View style={styleCustom.styleRow}>

          </View>
        </View>

        <View style={styleCustom.styleCol}>
          <View style={styleCustom.styleRow}>

          </View>
          <View style={styleCustom.styleRow}>

          </View>
          <View style={styleCustom.styleRow}>

          </View>
        </View>

        <View style={styleCustom.styleCol}>
          <View style={styleCustom.styleRow}>

          </View>
          <View style={styleCustom.styleRow}>

          </View>
          <View style={styleCustom.styleRow}>

          </View>
        </View>
      </View>
    );
  }
}

var styleCustom = StyleSheet.create({
  container: {
    flex: 1,
  },
  styleCol: {
    flex: 1,
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
    flexDirection: 'row'
  },
  styleRow: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRightColor: 'grey',
    borderRightWidth: 1,
  },
  number:{
    fontSize:40
  },
  char:{
    fontSize:20
  }
});

AppRegistry.registerComponent('FlexCalculator', () => FlexCalculator);
