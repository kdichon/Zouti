import React, {useState} from 'react';
import {View, StyleSheet, Modal, Text, Button} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import GPSDataMap from '../../../components/GPSDataMap';

const MapScreen = () => {
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

  const gpsDatas = [
    {
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
      imei: '863003048313878',
      timestamp: '1699815950',
      datetime: '2023-11-12 19:05:50',
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
          {ID: 205, value: 37426},
          {ID: 206, value: 1232},
          {ID: 68, value: 0},
          {ID: 241, value: 34004},
          {ID: 16, value: 28710764},
        ],
      },
    },
    {
      imei: '863003048313878',
      timestamp: '1699815940',
      datetime: '2023-11-12 19:05:40',
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
          {ID: 182, value: 6},
          {ID: 205, value: 37426},
          {ID: 206, value: 1232},
          {ID: 68, value: 0},
          {ID: 241, value: 34004},
          {ID: 16, value: 28710764},
        ],
      },
    },
    {
      imei: '863003048313878',
      timestamp: '1699815930',
      datetime: '2023-11-12 19:05:30',
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
          {ID: 205, value: 37426},
          {ID: 206, value: 1232},
          {ID: 68, value: 0},
          {ID: 241, value: 34004},
          {ID: 16, value: 28710764},
        ],
      },
    },
    {
      imei: '863003048313878',
      timestamp: '1699815920',
      datetime: '2023-11-12 19:05:20',
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
      imei: '863003048313878',
      timestamp: '1699815910',
      datetime: '2023-11-12 19:05:10',
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
          {ID: 205, value: 37426},
          {ID: 206, value: 1232},
          {ID: 68, value: 0},
          {ID: 241, value: 34004},
          {ID: 16, value: 28710764},
        ],
      },
    },
    {
      imei: '863003048313878',
      timestamp: '1699815900',
      datetime: '2023-11-12 19:05:00',
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
          {ID: 205, value: 37426},
          {ID: 206, value: 1232},
          {ID: 68, value: 0},
          {ID: 241, value: 34004},
          {ID: 16, value: 28710764},
        ],
      },
    },
    {
      imei: '863003048313878',
      timestamp: '1699815890',
      datetime: '2023-11-12 19:04:50',
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
          {ID: 181, value: 10},
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
      imei: '863003048313878',
      timestamp: '1699815880',
      datetime: '2023-11-12 19:04:40',
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
          {ID: 181, value: 10},
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
      imei: '863003048313878',
      timestamp: '1699815870',
      datetime: '2023-11-12 19:04:30',
      priority: 0,
      gpsdata: {
        longitude: -61.0293332,
        latitude: 14.6221916,
        altitude: 70,
        angle: 0,
        satellites: 13,
        speed: 0,
      },
      iodata: {
        eventID: 0,
        elementCount: 10,
        iodata: [
          {ID: 80, value: 1},
          {ID: 200, value: 0},
          {ID: 69, value: 1},
          {ID: 181, value: 11},
          {ID: 182, value: 6},
          {ID: 205, value: 37426},
          {ID: 206, value: 1232},
          {ID: 68, value: 0},
          {ID: 241, value: 34004},
          {ID: 16, value: 28710764},
        ],
      },
    },
    {
      imei: '863003048313878',
      timestamp: '1699815860',
      datetime: '2023-11-12 19:04:20',
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
          {ID: 181, value: 10},
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
      imei: '863003048313878',
      timestamp: '1699815850',
      datetime: '2023-11-12 19:04:10',
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
          {ID: 181, value: 10},
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
      imei: '863003048313878',
      timestamp: '1699815840',
      datetime: '2023-11-12 19:04:00',
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
          {ID: 181, value: 10},
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
      imei: '863003048313878',
      timestamp: '1699815830',
      datetime: '2023-11-12 19:03:50',
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
          {ID: 181, value: 10},
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
      imei: '863003048313878',
      timestamp: '1699815820',
      datetime: '2023-11-12 19:03:40',
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
          {ID: 205, value: 37426},
          {ID: 206, value: 1232},
          {ID: 68, value: 0},
          {ID: 241, value: 34004},
          {ID: 16, value: 28710764},
        ],
      },
    },
    {
      imei: '863003048313878',
      timestamp: '1699815810',
      datetime: '2023-11-12 19:03:30',
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
          {ID: 205, value: 37426},
          {ID: 206, value: 1232},
          {ID: 68, value: 0},
          {ID: 241, value: 34004},
          {ID: 16, value: 28710764},
        ],
      },
    },
    {
      imei: '863003048313878',
      timestamp: '1699815800',
      datetime: '2023-11-12 19:03:20',
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
          {ID: 205, value: 37426},
          {ID: 206, value: 1232},
          {ID: 68, value: 0},
          {ID: 241, value: 34004},
          {ID: 16, value: 28710764},
        ],
      },
    },
    {
      imei: '863003048313878',
      timestamp: '1699815790',
      datetime: '2023-11-12 19:03:10',
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
      imei: '863003048313878',
      timestamp: '1699815780',
      datetime: '2023-11-12 19:03:00',
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
    latitude: 14.6221916,
    longitude: -61.0293332,
    latitudeDelta: 0.5,
    longitudeDelta: 0.5,
  };

  const [onRegionChange, setOnRegionChange] = useState();
  // setOnRegionChange(initialRegion);

  const [selectedData, setSelectedData] = useState(null);

  const handleMarkerPress = data => {
    setSelectedData(data);
  };

  const closeModal = () => {
    setSelectedData(null);
  };

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 14.6221916, // Latitude initiale
          longitude: -61.0293332, // Longitude initiale
          latitudeDelta: 0.00922, // Delta de latitude pour le zoom initial
          longitudeDelta: 0.00421, // Delta de longitude pour le zoom initial
        }}>
        {gpsDatas.map((item, index) => (
          <Marker
            key={index}
            coordinate={{
              latitude: item.gpsdata?.latitude,
              longitude: item.gpsdata?.longitude,
            }}
            // image={require('../assets/images/png-transparent-red.png')}
            title={`IMEI: ${item?.imei}`}
            description={`Vitesse: ${item.gpsdata?.speed}`}
            onPress={() => handleMarkerPress(item)}
          />
        ))}
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
    ...StyleSheet.absoluteFillObject,
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
