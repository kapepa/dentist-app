import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
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

export default function GroupItems<IGroupItems>(props) {
  const {navigation, ...user} = props;

  const onPressButton = () => {
    navigation.navigate('Patient',{user, meet: user.diagnostics});
  };

  return (
    <TouchableOpacity onPress={onPressButton} style={styles.groupItem}>
      <Image source={{ uri: user.avatar }} style={styles.avatar}/>
      <View style={styles.textUser}>
        <Text style={styles.fullName}>{user.name}</Text>
        <Text style={styles.grayText}>{user.diagnostics[0].desc}</Text>
      </View>
      <Text style={[styles.groupDate, user.active ? styles.groupDateActive : ""]}>{user.time}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create(StylesCSS);