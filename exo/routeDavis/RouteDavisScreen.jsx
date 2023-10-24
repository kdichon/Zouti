import {View, Text} from 'react-native';
import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import auth from '@react-native-firebase/auth';
import {useDispatch, useSelector} from 'react-redux';
import HomeScreen from '../private/HomeScreen';
import ProfileScreen from '../private/ProfileScreen';
import SigninScreen from '../public/SigninScreen';
import SignupScreen from '../public/SignupScreen';
import {isUser, notUser} from '../redux/userReducer';
import {Home} from '../../src/screens/private';
import {LogIn, LogOut} from '../../src/screens/public';

const Stack = createNativeStackNavigator();

const RouteDavisScreen = () => {
  // Set an initializing state whilst Firebase connects
  const [initializing, setInitializing] = useState(true);
  // const [user, setUser] = useState();

  const user = useSelector(state => state.user);
  console.log(user);
  const dispatch = useDispatch();

  // Change l'etat du state de User
  const onUserStateChanged = user => {
    !user ? dispatch(notUser()) : dispatch(isUser(user.uid));
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
      <Stack.Navigator
        initialRouteName={user ? 'Home' : 'SignIn'}
        screenOptions={{headerShown: false}}>
        {user ? (
          <>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="HomeTest" component={Home} />
            <Stack.Screen name="Profile" component={ProfileScreen} />
            {/* <Stack.Screen name="Settings" component={SettingsScreen} /> */}
          </>
        ) : (
          <>
            <Stack.Screen name="SignIn" component={LogIn} />
            <Stack.Screen name="SignUp" component={LogOut} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RouteDavisScreen;
