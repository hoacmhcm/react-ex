import React, { Component } from "react";
import {
    View, Text, StyleSheet
} from "react-native";

export default class HinhChuNhat extends Component {
    render() {
        return (
            <View style={ao.ti}></View>
        );
    }
}

var ao= StyleSheet.create({
    ti:{
        backgroundColor:'green',
        height:100,
        width:300
    }
});


