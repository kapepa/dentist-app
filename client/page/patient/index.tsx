import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, FlatList, SectionList } from 'react-native';
import { UserDto } from '../../dto/user.dto.tsx';
import ButtonDef from '../../components/button.btn';
import ButtonCall from '../../components/button.call';
import ButtonPlus from '../../components/button.plus';
import AppointmentItems from '../../components/appointment.items';
import StylesCSS from './styles.tsx';


const styles = StyleSheet.create(StylesCSS);

export default function Patient ({route}) {
  const [state, setState] = useState<UserDto>(route.params.user);
  const [appointment, setAppointment] = useState([{
    title: "Приемы",
    data: route.params.meet,
  }]);

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
          <SectionList
            sections={appointment}
            keyExtractor={(item, index) => item.position + index}
            renderItem={(data) => <AppointmentItems {...data} />}
            renderSectionHeader={({ section: { title } }) => (
              <Text style={styles.label}>{title}</Text>
            )}
          />
        </View>
      </View>
      <ButtonPlus size={64}/>
    </>
  );
};