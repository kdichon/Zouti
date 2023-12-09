import React, {useEffect, useState} from 'react';
import {View, StyleSheet, Modal, Text, Button, Dimensions} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';

const {width, height} = Dimensions.get('window');
const initialRegion = {
  latitude: 14.6221916, // Latitude initiale
  longitude: -61.0293332, // Longitude initiale
  latitudeDelta: 0.00922, // Delta de latitude pour le zoom initial
  longitudeDelta: 0.00922 * (width / height), // Delta de longitude pour le zoom initial
};

const secondRegion = {
  latitude: 14.6221916, // Latitude initiale
  longitude: -60.0293332, // Longitude initiale
  latitudeDelta: 0.00922, // Delta de latitude pour le zoom initial
  longitudeDelta: 0.00922 * (width / height), // Delta de longitude pour le zoom initial
};

const MapScreen = () => {
  const [currentLocation, setCurrentLocation] = useState(initialRegion);

  const getCurrentLocation = () => {
    Geolocation.getCurrentPosition(
      position => {
        const {latitude, longitude} = position.coords;
        setCurrentLocation({latitude, longitude});
        console.log('Lat: ', latitude, ' Lon : ', longitude);
      },
      error => alert('error message Geo', error.message),
      {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000},
    );
  };

  const onRegionChange = region => {
    console.log(region);
    setCurrentLocation({region});
  };

  const timerRegion = () => {
    console.log('Timer start');
    setTimeout(() => {
      console.log('Timer OK');
      setCurrentLocation(secondRegion);
    }, 10000);
  };

  useEffect(() => {
    // timerRegion();
  }, []);

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        region={initialRegion}
        // onRegionChange={onRegionChange}
        // showsUserLocation={true}
        // showsMyLocationButton={true}
        // zoomEnabled={true}
        // zoomControlEnabled
      >
        <Marker coordinate={initialRegion} title="Marker" />
      </MapView>
    </View>
  );
};

export default MapScreen;

const styles = StyleSheet.create({
  container: {
    // ...StyleSheet.absoluteFillObject,
    flex: 1,
  },
  map: {
    // ...StyleSheet.absoluteFillObject,
    flex: 1,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 5,
    elevation: 5,
  },
});
