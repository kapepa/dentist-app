import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import StylesCSS from './styles.tsx';

interface IGroupItems extends GroopItemDto {
  active: boolean,
}

export default function GroupItems<any>({diagnostics,time,user,active,navigation} ) {

  const onPressButton = () => {
    navigation.navigate('Patient');
  };

  return (
    <TouchableOpacity onPress={onPressButton} style={styles.groupItem}>
      <Image source={{ uri: user.avatar }} style={styles.avatar}/>
      <View style={styles.textUser}>
        <Text style={styles.fullName}>{user.name}</Text>
        <Text style={styles.grayText}>{diagnostics}</Text>
      </View>
      <Text style={[styles.groupDate, active ? styles.groupDateActive : ""]}>{time}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create(StylesCSS);