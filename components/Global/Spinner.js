import React, { Component } from 'react';
import { Animated, Easing } from 'react-native';
import { FontAwesome } from "@expo/vector-icons"
import {
    View,
    Text,
    StyleSheet,
    Button
} from 'react-native';

import spinner from '../../assets/images/spinner.png'

class FontAwesomeSpin extends Component {

    spinValue = new Animated.Value(0);

    componentDidMount() {
        this.spin();
    };

    spin = () => {

        this.spinValue.setValue(0);

        Animated.timing(
            this.spinValue,
            {
                toValue: 1,
                duration: 3000,
                easing: Easing.linear,
                useNativeDriver: true
            }
        ).start(() => this.spin());

    };

    render() {

        const rotate = this.spinValue.interpolate({ inputRange: [0, 1], outputRange: ['0deg', '360deg'] });

        return (
            <View style={styles.container}>

                <Animated.Image
                    style={{
                        width: 200,
                        height: 200,
                        transform: [{ rotate: rotate }]
                    }}
                    source={{ uri: 'https://community.thunkable.com/uploads/default/original/1X/a8c639f5bd67f6eecf3b7f2209c7e7fada621f9c.png' }} />

            </View>
        )

    }
}

const styles = StyleSheet.create({

    container: {

        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    }
});

export default FontAwesomeSpin;
