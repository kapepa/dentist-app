import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, TextInput } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import ButtonDef from '../../components/button.btn';
import { updateUsers } from '../../redux/user/action.js';
import StylesCSS from './styles.tsx';

const styles = StyleSheet.create(StylesCSS);

export default function Diagnosis ({route, navigation}) {
  const list = useSelector(state => state.users.list);
  const dispatch = useDispatch();
  const [user, setUser] = useState<UserDto>(route.params.user);
  const [diagnos, setDiagnos] = useState({
    position: null,
    price: null,
    desc: '',
    time: null,
    end: null,
  })

  const DiagnosisAdd = async () => {
    let toUser
    await dispatch(updateUsers({_id: user._id, diagnostics: diagnos}));
    for(let day of list) toUser = day.data.find( el => el._id === user._id);
    navigation.navigate('Patient',{user: toUser});
  }

  return (
    <View style={styles.container}>
      <View style={styles.frame}>
        <Text style={styles.name}>{user.name}</Text>
        <SafeAreaView>
          <TextInput
            style={styles.input}
            onChangeText={(e) => { setDiagnos({...diagnos, position: parseInt(e)}) }}
            value={diagnos.position ? String(diagnos.position) : null}
            placeholder="Position"
            keyboardType="numeric"
          />
          <TextInput
            style={styles.input}
            onChangeText={(e) => { setDiagnos({...diagnos, desc: e}) }}
            value={diagnos.desc}
            placeholder="Description"
          />
          <TextInput
            style={styles.input}
            onChangeText={(e) => { setDiagnos({...diagnos, time: Date.now()}) }}
            value={diagnos.time ? String(diagnos.time) : null}
            placeholder="Time start"
          />
          <TextInput
            style={styles.input}
            onChangeText={(e) => { setDiagnos({...diagnos, end: Date.now() + 1000 * 60 * 30}) }}
            value={diagnos.end ? String(diagnos.end) : null}
            placeholder="Time end"
          />
          <TextInput
            style={styles.input}
            onChangeText={(e) => { setDiagnos({...diagnos, price: parseInt(e)}) }}
            value={diagnos.price ? String(diagnos.price) : null}
            placeholder="Price"
            keyboardType="numeric"
          />
        </SafeAreaView>
        <View>
          <ButtonDef name='Add' fc={DiagnosisAdd}/>
        </View>
      </View>
    </View>
  )
}