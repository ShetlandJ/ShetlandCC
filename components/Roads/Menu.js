import React, { Component } from 'react';
import { FontAwesome } from "@expo/vector-icons"
import MenuItem from './MenuItem'
import { Col, Row, Grid } from "react-native-easy-grid";
import { TouchableHighlight, TouchableOpacity } from 'react-native'

import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

export default class Menu extends Component {
  render() {
    // const { navigate } = this.props.navigation;

    return (
      <React.Fragment>

        <View style={styles.menu}>

          <TouchableOpacity
            style={styles.container}
            onPress={() => this.props.navigation.push('RoadsMapPicker')}
          >
              <MenuItem text="Potholes" />
          </TouchableOpacity>


          <MenuItem
            text="Poor road surface"
          />

          <MenuItem
            text="Road sign faults"
          />
        </View>
      </React.Fragment>
    );
  }
}

const styles = StyleSheet.create({
  menu: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }

});
