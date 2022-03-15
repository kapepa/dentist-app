import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, SafeAreaView } from 'react-native';
import ButtonDef from '../../components/button.btn';
import Request from '../../helpers/request.js';
import StylesCSS from './styles.tsx';
import * as ImagePicker from 'expo-image-picker';
import * as DocumentPicker from 'expo-document-picker';

const styles = StyleSheet.create(StylesCSS);

export default function Appointment<any>({ navigation }) {
  const [value, setValue] = useState({
    name: '',
    phone: '',
    avatar: {},
  });

  const pickDocument = async () => {

  }

  const sendAppointment = () => {
     Request.create(value).then(res => navigation.navigate('Home'));
  }

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
      base64: true,
    })
    setValue({...value, avatar: result});
  };

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
        <View style={styles.imageFrame}>
          <ButtonDef classes={styles.avatarBtn} name="Select avatar" fc={pickImage} />
           {value.avatar.uri ? (<Image style={styles.imageAvatar} source={{ uri: value.avatar.uri }} style={{ width: 200, height: 200 }} />) : null}
        </View>
        <ButtonDef name='+Add client' color='green' fc={sendAppointment}/>
      </View>
    </View>
  )
}