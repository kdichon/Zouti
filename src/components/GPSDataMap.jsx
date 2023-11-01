import React, {useState} from 'react';
import {View, Text, Modal, Button, StyleSheet} from 'react-native';
import MapView, {Marker} from 'react-native-maps';

const GPSDataMap = ({data}) => {
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
          latitude: 0, // Latitude initiale
          longitude: 0, // Longitude initiale
          latitudeDelta: 0.0922, // Delta de latitude pour le zoom initial
          longitudeDelta: 0.0421, // Delta de longitude pour le zoom initial
        }}>
        {data.map(item => (
          <Marker
            key={item.id}
            coordinate={{latitude: item.latitude, longitude: item.longitude}}
            title={`IMEI: ${item.imei}`}
            description={`Vitesse: ${item.speed}`}
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
            <Text>Vitesse: {selectedData?.speed}</Text>
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
