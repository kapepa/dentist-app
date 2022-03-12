import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import StylesCSS from './styles.tsx';

interface IButtonDef {
  name: string,
  classes?: string,
  fc(): void,
}

const styles = StyleSheet.create(StylesCSS);

export default function ButtonDef<IButtonDef>({name, classes, color, fc = () => {}}) {
  const classArr = [];
  classes ? classArr.push([styles.button_def, classes]) : classArr.push([styles.button_def]);
  color === 'green' ? classArr.push(styles.green) : classArr;

  return (
    <TouchableOpacity
      onPress={fc}
      style={classArr}>
      <Text style={styles.btnName}>{name}</Text>
    </TouchableOpacity>
  )
}