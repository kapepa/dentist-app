import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, SafeAreaView } from 'react-native';
import ButtonDef from '../../components/button.btn';
import Request from '../../helpers/request.js';
import StylesCSS from './styles.tsx';
import * as ImagePicker from 'expo-image-picker';
import * as DocumentPicker from 'expo-document-picker';

const styles = StyleSheet.create(StylesCSS);

export default function Appointment<any>() {
  const [value, setValue] = useState({
    name: '',
    phone: '',
    avatar: {},
  });

  const pickDocument = async () => {

  }

  const sendAppointment = () => {
    const formData = new FormData();
    formData.append('name', value.name);
    formData.append('phone', value.phone);
    formData.append('avatar', value.avatar);
    Request.create(formData).then(res => console.log('send'));
//     console.log( new File(value.avatar.uri))

//     var reader = new FileReader();
//     reader.readAsDataURL(value.avatar.base64);
//     reader.onloadend = function() {
//       var base64data = reader.result;
//       console.log(base64data);
//     }
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

        console.log(result)
//     let result = await DocumentPicker.getDocumentAsync({ type: "*/*", copyToCacheDirectory: true }).then(response => {
//       if (response.type == 'success') {
//         let { name, size, uri } = response;
//         let nameParts = name.split('.');
//         let fileType = nameParts[nameParts.length - 1];
//         let fileToUpload = {
//           name: name,
//           size: size,
//           uri: uri,
//           type: "application/" + fileType
//         };
//         setValue({...value, avatar: fileToUpload});
//         }
//       });
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