import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, FlatList } from 'react-native';
import { UserDto } from '../../dto/user.dto.tsx';
import ButtonDef from '../../components/button.btn';
import ButtonCall from '../../components/button.call';
import AppointmentItems from '../../components/appointment.items';
import StylesCSS from './styles.tsx';


const styles = StyleSheet.create(StylesCSS);

export default function Patient ({route}) {
  const [state, setState] = useState<UserDto>(route.params.user);
  const [appointment, setAppointment] = useState([route.params.meet]);

  const pressBtn = () => {
    console.log("pressBtn")
  }

    const pressCall = () => {
      console.log("pressCall")
    }

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.name}>{state.name}</Text>
        <Text style={styles.phone}>{state.phone}</Text>
        <View style={styles.btnFrame} >
          <ButtonDef name="Формула зубов" fc={pressBtn} />
          <ButtonCall size={24} classes={styles.btnMarging} fc={pressCall} />
        </View>
      </View>
      <View style={styles.appointment}>
        <View style={styles.container}>
          <Text style={styles.label}>Приемы</Text>
          <View style={styles.appointmentList}>
            <FlatList
              data={appointment}
              renderItem={AppointmentItems}
              keyExtractor={(item, i) => item.position + i}
            />
          </View>
        </View>
      </View>
    </>
  );
};
