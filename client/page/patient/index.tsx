import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, FlatList, SectionList } from 'react-native';
import { UserDto } from '../../dto/user.dto.tsx';
import ButtonDef from '../../components/button.btn';
import ButtonCall from '../../components/button.call';
import ButtonPlus from '../../components/button.plus';
import AppointmentItems from '../../components/appointment.items';
import { useSelector, useDispatch } from 'react-redux';
import { findUser } from '../../helpers/user.js';
import StylesCSS from './styles.tsx';

const styles = StyleSheet.create(StylesCSS);

export default function Patient ({route, navigation}) {
  const list = useSelector(state => state.users.list);
  const [state, setState] = useState<UserDto>(route.params.user);
  const [appointment, setAppointment] = useState([{
    title: "Приемы",
    data: route.params.meet,
  }]);

  const pressBtn = () => {
    navigation.navigate('Diagnosis',{user: state})
  }

  const pressCall = () => {
    console.log('pressCall')
  }

  useEffect(() => {
     const user = findUser(list, route.params.user._id);
     setAppointment([{title: "Приемы", data: user.diagnostics}]);
  },[list]);

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.name}>{state.name}</Text>
        <Text style={styles.phone}>{state.phone}</Text>
        <View style={styles.btnFrame} >
          <ButtonDef name="Добавить диагноз" fc={pressBtn} />
          <ButtonCall size={24} classes={styles.btnMarging} fc={pressCall} />
        </View>
      </View>
      <View style={styles.appointment}>
        <View style={styles.container}>
          <SectionList
            sections={appointment}
            keyExtractor={(item, index) => item._id + index}
            renderItem={(data) => <AppointmentItems
              {...data}
              navigation={navigation}
              user={route.params.user}
            />}
            renderSectionHeader={({ section: { title } }) => (
              <Text style={styles.label}>{title}</Text>
            )}
          />
        </View>
      </View>
      <ButtonPlus size={64} navigation={navigation}/>
    </>
  );
};
