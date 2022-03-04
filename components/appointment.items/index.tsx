import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, FlatList } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import StylesCSS from './styles.tsx';

const styles = StyleSheet.create(StylesCSS);

export default function AppointmentItems ({item}){
  const {diagnostics, position, price, time, end} = item
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
          <Text style={styles.desc}>{diagnostics}</Text>
        </View>
      </View>
      <View style={styles.infoFrame}>
        <View style={styles.time}>
          <Text style={styles.timeText}>{time + " - " + end}</Text>
        </View>
        <View style={styles.price}>
          <Text style={styles.priceText}>{price} P</Text>
        </View>
      </View>
    </View>
  )
}