import React, {useState} from 'react';
import {View, Text, Modal, Button, StyleSheet} from 'react-native';
import MapView, {Marker} from 'react-native-maps';

const GPSDataMap = ({navigation, data}) => {
  console.log(data);
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
        {data.map((item, index) => (
          <Marker
            key={index}
            coordinate={{
              latitude: item?.gpsdata.latitude,
              longitude: item?.gpsdata.longitude,
            }}
            title={`IMEI: ${item?.imei}`}
            description={`Vitesse: ${item?.gpsdata.speed}`}
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
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
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

export default GPSDataMap;
