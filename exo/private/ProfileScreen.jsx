import {
  View,
  Text,
  TextInput,
  ScrollView,
  Platform,
  ActivityIndicator,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Button} from 'react-native-paper';
import {useSelector} from 'react-redux';
import firestore from '@react-native-firebase/firestore';
import storage from '@react-native-firebase/storage';
import ImageCropPicker from 'react-native-image-crop-picker';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

const ProfileScreen = () => {
  const [email, setEmail] = useState('');
  const [fname, setFname] = useState('');
  // const [user, setUser] = useState();
  const [lname, setLname] = useState('');
  const [country, setCountry] = useState('');
  const [phone, setPhone] = useState();
  const [status, setstatus] = useState();

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

  const callbackCamera = response => {
    console.log('response =>', response);
  };

  const chooseFile = async () => {
    console.log('choisir un fichier');
    const options = {
      title: 'Select Image',
      storageOptions: {
        skipBackup: true, // do not backup to iCloud
        path: 'images', // store camera images under Pictures/images for android and Documents/images for iOS
      },
    };
    // You can also use as a promise without 'callback':
    const result = await launchCamera(options, callbackCamera);
    console.log('result => ', result.assets[0].uri);

    // ImageCropPicker.showImagePicker(options, response => {
    //   if (response.didCancel) {
    //     console.log('User cancelled image picker', storage());
    //   } else if (response.error) {
    //     console.log('ImagePicker Error: ', response.error);
    //   } else if (response.customButton) {
    //     console.log('User tapped custom button: ', response.customButton);
    //   } else {
    //     // let path = this.getPlatformPath(response).value;
    //     let fileName = this.getFileName(response.fileName, path);
    //     this.setState({imagePath: path});
    //   }
    // });
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
      <Button icon="camera" onPress={chooseFile} />
    </ScrollView>
  );
};

export default ProfileScreen;
