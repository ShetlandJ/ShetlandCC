import React, { Component } from 'react';
import Menu from './Menu'
import {
  View,
  Text,
  StyleSheet,
  Button
} from 'react-native';

export default class Roads extends Component {
  render() {
    const { navigate } = this.props.navigation;
    // console.log(this.props, "props is here");

    return (
      <View style={styles.container}>
        <Menu />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center'
  },
});
