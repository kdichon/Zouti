import React, {useEffect, useState} from 'react';
import {View, Text, FlatList} from 'react-native';
import axios from 'axios';

class DataStore {
  constructor(serverHost, serverPort) {
    this.apiBaseUrl = `http://${serverHost}:${serverPort}`;
    console.log(this.apiBaseUrl);
  }

  async getCustomerData() {
    try {
      const response = await axios.get(`${this.apiBaseUrl}/customers`);
      return response.data;
    } catch (error) {
      console.error('Erreur lors de la récupération des clients : ', error);
      throw error;
    }
  }

  async getAdminData() {
    try {
      const response = await axios.get(`${this.apiBaseUrl}/admins`);
      return response.data;
    } catch (error) {
      console.error(
        'Erreur lors de la récupération des administrateurs : ',
        error,
      );
      throw error;
    }
  }
  // Ajoutez d'autres méthodes pour récupérer les données d'autres tables si nécessaire
}

const RemoteDataServer = () => {
  const [customerData, setCustomerData] = useState([]);
  const [adminData, setAdminData] = useState([]);

  const serverHost = '37.187.1.92'; // Adresse IP ou nom de domaine de votre serveur
  const serverPort = 8089; // Port de votre serveur

  useEffect(() => {
    const dataStore = new DataStore(serverHost, serverPort);

    dataStore
      .getCustomerData()
      .then(data => {
        setCustomerData(data);
      })
      .catch(error => {
        console.error('Erreur lors de la récupération des clients : ', error);
      });

    dataStore
      .getAdminData()
      .then(data => {
        setAdminData(data);
      })
      .catch(error => {
        console.error(
          'Erreur lors de la récupération des administrateurs : ',
          error,
        );
      });
  }, []);

  return (
    <View>
      <Text>Liste des clients :</Text>
      <FlatList
        data={customerData}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => (
          <View>
            <Text>Nom complet : {item.full_name}</Text>
            <Text>Email : {item.email}</Text>
            {/* Affichez d'autres données clients ici */}
          </View>
        )}
      />

      <Text>Liste des administrateurs :</Text>
      <FlatList
        data={adminData}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => (
          <View>
            <Text>Nom complet : {item.full_name}</Text>
            <Text>Email : {item.email}</Text>
            {/* Affichez d'autres données administrateurs ici */}
          </View>
        )}
      />
    </View>
  );
};

export default RemoteDataServer;
