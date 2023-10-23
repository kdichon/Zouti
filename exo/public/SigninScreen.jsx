import {View, Text, TextInput, Button} from 'react-native';
import React, {useState} from 'react';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

const SigninScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const SignUp = () => {
    navigation.navigate('SignUp');
  };

  const login_User = async () => {
    try {
      console.log(email, password);
      if (email != '' && password != '') {
        console.log('OK');

        await auth().signInWithEmailAndPassword(email.trim(), password);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View>
      <TextInput placeholder="Email" value={email} onChangeText={setEmail} />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title="Sign In" onPress={login_User} />
      <Button title="Sign Up" onPress={SignUp} />
    </View>
  );
};

export default SigninScreen;
