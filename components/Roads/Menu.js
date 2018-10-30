import React, { Component } from 'react';
import { FontAwesome } from "@expo/vector-icons"
import MenuItem from './MenuItem'
import { Col, Row, Grid } from "react-native-easy-grid";

import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

export default class Menu extends Component {
  render() {
    return (
        <View style={styles.menu}>

          <MenuItem
            text="Potholes"
          />

          <MenuItem
            text="Poor road surface"
          />

          <MenuItem
            text="Road sign faults"
          />
        </View>
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
