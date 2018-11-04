import { Col, Row, Grid } from "react-native-easy-grid";
import React, { Component } from 'react';
import MenuItem from './MenuItem'
import { TouchableHighlight } from 'react-native';

import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

export default class Menu extends Component {

  constructor(props) {
    super(props);
    this.state = {
      msg: 'hello'
    };
  }

  render() {
    const { navigate } = this.props.navigation;

    return (
      <React.Fragment>

        <View style={styles.menu}>

          <TouchableHighlight
            style={styles.container}
            onPress={() => navigate('Roads')}
            navigation={navigate}
            >
            <MenuItem name='road' text='Roads' />
          </TouchableHighlight>

          <TouchableHighlight
            style={styles.container}
            onPress={() => navigate('Rubbish')}>
            <MenuItem name='trash' text='Litter & Rubbish' />
          </TouchableHighlight>

          <TouchableHighlight
            style={styles.container}
            onPress={() => navigate('Rubbish')}>
            <MenuItem name='lightbulb-o' text='Streetlights' />
          </TouchableHighlight>

          <TouchableHighlight
            style={styles.container}
            onPress={() => navigate('Rubbish')}>
            <MenuItem name='list-ul' text='More services' />
          </TouchableHighlight>

          <TouchableHighlight
            style={styles.container}
            onPress={() => navigate('Roads')}>
            <MenuItem name='ship' text='Ferries' />
          </TouchableHighlight>

          <TouchableHighlight
            style={styles.container}
            onPress={() => navigate('Roads')}>
            <MenuItem name='bus' text='Busses' />
          </TouchableHighlight>

          <TouchableHighlight
            style={styles.container}
            onPress={() => navigate('Roads')}>
            <MenuItem name='users' text='My councillors' />
          </TouchableHighlight>

          <TouchableHighlight
            style={styles.container}
            onPress={() => navigate('Map')}>
            <MenuItem name='cog' text='Settings' />
          </TouchableHighlight>

        </View>

      </React.Fragment>

    );
  }
}

const styles = StyleSheet.create({

  menu: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'flex-start',
    height: 100,
    paddingTop: 10
  },
  container: {
    width: '40%',
    margin: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },

});
