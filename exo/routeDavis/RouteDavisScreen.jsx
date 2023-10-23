import {View, Text} from 'react-native';
import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import auth from '@react-native-firebase/auth';
import SigninScreen from '../public/SigninScreen';
import SignupScreen from '../public/SignupScreen';
import ProfileScreen from '../private/ProfileScreen';
import HomeScreen from '../private/HomeScreen';
import {useDispatch, useSelector} from 'react-redux';
import {resetUser, setUser} from '../../src/core/redux/userSlice';

const Stack = createNativeStackNavigator();

const RouteDavisScreen = () => {
  // Set an initializing state whilst Firebase connects
  const [initializing, setInitializing] = useState(true);
  // const [user, setUser] = useState();

  const user = useSelector(state => state.user);
  const dispatch = useDispatch();

  // Change l'etat du state de User
  const onUserStateChanged = user => {
    !user ? dispatch(resetUser(user)) : dispatch(setUser(user.uid));
    // setUser(user);
    if (initializing) setInitializing(false);
  };
  useEffect(() => {
    // Création de l'écouteur {listener}
    const subscriber = auth().onAuthStateChanged(onUserStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        {user ? (
          <>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Profile" component={ProfileScreen} />
            {/* <Stack.Screen name="Settings" component={SettingsScreen} /> */}
          </>
        ) : (
          <>
            <Stack.Screen name="SignIn" component={SigninScreen} />
            <Stack.Screen name="SignUp" component={SignupScreen} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RouteDavisScreen;
