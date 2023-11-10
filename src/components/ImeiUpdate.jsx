import React, {useState, useEffect} from 'react';
import {View, Text, TextInput, Button, StyleSheet} from 'react-native';
import DataStore from '../core/DataStore';

const ImeiUpdate = ({route, navigation}) => {
  const {imeiId} = route.params;
  const [imeiData, setImeiData] = useState({});
  const [updatedData, setUpdatedData] = useState({});
  const DataStore = new DataStore();

  useEffect(() => {
    // Récupérez les données du numéro IMEI à partir de la base de données en utilisant l'ID
    const fetchImeiData = async () => {
      const data = await dataStore.getImeiDataById(imeiId);
      setImeiData(data);
    };
    fetchImeiData();
  }, [imeiId]);

  const handleUpdate = async () => {
    // Mettez à jour les données du numéro IMEI dans la base de données en utilisant la classe DataStore
    await dataStore.updateImei(imeiId, updatedData);
    // Redirigez l'utilisateur vers la liste des numéros IMEI après la mise à jour
    navigation.navigate('ImeiList');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Mise à jour des Numéros IMEI</Text>
      <TextInput
        style={styles.input}
        placeholder="Numéro IMEI"
        value={updatedData.imei}
        onChangeText={text => setUpdatedData({...updatedData, imei: text})}
      />
      <Text style={styles.label}>Liste Noire</Text>
      <TextInput
        style={styles.input}
        placeholder="true/false"
        value={updatedData.blacklist}
        onChangeText={text => setUpdatedData({...updatedData, blacklist: text})}
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
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
});

export default ImeiUpdate;
