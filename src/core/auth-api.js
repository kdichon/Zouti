import {useContext, useState} from 'react';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import {postData} from '../../common/api';

const Inscription = async () => {
  try {
    if (email != '' && password != '') {
      const userAuth = await auth().createUserWithEmailAndPassword(
        email,
        password,
      );
      // console.log('userAuth', userAuth);
      const uid = userAuth.user.uid;

      // Enregistrement de l'utilisateur en base de donnée à l'aide de son UID.
      await firestore().collection('users').doc(uid).set({
        uid: uid,
        email: email,
      });

      const response = await postData('https://plantmed.jsprod.fr/api/user', {
        name: name,
        email: email,
        uid: uid,
        password: password,
      });

      console.log('response', response);
    }

    console.log('postData', postData);

    goToHome();

    // console.log('email', email , 'password', password);
  } catch (error) {
    console.log('error', error);
  }
};
