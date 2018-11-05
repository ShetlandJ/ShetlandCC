import React, { Component } from 'react';
import Menu from './Menu'
import {
  View,
  Text,
  StyleSheet,
  Button
} from 'react-native';

export default class Roads extends Component {

  static navigationOptions = {
    title: 'Roads',
    headerStyle: {
      backgroundColor: '#0F68C9',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };
  render() {
    const { navigate } = this.props.navigation;

    return (
      <View style={styles.container}>
        <Menu 
          navigation={this.props.navigation}
        />
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
