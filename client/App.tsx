import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { GroopDto } from './dto/group.dto.tsx';
import GroupPage from './page/group/index';
import Patient from './page/patient/index';
import Request from './helpers/request.js';
import { Provider } from 'react-redux';
import store from './redux/store.js';

const Stack = createNativeStackNavigator();

export default function App() {
  const [state, setState] = useState<any>([])

  useEffect(() => {
    Request.userAll().then(list => setState(list))
  },[]);

  return (
  <Provider store={store}>
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
      >
        <Stack.Screen
          name="Home"
          component={GroupPage}
          initialParams={{ data: state }}
          options={{
            title: 'Home',
            headerStyle: {
              backgroundColor: '#2A86FF',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <Stack.Screen
          name="Patient"
          component={Patient}
          options={{
            title: 'Patient',
            headerStyle: {
              backgroundColor: '#2A86FF',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  </Provider>
  )
}

