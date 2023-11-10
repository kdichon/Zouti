import {View, Text} from 'react-native';
import React, {useEffect, useState} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useDispatch, useSelector} from 'react-redux';
import {isUser, notUser} from '../../exo/redux/userReducer';
import auth from '@react-native-firebase/auth';
import {NavigationContainer} from '@react-navigation/native';
import {Demo, LogIn, LogOut, Welcome} from './public';
import {Home, Profile, Settings} from './private';
import HomeScreen from '../../exo/private/HomeScreen';

const Stack = createNativeStackNavigator();

const Routes = () => {
  // Set an initializing state whilst Firebase connects
  const [initializing, setInitializing] = useState(true);
  // const [user, setUser] = useState();

  const user = useSelector(state => state.user);
  // console.log(user);
  const dispatch = useDispatch();

  // Change l'etat du state de User
  const isConnected = user => {
    !user ? dispatch(notUser()) : dispatch(isUser(user.uid));
    // setUser(user);
    if (initializing) setInitializing(false);
  };
  useEffect(() => {
    // Création de l'écouteur {listener}
    const subscriber = auth().onAuthStateChanged(isConnected);
    return subscriber; // unsubscribe on unmount
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={user ? 'Welcome' : 'SignIn'}
        screenOptions={{headerShown: false}}>
        {user ? (
          <>
            <Stack.Screen name="HomeTest" component={HomeScreen} />
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Profile" component={Profile} />
            <Stack.Screen name="Settings" component={Settings} />
            <Stack.Screen name="Demo" component={Demo} />
          </>
        ) : (
          <>
            <Stack.Screen name="Welcome" component={Welcome} />
            <Stack.Screen name="SignIn" component={LogIn} />
            <Stack.Screen name="SignUp" component={LogOut} />
            <Stack.Screen name="Demo" component={Demo} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
