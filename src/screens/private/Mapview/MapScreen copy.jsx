import React, {useEffect, useState} from 'react';
import {View, StyleSheet, Modal, Text, Button, Dimensions} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
// import OpenStreetMap from 'react-native-open-street-map';

const MapScreen = () => {
  const {width, height} = Dimensions.get('window');
  const [currentLocation, setCurrentLocation] = useState();

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

  const gpsDatas = [
    {
      id: 1,
      imei: '863003048313878',
      timestamp: '1699815960',
      datetime: '2023-11-12 19:06:00',
      priority: 0,
      gpsdata: {
        longitude: -61.0293332,
        latitude: 14.6221916,
        altitude: 70,
        angle: 0,
        satellites: 14,
        speed: 0,
      },
      iodata: {
        eventID: 0,
        elementCount: 10,
        iodata: [
          {ID: 80, value: 1},
          {ID: 200, value: 0},
          {ID: 69, value: 1},
          {ID: 181, value: 8},
          {ID: 182, value: 5},
          {ID: 205, value: 37426},
          {ID: 206, value: 1232},
          {ID: 68, value: 0},
          {ID: 241, value: 34004},
          {ID: 16, value: 28710764},
        ],
      },
    },
    {
      id: 2,
      imei: '863003048313878',
      timestamp: '1699815770',
      datetime: '2023-11-12 19:02:50',
      priority: 0,
      gpsdata: {
        longitude: -61.0293332,
        latitude: 14.6221916,
        altitude: 70,
        angle: 0,
        satellites: 15,
        speed: 0,
      },
      iodata: {
        eventID: 0,
        elementCount: 10,
        iodata: [
          {ID: 80, value: 1},
          {ID: 200, value: 0},
          {ID: 69, value: 1},
          {ID: 181, value: 7},
          {ID: 182, value: 5},
          {ID: 205, value: 37656},
          {ID: 206, value: 1232},
          {ID: 68, value: 0},
          {ID: 241, value: 34004},
          {ID: 16, value: 28710764},
        ],
      },
    },
  ];

  const initialRegion = {
    latitude: 14.6221916, // Latitude initiale
    longitude: -61.0293332, // Longitude initiale
    latitudeDelta: 0.00922, // Delta de latitude pour le zoom initial
    longitudeDelta: 0.00922 * (width / height), // Delta de longitude pour le zoom initial
  };

  // const [onRegionChange, setOnRegionChange] = useState();
  // setOnRegionChange(initialRegion);

  const [selectedData, setSelectedData] = useState(null);

  const handleMarkerPress = data => {
    setSelectedData(data);
  };

  const closeModal = () => {
    setSelectedData(null);
  };

  useEffect(() => {
    getCurrentLocation();
  }, []);

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        region={initialRegion}
        showsUserLocation={true}
        showsMyLocationButton={true}
        zoomEnabled={true}
        zoomControlEnabled>
        {gpsDatas.map(item => (
          <Marker
            style={{width: 10, height: 10}}
            key={item.id}
            coordinate={{
              latitude: item.gpsdata.latitude,
              longitude: item.gpsdata.longitude,
            }}
            // image={require('../assets/images/png-transparent-red.png')}
            title={`IMEI: ${item.imei}`}
            description={`Vitesse: ${item.gpsdata.speed}`}
            onPress={() => handleMarkerPress(item)}
          />
        ))}
        {/* {citiesCoordinates.map((item, index) => (
          <Marker
            key={index}
            coordinate={{
              latitude: item?.latitude,
              longitude: item?.longitude,
            }}
            // image={require('../assets/images/png-transparent-red.png')}
            title={`Ville : ${item?.name}`}
            // description={`Vitesse: ${item.gpsdata?.speed}`}
            onPress={() => handleMarkerPress(item)}
          />
        ))} */}
      </MapView>
      <Modal
        animationType="slide"
        transparent={true}
        visible={selectedData !== null}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text>IMEI: {selectedData?.imei}</Text>
            <Text>Vitesse: {selectedData?.gpsdata.speed}</Text>
            <Button title="Fermer" onPress={closeModal} />
          </View>
        </View>
      </Modal>
    </View>
    // <GPSDataMap data={gpsDatas} />
  );
};

const styles = StyleSheet.create({
  container: {
    // ...StyleSheet.absoluteFillObject,
    flex: 1,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
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

export default MapScreen;
