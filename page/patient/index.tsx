import React, { useState, useRef } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { UserDto } from '../../dto/user.dto.tsx';
import ButtonDef from '../../components/button.btn';
import ButtonCall from '../../components/button.call';
import StylesCSS from './styles.tsx';

const styles = StyleSheet.create(StylesCSS);

export default function Patient ({route}) {
  const [state, setState] = useState<UserDto>(route.params.user);

  const pressBtn = () => {
    console.log("pressBtn")
  }

    const pressCall = () => {
      console.log("pressCall")
    }

  return (
    <View style={styles.container}>
      <Text style={styles.name}>{state.name}</Text>
      <Text style={styles.phone}>{state.phone}</Text>
      <View style={styles.btnFrame} >
        <ButtonDef name="Формула зубов" fc={pressBtn} />
        <ButtonCall size={24} classes={styles.btnMarging} fc={pressCall} />
      </View>
    </View>
  );
};
