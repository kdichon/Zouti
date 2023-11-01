// Import des modules nécessaires
import React, {useState, useEffect} from 'react';
import {View, Text, Button, FlatList, StyleSheet} from 'react-native';
import DataStore from './DataStore'; // Assurez-vous que DataStore est correctement importé

// Créez une instance de la classe DataStore
const dataStore = new DataStore();

// Composant principal de l'application
const Demo = () => {
  const [customers, setCustomers] = useState([]);
  const [imeiList, setImeiList] = useState([]);
  const [gpsData, setGpsData] = useState([]);

  // Fonction pour charger les données des clients
  const loadCustomerData = async () => {
    const customerData = await dataStore.getCustomerData();
    setCustomers(customerData);
  };

  // Fonction pour charger les numéros IMEI
  const loadImeiData = async () => {
    const imeiData = await dataStore.getImeiData();
    setImeiList(imeiData);
  };

  // Fonction pour charger les données GPS
  const loadGpsData = async () => {
    const gpsData = await dataStore.getGpsData();
    setGpsData(gpsData);
  };

  // Appelez les fonctions de chargement des données au chargement initial
  useEffect(() => {
    loadCustomerData();
    loadImeiData();
    loadGpsData();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Données Clients</Text>
      <FlatList
        data={customers}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => <Text>{item.full_name}</Text>}
      />

      <Text style={styles.heading}>Numéros IMEI</Text>
      <FlatList
        data={imeiList}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => <Text>{item.imei}</Text>}
      />

      <Text style={styles.heading}>Données GPS</Text>
      <FlatList
        data={gpsData}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => (
          <Text>{`IMEI: ${item.imei}, Longitude: ${item.longitude}, Latitude: ${item.latitude}`}</Text>
        )}
      />
    </View>
  );
};

export default Demo;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
  },
});
