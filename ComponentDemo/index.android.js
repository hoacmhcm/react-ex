import React, { Component } from "react";
import {
  View, Text, StyleSheet, AppRegistry
} from "react-native";
import HinhChuNhat from "./components/HinhChuNhatComponent.js"

class ComponentDemo extends Component {
  render() {
    return (
      <View>
        <OVuong />
        <HinhChuNhat />
      </View>

    );
  }
}

export default class OVuong extends Component {
  render() {
    return (
      <View style={styleComponent.demo}></View>
    );
  }
}
var styleComponent = StyleSheet.create({
  demo: {
    backgroundColor: 'red',
    width: 100,
    height: 200,
    borderWidth: 3,
  }
});

AppRegistry.registerComponent("ComponentDemo", () => ComponentDemo)