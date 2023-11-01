import React from 'react';
import {View, Text, FlatList, StyleSheet, Button} from 'react-native';

const ImeiList = ({data}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Numéros IMEI</Text>
      <FlatList
        data={data}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => (
          <View style={styles.itemContainer}>
            <Text style={styles.imei}>{item.imei}</Text>
            <Text style={styles.blacklist}>
              {item.blacklist ? 'Sur Liste Noire' : 'Non Sur Liste Noire'}
            </Text>
            <Button
              title="Mettre à jour"
              onPress={() =>
                navigation.navigate('ImeiUpdate', {customerId: item.id})
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
  imei: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  blacklist: {
    fontSize: 14,
    color: 'gray',
  },
});

export default ImeiList;
