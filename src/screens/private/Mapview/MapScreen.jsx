import React from 'react';
import {View, StyleSheet} from 'react-native';
import MapView, {Marker} from 'react-native-maps';

const citiesCoordinates = [
  {latitude: 14.634915, longitude: -61.028746, name: 'Fort-de-France'},
  {latitude: 14.480794, longitude: -60.890503, name: 'Le Lamentin'},
  {latitude: 14.742782, longitude: -60.949275, name: 'Saint-Pierre'},
  {latitude: 14.6161, longitude: -61.051, name: 'Schoelcher'},
  {latitude: 14.6126, longitude: -60.8926, name: 'Ducos'},
  {latitude: 14.4576, longitude: -60.8728, name: 'Le François'},
  {latitude: 14.6024, longitude: -61.0737, name: 'Les Trois-Îlets'},
  {latitude: 14.6736, longitude: -61.0412, name: 'Le Robert'},
  {latitude: 14.7584, longitude: -60.9984, name: 'Case-Pilote'},
  {latitude: 14.7469, longitude: -60.9486, name: 'Le Morne-Rouge'},
];

const initialRegion = {
  latitude: 14.6221916,
  longitude: -61.0293332,
  latitudeDelta: 0.5,
  longitudeDelta: 0.5,
};

const MapScreen = () => {
  return (
    <View style={styles.container}>
      <MapView style={styles.map} initialRegion={initialRegion}>
        {citiesCoordinates.map((city, index) => (
          <Marker
            key={index}
            coordinate={{latitude: city.latitude, longitude: city.longitude}}
            title={city.name}
          />
        ))}
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    flex: 1,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

export default MapScreen;
