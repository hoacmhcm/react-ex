

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';

class TouchableCapacityAndState extends Component {

  constructor(props) {
    super(props);
    this.state = {
      luckynumber: 1000
    };
  }

  numberIncrease() {
    this.setState({
      luckynumber: this.state.luckynumber + 1
    });
  }

  render() {
    return (

      <View>
        <Text style={{ marginTop: 100, marginLeft: 100, fontSize: 100 }}>{this.state.luckynumber}</Text>

        <TouchableOpacity onPress={() => { this.numberIncrease() }}>
          <View style={{ height: 100, width: 100, margin: 200, backgroundColor: 'red' }}></View>
        </TouchableOpacity>
      </View>


    );
  }
}


AppRegistry.registerComponent('TouchableCapacityAndState', () => TouchableCapacityAndState);
