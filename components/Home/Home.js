/* @flow */

import React, { Component } from 'react';
import Header from './Header';
import Roads from '../Roads/Home';
import Rubbish from '../Rubbish/Home';
import Picker from '../Roads/Picker'
// import MapTemplate from '../Global/Map'

import Menu from './Menu'

import { createStackNavigator } from 'react-navigation'; // Version can be specified in package.json

import StatusBar from '../Global/StatusBar'

import {
  View,
  Text,
  StyleSheet,
  Button
} from 'react-native';

export class Home extends Component {

  static navigationOptions = {
    title: 'Home',
    headerStyle: {
      backgroundColor: '#f4511e',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };

  constructor(props) {
    super(props);
    this.state = { isShowingText: true };
  }

  render() {
    return (
      <React.Fragment>
        <StatusBar />
        <Header />
        <Menu
          navigation={this.props.navigation}
        />
      </React.Fragment>
    );
  }
}

const RootStack = createStackNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        header: null
      }
    },

    Roads: {
      screen: Roads,
      navigationOptions: {
        title: "Roads"
      }
    },

    RoadsMapPicker: {
      screen: Picker,
      navigationOptions: {
        title: "Roads picker"
      }
    },

    Rubbish: {
      screen: Rubbish,
      navigationOptions: {
        title: "Litter & Rubbish"
      }
    },
    //
    // Map: {
    //   screen: MapTemplate,
    //   navigationOptions: {
    //     title: "Litter & Rubbish"
    //   }
    // },
  }

);


export default class App extends React.Component {
  render() {
    return <RootStack />;
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
