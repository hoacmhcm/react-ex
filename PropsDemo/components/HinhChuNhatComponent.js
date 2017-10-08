import React, { Component } from "react";
import {
    View, Text, StyleSheet
} from "react-native";

export default class HinhChuNhatComponent extends Component {
    render() {
        return (
            <View style={ao.ti}>
                <Text>{this.props.textComponent} - {this.props.text2}</Text>
            </View>
        );
    }
}

HinhChuNhatComponent.propType = {
    textComponent: React.PropTypes.string,
    text2: React.PropTypes.string
}

var ao = StyleSheet.create({
    ti: {
        backgroundColor: 'green',
        height: 100,
        width: 300
    }
});


