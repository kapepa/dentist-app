import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { GroopDto } from './dto/group.dto.tsx';
import GroupPage from './page/group/index';
import Patient from './page/patient/index';
import Request from './helpers/request.js';

const Stack = createNativeStackNavigator();

export default function App() {
  const [state, setState] = useState(
  [
    {
      date: '11 сентября',
      data: [
      {
        diagnostics: [
          {
            desc: 'пульпит, удаление зуба',
            price: 1555,
            position: 9,
            time: '12:30',
            end: '13:30',
          },
        ],
        user: {
          avatar: 'https://d5nunyagcicgy.cloudfront.net/external_assets/hero_examples/hair_beach_v391182663/original.jpeg',
          name: 'Анжела Mатиева',
          phone: '+3 (063) 569-29-28',
        },
      },{
        diagnostics: [
          {
            desc: 'пульпит',
            price: 1005,
            position: 1,
            time: '14:30',
            end: '15:30',
          },
        ],
        user: {
          avatar: 'https://yt3.ggpht.com/ytc/AKedOLS0cma_0syynYcOKGIwPxQ7bJHWQjoBXsKVKa4G9w=s900-c-k-c0x00ffffff-no-rj',
          name: 'Василий Пупкин',
          phone: '+3 (063) 569-29-28',
        },
      },{
        diagnostics: [
          {
            desc: 'пульпит',
            price: 1005,
            position: 1,
            time: '14:30',
            end: '15:30',
          }
        ],
        user: {
          avatar: 'https://yt3.ggpht.com/ytc/AKedOLS0cma_0syynYcOKGIwPxQ7bJHWQjoBXsKVKa4G9w=s900-c-k-c0x00ffffff-no-rj',
          name: 'Василий Пупкин',
          phone: '+3 (063) 569-29-28',
        },
      }
      ]
    },
  ] as GroopDto[]);

  useEffect(() => {
    Request.userAll();
  },[]);

  return (
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
  )
}

