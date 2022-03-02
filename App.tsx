import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { GroopDto } from './dto/group.dto.tsx';
import GroupPage from './page/group/index';

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
        },
      },{
        diagnostics: 'пульпит',
        time: '14:30',
        user: {
          avatar: 'https://yt3.ggpht.com/ytc/AKedOLS0cma_0syynYcOKGIwPxQ7bJHWQjoBXsKVKa4G9w=s900-c-k-c0x00ffffff-no-rj',
          name: 'Василий Пупкин',
        },
      },{
        diagnostics: 'пульпит',
        time: '14:30',
        user: {
          avatar: 'https://yt3.ggpht.com/ytc/AKedOLS0cma_0syynYcOKGIwPxQ7bJHWQjoBXsKVKa4G9w=s900-c-k-c0x00ffffff-no-rj',
          name: 'Василий Пупкин',
        },
      },{
        diagnostics: 'пульпит',
        time: '14:30',
        user: {
          avatar: 'https://yt3.ggpht.com/ytc/AKedOLS0cma_0syynYcOKGIwPxQ7bJHWQjoBXsKVKa4G9w=s900-c-k-c0x00ffffff-no-rj',
          name: 'Василий Пупкин',
        },
      },{
        diagnostics: 'пульпит',
        time: '14:30',
        user: {
          avatar: 'https://yt3.ggpht.com/ytc/AKedOLS0cma_0syynYcOKGIwPxQ7bJHWQjoBXsKVKa4G9w=s900-c-k-c0x00ffffff-no-rj',
          name: 'Василий Пупкин',
        },
      },{
        diagnostics: 'пульпит',
        time: '14:30',
        user: {
          avatar: 'https://yt3.ggpht.com/ytc/AKedOLS0cma_0syynYcOKGIwPxQ7bJHWQjoBXsKVKa4G9w=s900-c-k-c0x00ffffff-no-rj',
          name: 'Василий Пупкин',
        },
      },{
        diagnostics: 'пульпит',
        time: '14:30',
        user: {
          avatar: 'https://yt3.ggpht.com/ytc/AKedOLS0cma_0syynYcOKGIwPxQ7bJHWQjoBXsKVKa4G9w=s900-c-k-c0x00ffffff-no-rj',
          name: 'Василий Пупкин',
        },
      },{
        diagnostics: 'пульпит',
        time: '14:30',
        user: {
          avatar: 'https://yt3.ggpht.com/ytc/AKedOLS0cma_0syynYcOKGIwPxQ7bJHWQjoBXsKVKa4G9w=s900-c-k-c0x00ffffff-no-rj',
          name: 'Василий Пупкин',
        },
      },{
        diagnostics: 'пульпит',
        time: '14:30',
        user: {
          avatar: 'https://yt3.ggpht.com/ytc/AKedOLS0cma_0syynYcOKGIwPxQ7bJHWQjoBXsKVKa4G9w=s900-c-k-c0x00ffffff-no-rj',
          name: 'Василий Пупкин',
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
        },
      },{
        diagnostics: 'пульпит',
        time: '14:30',
        user: {
          avatar: 'https://yt3.ggpht.com/ytc/AKedOLS0cma_0syynYcOKGIwPxQ7bJHWQjoBXsKVKa4G9w=s900-c-k-c0x00ffffff-no-rj',
          name: 'Василий Пупкин',
        },
      }
      ]
    },
  ] as GroopDto[]);

  return <GroupPage data={state}/>;
}

