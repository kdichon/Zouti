import {View, Text, Image, FlatList, TouchableOpacity} from 'react-native';
import React, {useEffect} from 'react';
// import ItemFormation from '../../src/components/ItemFormation';
// import ItemGF from '../../src/components/ItemGF';
import firestore from '@react-native-firebase/firestore';
import {Button} from 'react-native-paper';
import auth from '@react-native-firebase/auth';

const HomeScreen = ({navigation}) => {
  console.log('HomeScreen -> ON');

  // const {user} = route.params;

  const Profile = () => {
    // auth().signOut();
    navigation.navigate('Settings');
  };

  const GpsData = () => {
    // auth().signOut();
    navigation.navigate('Settings');
  };

  const SignOut = () => {
    auth().signOut();
    // navigation.navigate('Profile');
  };

  return (
    <View
      style={{
        flex: 1,
        gap: 10,
        justifyContent: 'flex-end',
        backgroundColor: '#705fff',
      }}>
      <View
        style={{
          flexDirection: 'row',
          gap: 20,
          marginTop: 80,
          marginHorizontal: 10,
        }}>
        <TouchableOpacity onPress={Profile}>
          <Image
            source={require('./../asset/avatar1.jpeg')}
            style={{height: 60, width: 60, borderRadius: 40}}
          />
        </TouchableOpacity>

        <View>
          <Button icon="setting" onPress={GpsData} />
          <Button icon="logout" onPress={SignOut}>
            Logout
          </Button>
        </View>
        <View>
          <View>
            <Text style={{color: '#fcfcff', fontSize: 30, fontWeight: '700'}}>
              Hi, {/* {user?.email} */}
            </Text>
          </View>
          <View>
            <Text style={{color: '#fcfcff', fontSize: 18}}>
              learning is easier and faster with us
            </Text>
          </View>
        </View>
      </View>

      <View
        style={{
          flex: 1,
          backgroundColor: '#FFF',
          borderTopLeftRadius: 40,
          borderTopEndRadius: 40,
          marginTop: 10,
        }}>
        <View style={{margin: 20}}>
          <Text style={{fontSize: 30, color: '#000', fontWeight: '400'}}>
            Top Courses
          </Text>
        </View>

        {/* <FlatList
          data={data}
          renderItem={({item}) => <ItemFormation formation={item} />}
          keyExtractor={item => item.id}
          horizontal={true}
          pagingEnabled
          style={{minHeight: 250}}
        /> */}

        <View style={{marginHorizontal: 20}}>
          <Text style={{fontSize: 30, color: '#000'}}>For You</Text>
        </View>

        {/* <FlatList
          data={data}
          renderItem={({item}) => <ItemGF formation={item} />}
          keyExtractor={item => item.id}
          numColumns={2}
        /> */}
      </View>
    </View>
  );
};

export default HomeScreen;
