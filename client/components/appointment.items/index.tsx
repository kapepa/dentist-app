import React from 'react';
import { StyleSheet, Text, View, FlatList, TextInput, SafeAreaView, TouchableOpacity } from 'react-native';
import { AntDesign, FontAwesome5 } from '@expo/vector-icons';
import { delDiagnostics } from '../../redux/user/action.js';
import { useDispatch } from 'react-redux';
import StylesCSS from './styles.tsx';

const styles = StyleSheet.create(StylesCSS);

export default function AppointmentItems ({item, navigation, user}){
  const dispatch = useDispatch();
  const {_id, desc, position, price, time, end} = item;
  const start = new Date(time);
  const finish = new Date(end);
  const startHours = (start.getHours() < 10) ? `0${start.getHours()}` : start.getHours();
  const startMinutes = (start.getMinutes() < 10) ? `0${start.getMinutes()}` : start.getMinutes();
  const finishHours = (finish.getHours() < 10) ? `0${finish.getHours()}` : finish.getHours();
  const finishMinutes = (finish.getMinutes() < 10) ? `0${finish.getMinutes()}` : finish.getMinutes();

  const onPressDel = () => {dispatch(delDiagnostics(_id))}

  const onPressEdit = () => {
    navigation.navigate('Diagnosis',{user, edit: item})
  }

  return (
    <TouchableOpacity style={styles.card} onPress={onPressEdit}>
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
      <AntDesign onPress={onPressDel} style={styles.del} name="close" size={24} color="black" />
    </TouchableOpacity>
  )
};