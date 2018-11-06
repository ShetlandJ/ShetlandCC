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

class Home extends Component {

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
        <Button
          title="set address"
          onPress={() => this.props.address('new address')}
        />
        <Text>{this.props.placeName}</Text>
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    address: state.address
  }
}

function mapDispatchToProps(dispatch) {
  return {
    address: (value) => dispatch({
      type: 'UPDATE_ADDRESS',
      placeName: value
    })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)


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
