import React from 'react';
import {View, Text, FlatList, StyleSheet, Button} from 'react-native';

const CustomerList = ({data}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Données Clients</Text>
      <FlatList
        data={data}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => (
          <View style={styles.itemContainer}>
            <Text style={styles.fullName}>{item.full_name}</Text>
            <Text style={styles.email}>{item.email}</Text>
            <Button
              title="Mettre à jour"
              onPress={() =>
                navigation.navigate('CustomerUpdate', {customerId: item.id})
              }
            />
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  itemContainer: {
    backgroundColor: '#f0f0f0',
    padding: 10,
    marginVertical: 5,
    borderRadius: 5,
  },
  fullName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  email: {
    fontSize: 14,
    color: 'gray',
  },
});

export default CustomerList;
