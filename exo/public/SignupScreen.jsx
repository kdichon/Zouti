import {View, Text, TextInput, Button} from 'react-native';
import React, {useState} from 'react';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

const SignupScreen = ({navigation}) => {
  const [nickname, setNickname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const SignUp = async () => {
    try {
      console.log(nickname, email, password);
      if (email != '' && password != '') {
        console.log('OK');
        const user = await auth().createUserWithEmailAndPassword(
          email,
          password,
        );
        // Enregistrement de l'utilisateur en base à l'aide de son uid de Firebase
        await firestore()
          .collection('users')
          .doc(user.uid)
          .set({email: email, nickname: nickname});
      }
    } catch (error) {
      console.log(error);
    }
  };

  const SignIn = () => {
    navigation.navigate('SignIn');
  };

  return (
    <View>
      <TextInput
        placeholder="Nickname"
        value={nickname}
        onChangeText={setNickname}
      />
      <TextInput placeholder="Username" value={email} onChangeText={setEmail} />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title="Sign Up" onPress={SignUp} />
      <Button title="Sign In" onPress={SignIn} />
    </View>
  );
};

export default SignupScreen;
