import React, {useState, useEffect} from 'react';
import {View, Text, TextInput, Button, StyleSheet} from 'react-native';
import DataStore from './DataStore';

const CustomerUpdate = ({route, navigation}) => {
  const {customerId} = route.params;
  const [customerData, setCustomerData] = useState({});
  const [updatedData, setUpdatedData] = useState({});
  const dataStore = new DataStore();

  useEffect(() => {
    // Récupérez les données du client à partir de la base de données en utilisant l'ID
    const fetchCustomerData = async () => {
      const data = await dataStore.getCustomerDataById(customerId);
      setCustomerData(data);
    };
    fetchCustomerData();
  }, [customerId]);

  const handleUpdate = async () => {
    // Mettez à jour les données du client dans la base de données en utilisant la classe DataStore
    await dataStore.updateCustomer(customerId, updatedData);
    // Redirigez l'utilisateur vers la liste des clients après la mise à jour
    navigation.navigate('CustomerList');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Mise à jour des Données du Client</Text>
      <TextInput
        style={styles.input}
        placeholder="Nom complet"
        value={updatedData.full_name}
        onChangeText={text => setUpdatedData({...updatedData, full_name: text})}
      />
      <TextInput
        style={styles.input}
        placeholder="Adresse e-mail"
        value={updatedData.email}
        onChangeText={text => setUpdatedData({...updatedData, email: text})}
      />
      <Button title="Mettre à jour" onPress={handleUpdate} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    paddingLeft: 10,
  },
});

export default CustomerUpdate;
