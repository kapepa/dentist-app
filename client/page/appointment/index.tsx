import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, SafeAreaView, } from 'react-native';
import ButtonDef from '../../components/button.btn';
import Request from '../../helpers/request.js';
import StylesCSS from './styles.tsx';

const styles = StyleSheet.create(StylesCSS);

export default function Appointment<any>() {
  const [value, setValue] = React.useState({
    name: '',
    phone: '',
  });

  const sendAppointment = () => {
    const formData = new FormData();
    formData.append('name', value.name);
    formData.append('phone', value.phone);
    Request.create(formData).then(res => console.log('send'));
  }

  return (
    <View style={styles.container}>
      <View style={styles.appointment}>
        <SafeAreaView style={styles.area}>
          <Text style={styles.label}>Name</Text>
          <TextInput
            style={styles.input}
            onChangeText={(e) => {setValue({...value, name: e})}}
            value={value.name}
            placeholder="Name"
          />
        </SafeAreaView>
        <SafeAreaView style={[styles.area,styles.areaLast]}>
          <Text style={styles.label}>Phone number</Text>
          <TextInput
            style={styles.input}
            onChangeText={(e) => {setValue({...value, phone: e})}}
            value={value.phone}
            placeholder="Phone"
          />
        </SafeAreaView>
        <ButtonDef name='+Add client' color='green' fc={sendAppointment}/>
      </View>
    </View>
  )
}