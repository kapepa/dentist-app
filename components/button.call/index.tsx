import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import StylesCSS from './styles.tsx';

interface IButtonCall {
  size: number,
  classes: string,
  fc(): void,
}

const styles = StyleSheet.create(StylesCSS);

export default function ButtonCall<IButtonCall>({ size = 24,classes, fc=()=>{}}){
  return (
    <TouchableOpacity onPress={fc} style={ classes ? [styles.btnPhone,classes] : styles.btnPhone}>
      <Feather name="phone" size={size} color="#fff" />
    </TouchableOpacity>
  )
}