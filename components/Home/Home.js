import React, { Component } from 'react';
import { createStore } from 'redux';
import reducer from '../../reducers/placeReducer';
import { connect } from 'react-redux'

const store = createStore(reducer);

import Menu from './Menu'

import {
  View,
  Text,
  StyleSheet,
  Button
} from 'react-native';

export default class Home extends Component {

  static navigationOptions = {
    title: 'Home',
    headerStyle: {
      backgroundColor: '#0F68C9',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };

  constructor(props) {
    super(props);
    this.state = {
      isShowingText: true
    };
  }

  componentDidMount() {
    return
  }

  render() {

    console.log(store.getState());


    return (
      <View>
        <Menu
          navigation={this.props.navigation}
        />
      </View>
    );
  }
}


const styles = StyleSheet.create({
  home: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  menu: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: 50,
    height: 50
  }
});
