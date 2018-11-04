'use strict'
import React, {Component} from 'react';
import {View, Text, StyleSheet, Platform, StatusBar} from 'react-native';


class StatusBarBackground extends Component{
  render(){
    return(
      <View style={[styles.statusBarBackground, this.props.style || {}]}></View>
    );
  }
}

const styles = StyleSheet.create({
  statusBarBackground: {
    paddingTop: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight,
    backgroundColor: 'white',
  }

})

module.exports = StatusBarBackground
