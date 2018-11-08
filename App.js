import React from 'react';
import { StyleSheet, View } from 'react-native';
import { createStackNavigator } from 'react-navigation'; // Version can be specified in package.json

import { AppLoading, Asset, Font, Icon } from 'expo';
import Home from './components/Home/Home';
import Roads from './components/Roads/Home';
import Rubbish from './components/Rubbish/Home';
import Picker from './components/Roads/Picker'
import SubmitPothole from './components/Roads/SubmitPothole'
import Camera from './components/Roads/Camera'

import { Provider } from 'react-redux'
import reducer from './reducers/placeReducer';
import { createStore } from 'redux'

const store = createStore(reducer);

export default class App extends React.Component {
  state = {
    isLoadingComplete: false,
  };

  render() {
    if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
      return (
        <AppLoading
          startAsync={this._loadResourcesAsync}
          onError={this._handleLoadingError}
          onFinish={this._handleFinishLoading}
        />
      );
    } else {
      return (
        <Provider store={store}>
          <Nav />
        </Provider>
      );
    }
  }

  _loadResourcesAsync = async () => {
    return Promise.all([
      Asset.loadAsync([
        require('./assets/images/robot-dev.png'),
        require('./assets/images/robot-prod.png'),
      ]),
      Font.loadAsync({
        // This is the font that we are using for our tab bar
        ...Icon.Ionicons.font,
        // We include SpaceMono because we use it in HomeScreen.js. Feel free
        // to remove this if you are not using it in your app
        'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf'),
      }),
    ]);
  };

  _handleLoadingError = error => {
    // In this case, you might want to report the error to your error
    // reporting service, for example Sentry
    console.warn(error);
  };

  _handleFinishLoading = () => {
    this.setState({ isLoadingComplete: true });
  };
}

const Nav = createStackNavigator(
  {
    Home: {
      screen: Home
    },
    Roads: {
      screen: Roads,
      title: 'Home',
      headerStyle: {
        backgroundColor: '#0F68C9',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },

    RoadsMapPicker: Picker,
    SubmitPothole: {
      screen: SubmitPothole,
      title: 'Confirm Location',
    },
    Camera: Camera,
    Rubbish: Rubbish
  }
);


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
