import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import HinhChuNhatComponent from "./components/HinhChuNhatComponent.js"

class PropsDemo extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TruyenProps textTest="MASAKI say hello" />

        <HinhChuNhatComponent textComponent="text" text2="text2" />
      </View>
    );
  }
}

export default class TruyenProps extends Component {
  render() {
    return (
      <Text style={styles.welcome}>{this.props.textTest}</Text>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('PropsDemo', () => PropsDemo);
