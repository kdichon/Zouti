import { View, Text, Pressable, TextInput, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';
import CheckBox from '@react-native-community/checkbox';
import COLORS from '../../core/constants/colors';
import Button from '../../core/constants/Button';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import { postData } from '../../core/constants/api';

const LogOut = ({ navigation }) => {
  // Constantes pour le formulaire
  const [prefix, setPrefix] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // Booleen pour l'affichage du password
  const [isPasswordShown, setIsPasswordShown] = useState(true);
  // Booléen pour la validation des CGV
  const [isChecked, setIsChecked] = useState(false);

  const SignUp = async () => {
    try {
      // console.log(prefix + phone, email, password);
      if (email != '' && password != '') {
        console.log('OK');
        // Déstructuration pour trouver directement
        const {
          user: { uid },
        } = await auth().createUserWithEmailAndPassword(email.trim(), password);
        // const uid = userCredential.uid;
        // Enregistrement de l'utilisateur en base à l'aide de son uid de Firebase
        await firestore()
          .collection('userinformations')
          .doc(uid)
          .set({ email: email, phonenumber: prefix + phone });

        // Enregistrement de l'utilisateur en base de données à l'aide de son uid avec l'API du serveur dédié.
        const response = await postData('https://plantmed.jsprod.fr/api/user', {
          name: name,
          email: email,
          uid: uid,
          password: password
        })
        console.log('response', response)
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <View style={{ flex: 1, marginHorizontal: 22 }}>
        <View style={{ marginVertical: 22 }}>
          <Text
            style={{
              fontSize: 22,
              fontWeight: 'bold',
              marginVertical: 12,
              color: COLORS.black,
            }}>
            Create Account
          </Text>
        </View>

        <View style={{ marginBottom: 12 }}>
          <Text
            style={{
              fontSize: 16,
              fontWeight: 400,
              marginVertical: 8,
            }}>
            Email address
          </Text>

          <View
            style={{
              width: '100%',
              height: 48,
              borderColor: COLORS.black,
              borderWidth: 1,
              borderRadius: 8,
              alignItems: 'center',
              justifyContent: 'center',
              paddingLeft: 22,
            }}>
            <TextInput
              placeholder="Enter your email address"
              placeholderTextColor={COLORS.black}
              keyboardType="email-address"
              value={email}
              onChangeText={setEmail}
              style={{
                width: '100%',
              }}
            />
          </View>
        </View>

        <View style={{ marginBottom: 12 }}>
          <Text
            style={{
              fontSize: 16,
              fontWeight: 400,
              marginVertical: 8,
            }}>
            Mobile Number
          </Text>

          <View
            style={{
              width: '100%',
              height: 48,
              borderColor: COLORS.black,
              borderWidth: 1,
              borderRadius: 8,
              alignItems: 'center',
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingLeft: 22,
            }}>
            <TextInput
              placeholder="+596"
              placeholderTextColor={COLORS.black}
              keyboardType="numeric"
              value={prefix}
              onChangeText={setPrefix}
              style={{
                width: '15%',
                borderRightWidth: 1,
                borderLeftColor: COLORS.grey,
                height: '100%',
              }}
            />

            <TextInput
              placeholder="Enter your phone number"
              placeholderTextColor={COLORS.black}
              keyboardType="numeric"
              value={phone}
              onChangeText={setPhone}
              style={{
                width: '80%',
              }}
            />
          </View>
        </View>

        <View style={{ marginBottom: 12 }}>
          <Text
            style={{
              fontSize: 16,
              fontWeight: 400,
              marginVertical: 8,
            }}>
            Password
          </Text>

          <View
            style={{
              width: '100%',
              height: 48,
              borderColor: COLORS.black,
              borderWidth: 1,
              borderRadius: 8,
              alignItems: 'center',
              justifyContent: 'center',
              paddingLeft: 22,
            }}>
            <TextInput
              placeholder="Enter your password"
              placeholderTextColor={COLORS.black}
              secureTextEntry={isPasswordShown}
              value={password}
              onChangeText={setPassword}
              style={{
                width: '100%',
              }}
            />

            <TouchableOpacity
              onPress={() => setIsPasswordShown(!isPasswordShown)}
              style={{
                position: 'absolute',
                right: 12,
              }}>
              {isPasswordShown == true ? (
                <Icon name="eye-off" size={24} color={COLORS.black} />
              ) : (
                <Icon name="eye" size={24} color={COLORS.black} />
              )}
            </TouchableOpacity>
          </View>
        </View>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginVertical: 6,
          }}>
          <CheckBox
            style={{ marginRight: 8 }}
            value={isChecked}
            onValueChange={setIsChecked}
            color={isChecked ? COLORS.primary : undefined}
          />

          <Text
            onPress={() =>
              setIsChecked(!isChecked) && console.log('Ok pour les CGV')
            }>
            I aggree to the terms and conditions
          </Text>
        </View>

        <Button
          title="Sign Up"
          filled
          style={{
            marginTop: 18,
            marginBottom: 4,
          }}
          onPress={SignUp}
        />

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            marginVertical: 22,
          }}>
          <Text style={{ fontSize: 16, color: COLORS.black }}>
            Already have an account
          </Text>
          <Pressable onPress={() => navigation.navigate('SignIn')}>
            <Text
              style={{
                fontSize: 16,
                color: COLORS.primary,
                fontWeight: 'bold',
                marginLeft: 6,
              }}>
              Login
            </Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default LogOut;
