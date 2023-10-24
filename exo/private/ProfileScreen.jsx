import {View, Text, TextInput, Button, ScrollView} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import firestore from '@react-native-firebase/firestore';

const ProfileScreen = () => {
  const [email, setEmail] = useState('');
  const [fname, setFname] = useState('');
  const [user, setUser] = useState();
  const [lname, setLname] = useState('');
  const [country, setCountry] = useState('');
  const [phone, setPhone] = useState();
  // Lecture du State du store Redux
  const userId = useSelector(state => state.user);
  // console.log(userId);

  const Update = async navigation => {
    console.log(userId, fname, lname, phonenumber, country);

    const snapNewUser = await firestore()
      .collection('userinformations')
      .doc(userId)
      .update({
        firstname: fname,
        lastname: lname,
        phonenumber: phone,
        country: country,
      });
    console.log(userId, fname, lname, phonenumber, country);
    console.log(snapNewUser.data());
    setEmail(snapUser.data().email);
    setFname(snapUser.data().firstname);
    setLname(snapUser.data().lastname);
    setPhone(snapUser.data().phonenumber);
  };

  const Read = async () => {
    const snapUser = await firestore()
      .collection('userinformations')
      .doc(userId)
      .get();
    console.log(snapUser.exists, userId);
    console.log(snapUser.data());
    setEmail(snapUser.data().email);
    setFname(snapUser.data().firstname);
    setLname(snapUser.data().lastname);
    setPhone(snapUser.data().phonenumber);
    setCountry(snapUser.data().country);
  };

  const chooseFile = () => {
    console.log('choisir un fichier');
  };

  useEffect(() => {
    Read();
  }, []);

  return (
    <ScrollView>
      <TextInput placeholder="Email" value={email} onChangeText={setEmail} />
      <TextInput placeholder="fname" value={fname} onChangeText={setFname} />
      <TextInput placeholder="lname" value={lname} onChangeText={setLname} />
      <TextInput
        placeholder="country"
        value={country}
        onChangeText={setCountry}
      />
      <TextInput placeholder="phone" number={phone} onChangeText={setPhone} />
      <Button title="Update" onPress={Update} />
      <Button icon="add" onPress={chooseFile} />
    </ScrollView>
  );
};

export default ProfileScreen;
