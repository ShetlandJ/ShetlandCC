import React, { Component } from 'react';
import { FontAwesome } from "@expo/vector-icons"
import { TouchableHighlight } from 'react-native';

import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

export default class MenuItem extends Component {
  render() {
    return (
      <TouchableHighlight underlayColor="white">
        <View style={styles.button}>
          <Text style={styles.buttonText}>{this.props.text}</Text>
        </View>
      </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({

  button: {
    marginBottom: 30,
    width: 260,
    alignItems: 'center',
    backgroundColor: '#0F68C9'
  },
  buttonText: {
    padding: 20,
    color: 'white',
    fontSize: 20
  }

});
