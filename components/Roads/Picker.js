import React, { Component } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { Constants, MapView, Location, Permissions } from 'expo';
import Spinner from '../Global/Spinner';
import { connect } from 'react-redux'

class PotholePicker extends Component {

    static navigationOptions = {
        title: 'Pick location',
        headerStyle: {
            backgroundColor: '#0F68C9',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',
        },
    };

    state = {
        mapRegion: null,
        hasLocationPermissions: false,
        locationResult: null,
        address: null,
        fullAddress: null,
        loading: true,
    };

    componentDidMount() {
        this._getLocationAsync();
    }

    _handleMapRegionChange = mapRegion => {
        this.getPlace(mapRegion)
    };

    _getLocationAsync = async () => {
        let { status } = await Permissions.askAsync(Permissions.LOCATION);
        if (status !== 'granted') {
            this.setState({
                locationResult: 'Permission to access location was denied',
            });
        } else {
            this.setState({ hasLocationPermissions: true });
        }

        let location = await Location.getCurrentPositionAsync({});
        this.setState({ locationResult: JSON.stringify(location) });

        this.setState({ mapRegion: { latitude: location.coords.latitude, longitude: location.coords.longitude, latitudeDelta: 0.003, longitudeDelta: 0.003 } });
        this.setState({ loading: false })
    };

    getPlace = mapRegion => {

        let url = 'https://maps.googleapis.com/maps/api/geocode/json?address=' + mapRegion.latitude + ',' + mapRegion.longitude + '&key=' + 'AIzaSyB4iNnQ7LQUfbz0YUAzKTLh-d6AdCfyIDY'
        fetch(url)

            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({ mapRegion });

                if (responseJson.results[0]['formatted_address']) {

                    this.props.address(responseJson.results[0]['formatted_address'])
                    this.setState({
                        fullAddress: responseJson.results[0]['formatted_address']
                    })
                }


            })
    }

    render() {

        const { navigate } = this.props.navigation;

        if (this.state.loading) {
            return (
                <Spinner />
            )

        } else if (!this.state.loading) {

            return (
                <View style={styles.container}>

                    {
                        this.state.locationResult === null ?
                            <Text>Finding your current location...</Text> :
                            this.state.hasLocationPermissions === false ?
                                <Text>Location permissions are not granted.</Text> :
                                this.state.mapRegion === null ?
                                    <Text>Map region doesn't exist.</Text> :
                                    <MapView
                                        style={{ alignSelf: 'stretch', height: 350 }}
                                        region={this.state.mapRegion}
                                        onRegionChangeComplete={this.getPlace}
                                        mapType={'hybrid'}
                                        zoomEnabled={true}
                                        rotateEnabled={true}
                                    >
                                        <MapView.Marker
                                            coordinate={
                                                this.state.mapRegion
                                            }
                                        />
                                    </MapView>
                    }

                    <Button
                        title="Next"
                        onPress={() => navigate('SubmitPothole')}
                    />
                    <Text style={styles.textContainer}>
                        {this.props.placeName}
                    </Text>


                </View>

            );
        }

    }
}

function mapStateToProps(state) {
    return {
        placeName: state.placeName
    }
}

function mapDispatchToProps(dispatch) {
    return {
        address: (value) => dispatch({
            type: 'SET_ADDRESS',
            placeName: value
        })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PotholePicker)


const styles = StyleSheet.create({
    textContainer: {
        textAlign: 'center'
    },
    address: {
        fontSize: 20
    },
    paragraph: {
        margin: 24,
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#34495e',
    },
});
