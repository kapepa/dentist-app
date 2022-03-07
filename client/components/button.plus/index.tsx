import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import StylesCSS from './styles.tsx';

interface IButtonPlus {
  size: number,
  classes: string,
  fc(): void,
}

const styles = StyleSheet.create(StylesCSS);

export default function ButtonPlus<IButtonPlus>({ size = 24,classes, fc=()=>{}}){
  return (
    <TouchableOpacity style={styles.plusBtn} onPress={() => {console.log("btn +")}}>
      <AntDesign name="pluscircle" size={size} color="#2a86ff" />
    </TouchableOpacity>
  )
}