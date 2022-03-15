import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Pressable } from 'react-native';
import StylesCSS from './styles.tsx';

interface IGroupItems extends GroopItemDto {
  active: boolean,
  diagnostics: string,
  price: number,
  position: number,
  time: string,
  end: string,
  user: UserDto,
}

export default function GroupItems(props) {
  const {navigation, ...user} = props;

  const onPressButton = () => {
    navigation.navigate('Patient',{user, meet: user.diagnostics});
  };

  const onPressFunction = () => {
    console.log("asdas")
  }

  return (
  <Pressable onPress={onPressFunction}>
    <TouchableOpacity onPress={onPressButton} style={styles.groupItem}>
      <Image source={{ uri: /http/.test(user.avatar) ? user.avatar : `http://192.168.0.103:5000/${user.avatar}` }} style={styles.avatar}/>
      <View style={styles.textUser}>
        <Text style={styles.fullName}>{user.name}</Text>
        <Text style={styles.grayText}>{user.diagnostics[0] ? user.diagnostics[0].desc : null}</Text>
      </View>
      <Text style={[styles.groupDate, user.active ? styles.groupDateActive : ""]}>{user.time}</Text>
    </TouchableOpacity>
  </Pressable>
  )
}

const styles = StyleSheet.create(StylesCSS);