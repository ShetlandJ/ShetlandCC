import React, { Component } from 'react';
import { TouchableHighlight } from 'react-native';
import Roads from '../Roads/Home'
import { FontAwesome } from "@expo/vector-icons"
import s from '../Global/Style'


import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

export default class MenuItem extends Component {

  constructor(props) {
    super(props);
    this.state = {
      msg: 'hello'
    };
  }

  render() {
    // const { navigate } = this.props.navigation;
    // console.log(this.props, "props is here");

    return (
      // <TouchableHighlight
      //   style={styles.container}
      //   >
      <View style={styles.container}>
        <FontAwesome
          name={this.props.name}
          size={30}
          style={styles.icon}
        />
        <Text style={styles.menuItemText}>{this.props.text}</Text>
      </View>
     // </TouchableHighlight>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    height: 125,
    justifyContent: 'center',
    alignItems: 'center',
  },
  menuItemText: {
    fontSize: 20,
    color: s.colours.text
  },
  icon: {
    color: s.colours.blue,
    paddingBottom: 10
  }
});
