import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Constants, MapView, Location, Permissions } from 'expo';
import Spinner from '../Global/Spinner';

export default class Picker extends Component {
    state = {
        mapRegion: { latitude: 0, longitude: 0, latitudeDelta: 0.25, longitudeDelta: 0.25 },
        hasLocationPermissions: false,
        locationResult: null,
        address: null,
        fullAddress: null,
        loading: true
    };

    componentDidMount() {
        this._getLocationAsync();
    }

    _handleMapRegionChange = mapRegion => {
        this.setState({ mapRegion });
        this.getPlace()
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

        // Center the map on the location we just fetched.
        this.setState({ mapRegion: { latitude: location.coords.latitude, longitude: location.coords.longitude, latitudeDelta: 0.003, longitudeDelta: 0.003 } });
        this.setState({ loading: false })
    };

    getPlace() {
        let url = 'https://maps.googleapis.com/maps/api/geocode/json?address=' + this.state.mapRegion.latitude + ',' + this.state.mapRegion.longitude + '&key=' + 'AIzaSyB4iNnQ7LQUfbz0YUAzKTLh-d6AdCfyIDY'
        fetch(url)
            .then((response) => response.json())
            .then((responseJson) => {
                if (responseJson.results[0]) {
                    this.setState({ address: JSON.stringify(responseJson.results[0]['address_components']) });
                }

                let fullAddress = ''
                for (var addressLine of responseJson.results[0]['address_components']) {
                    fullAddress += addressLine['long_name'] + " "
                }

                console.log(this.state.address);


                this.setState({
                    fullAddress: fullAddress
                })

            })
    }

    render() {

        let display = ''

        if (this.state.loading) {
            return (
                <Spinner />

            )
        } else if (!this.state.loading) {



            return (
                <View style={styles.container}
                >

                    {
                        this.state.locationResult === null ?
                            <Text>Finding your current location...</Text> :
                            this.state.hasLocationPermissions === false ?
                                <Text>Location permissions are not granted.</Text> :
                                this.state.mapRegion === null ?
                                    <Text>Map region doesn't exist.</Text> :
                                    <MapView
                                        style={{ alignSelf: 'stretch', height: 250 }}
                                        region={this.state.mapRegion}
                                        onRegionChangeComplete={this._handleMapRegionChange}
                                        draggable
                                        onSelect={() => console.log('onSelect', arguments)}
                                        onDrag={() => console.log('onDrag', arguments)}
                                        onDragStart={() => console.log('onDragStart', arguments)}

                                    >
                                        <MapView.Marker
                                            coordinate={
                                                this.state.mapRegion
                                            }
                                        />

                                    </MapView>
                    }

                    <Text>
                        Lat: {this.state.mapRegion.latitude}
                    </Text>
                    <Text>
                        Long: {this.state.mapRegion.longitude}
                    </Text>
                    <Text>
                        Address: {this.state.fullAddress}
                    </Text>

                </View>

            );
        }

    }
}

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        // height: 200,
        // alignItems: 'center',
        // justifyContent: 'center',
        // paddingTop: Constants.statusBarHeight,
        // backgroundColor: '#ecf0f1',
    },
    paragraph: {
        margin: 24,
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#34495e',
    },
});
