import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import StylesCSS from './styles.tsx';

interface IButtonDef {
  name: string,
  classes?: string,
  fc(): void,
}

const styles = StyleSheet.create(StylesCSS);

export default function ButtonDef<IButtonDef>({name, classes, fc = () => {}}) {
  return (
    <TouchableOpacity onPress={fc} style={ classes ? [styles.button_def, classes] : styles.button_def }>
      <Text style={styles.btnName}>{name}</Text>
    </TouchableOpacity>
  )
}