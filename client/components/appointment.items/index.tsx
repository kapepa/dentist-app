import React from 'react';
import { StyleSheet, Text, View, FlatList, TextInput, SafeAreaView } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import StylesCSS from './styles.tsx';

const styles = StyleSheet.create(StylesCSS);

export default function AppointmentItems ({item}){
  const {desc, position, price, time, end} = item;
  const start = new Date(time);
  const finish = new Date(end);
  const startHours = (start.getHours() < 10) ? `0${start.getHours()}` : start.getHours();
  const startMinutes = (start.getMinutes() < 10) ? `0${start.getMinutes()}` : start.getMinutes();
  const finishHours = (finish.getHours() < 10) ? `0${finish.getHours()}` : finish.getHours();
  const finishMinutes = (finish.getMinutes() < 10) ? `0${finish.getMinutes()}` : finish.getMinutes();

  return (
    <View style={styles.card}>
      <View style={styles.list}>
        <View style={styles.row}>
          <FontAwesome5 name="tooth" size={18} color="gray" />
          <Text style={styles.label}>Зуб:</Text>
          <Text style={styles.desc}>{position}</Text>
        </View>
        <View style={styles.row}>
          <AntDesign name="filetext1" size={18} color="gray" />
          <Text style={styles.label}>Диагноз:</Text>
          <Text style={styles.desc}>{desc}</Text>
        </View>
      </View>
      <View style={styles.infoFrame}>
        <View style={styles.time}>
          <Text style={styles.timeText}>{` ${startHours}:${startMinutes} - ${finishHours}:${finishMinutes} `}</Text>
        </View>
        <View style={styles.price}>
          <Text style={styles.priceText}>{price} P</Text>
        </View>
      </View>
    </View>
  )
};