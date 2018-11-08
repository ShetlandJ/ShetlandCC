import React from 'react';
import { connect } from 'react-redux'
import { Text, View, StyleSheet, Button } from 'react-native';


class SubmitPothole extends React.Component {

  
  render() {
    const { navigate } = this.props.navigation;

    return (
      <View style={styles.container}>

        <Text style={styles.text}>Pothole report</Text>

        <Text>at:</Text>
        <Text style={styles.text}>{this.props.placeName}</Text>

        <Button 
          title="Add photo"
          onPress={() => navigate('Camera')}
          />
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    placeName: state.placeName
  }
}

export default connect(mapStateToProps)(SubmitPothole)

const styles = StyleSheet.create({
  container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
  },
  text: {
    fontSize: 20
  }

});
