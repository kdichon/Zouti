import {View, Text, Image, FlatList} from 'react-native';
import React, {useEffect} from 'react';
import ItemFormation from '../../src/components/ItemFormation';
import ItemGF from '../../src/components/ItemGF';
import firestore from '@react-native-firebase/firestore';
import {Button} from 'react-native-paper';
import auth from '@react-native-firebase/auth';

const HomeScreen = () => {
  const SignOut = () => {
    auth().signOut();
  };

  const data = [
    {
      id: 1,
      photo: 'https://cdn-icons-png.flaticon.com/512/147/147144.png',
      nom: "D'Oliver VENOM",
      note: '4.9',
      formation: 'UX - UI Deseign',
      poste: 'teacher',
      color: '#00cfcb',
    },
    {
      id: 2,
      photo: 'https://cdn-icons-png.flaticon.com/512/147/147144.png',
      nom: "D'Oliver VENOM",
      note: '4.9',
      formation: 'Animation in After Effects',
      poste: 'teacher',
      color: '#ff658c',
    },
    {
      id: 3,
      photo: 'https://cdn-icons-png.flaticon.com/512/147/147144.png',
      nom: "D'Oliver VENOM",
      note: '4.9',
      formation: 'Mobile App design',
      poste: 'teacher',
      color: '#7666ff',
    },
    {
      id: 4,
      photo: 'https://cdn-icons-png.flaticon.com/512/147/147144.png',
      nom: "D'Oliver VENOM",
      note: '4.9',
      formation: 'Data Scientist',
      poste: 'teacher',
      color: '#00cfcb',
    },
    {
      id: 5,
      photo: 'https://cdn-icons-png.flaticon.com/512/147/147144.png',
      nom: "D'Oliver VENOM",
      note: '4.9',
      formation: 'Requet SQL',
      poste: 'teacher',
      color: '#ff658c',
    },
  ];

  // const mig = () => { // migre les données de data dans fire base sans protection doublon
  // firestore()
  // .collection('exo')
  // .add(data)
  // data.map(doc=> firestore().collection('exo').add(doc))
  //}

  //  useEffect(() => {

  //  }, [])

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
        <Image
          source={require('./asset/avatar1.jpeg')}
          style={{height: 60, width: 60, borderRadius: 40}}
        />

        <View>
          <Button icon="camera" onPress={SignOut}>
            Logout
          </Button>
        </View>
        <View>
          <View>
            <Text style={{color: '#fcfcff', fontSize: 30, fontWeight: '700'}}>
              Hi, Davis
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

        <FlatList
          data={data}
          renderItem={({item}) => <ItemFormation formation={item} />}
          keyExtractor={item => item.id}
          horizontal={true}
          pagingEnabled
          style={{minHeight: 250}}
        />

        <View style={{marginHorizontal: 20}}>
          <Text style={{fontSize: 30, color: '#000'}}>For You</Text>
        </View>

        <FlatList
          data={data}
          renderItem={({item}) => <ItemGF formation={item} />}
          keyExtractor={item => item.id}
          numColumns={2}
        />
      </View>
    </View>
  );
};

export default HomeScreen;
