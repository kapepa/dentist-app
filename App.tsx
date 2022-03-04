import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { GroopDto } from './dto/group.dto.tsx';
import GroupPage from './page/group/index';
import Patient from './page/patient/index';

const Stack = createNativeStackNavigator();

export default function App() {
  const [state, setState] = useState(
  [
    {
      date: '11 сентября',
      data: [
      {
        diagnostics: 'пульпит, удаление зуба',
        time: '12:30',
        user: {
          avatar: 'https://d5nunyagcicgy.cloudfront.net/external_assets/hero_examples/hair_beach_v391182663/original.jpeg',
          name: 'Анжела Mатиева',
          phone: '+3 (063) 569-29-28',
        },
      },{
        diagnostics: 'пульпит',
        time: '14:30',
        user: {
          avatar: 'https://yt3.ggpht.com/ytc/AKedOLS0cma_0syynYcOKGIwPxQ7bJHWQjoBXsKVKa4G9w=s900-c-k-c0x00ffffff-no-rj',
          name: 'Василий Пупкин',
          phone: '+3 (063) 569-29-28',
        },
      },{
        diagnostics: 'пульпит',
        time: '14:30',
        user: {
          avatar: 'https://yt3.ggpht.com/ytc/AKedOLS0cma_0syynYcOKGIwPxQ7bJHWQjoBXsKVKa4G9w=s900-c-k-c0x00ffffff-no-rj',
          name: 'Василий Пупкин',
          phone: '+3 (063) 569-29-28',
        },
      },{
        diagnostics: 'пульпит',
        time: '14:30',
        user: {
          avatar: 'https://yt3.ggpht.com/ytc/AKedOLS0cma_0syynYcOKGIwPxQ7bJHWQjoBXsKVKa4G9w=s900-c-k-c0x00ffffff-no-rj',
          name: 'Василий Пупкин',
          phone: '+3 (063) 569-29-28',
        },
      },{
        diagnostics: 'пульпит',
        time: '14:30',
        user: {
          avatar: 'https://yt3.ggpht.com/ytc/AKedOLS0cma_0syynYcOKGIwPxQ7bJHWQjoBXsKVKa4G9w=s900-c-k-c0x00ffffff-no-rj',
          name: 'Василий Пупкин',
          phone: '+3 (063) 569-29-28',
        },
      },{
        diagnostics: 'пульпит',
        time: '14:30',
        user: {
          avatar: 'https://yt3.ggpht.com/ytc/AKedOLS0cma_0syynYcOKGIwPxQ7bJHWQjoBXsKVKa4G9w=s900-c-k-c0x00ffffff-no-rj',
          name: 'Василий Пупкин',
          phone: '+3 (063) 569-29-28',
        },
      },{
        diagnostics: 'пульпит',
        time: '14:30',
        user: {
          avatar: 'https://yt3.ggpht.com/ytc/AKedOLS0cma_0syynYcOKGIwPxQ7bJHWQjoBXsKVKa4G9w=s900-c-k-c0x00ffffff-no-rj',
          name: 'Василий Пупкин',
          phone: '+3 (063) 569-29-28',
        },
      },{
        diagnostics: 'пульпит',
        time: '14:30',
        user: {
          avatar: 'https://yt3.ggpht.com/ytc/AKedOLS0cma_0syynYcOKGIwPxQ7bJHWQjoBXsKVKa4G9w=s900-c-k-c0x00ffffff-no-rj',
          name: 'Василий Пупкин',
          phone: '+3 (063) 569-29-28',
        },
      },{
        diagnostics: 'пульпит',
        time: '14:30',
        user: {
          avatar: 'https://yt3.ggpht.com/ytc/AKedOLS0cma_0syynYcOKGIwPxQ7bJHWQjoBXsKVKa4G9w=s900-c-k-c0x00ffffff-no-rj',
          name: 'Василий Пупкин',
          phone: '+3 (063) 569-29-28',
        },
      },
      ]
    },
    {
      date: '13 сентября',
      data: [
      {
        diagnostics: 'пульпит, удаление зуба',
        time: '12:30',
        user: {
          avatar: 'https://d5nunyagcicgy.cloudfront.net/external_assets/hero_examples/hair_beach_v391182663/original.jpeg',
          name: 'Анжела Mатиева',
          phone: '+3 (063) 569-29-28',
        },
      },{
        diagnostics: 'пульпит',
        time: '14:30',
        user: {
          avatar: 'https://yt3.ggpht.com/ytc/AKedOLS0cma_0syynYcOKGIwPxQ7bJHWQjoBXsKVKa4G9w=s900-c-k-c0x00ffffff-no-rj',
          name: 'Василий Пупкин',
          phone: '+3 (063) 569-29-28',
        },
      }
      ]
    },
  ] as GroopDto[]);

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
      >
        <Stack.Screen
          name="Home"
          component={({navigation}) => <GroupPage data={state} navigation={navigation}/>}
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

