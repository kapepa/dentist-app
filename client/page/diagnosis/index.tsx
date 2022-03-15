import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, TextInput } from 'react-native';
import StylesCSS from './styles.tsx';

const styles = StyleSheet.create(StylesCSS);

export default function Diagnosis ({route, navigation}) {
  const [state, setState] = useState<UserDto>(route.params.user);
  const [diagnos, setDiagnos] = useState({
    position: null,
    price: null,
    desc: '',
    time: null,
    end: null,
  })

  console.log(state)

  return (
    <View style={styles.container}>
      <View style={styles.frame}>
        <Text style={styles.name}>{state.name}</Text>
        <SafeAreaView>
          <TextInput
            style={styles.input}
            onChangeText={() => {}}
            value={diagnos.position}
            placeholder="useless placeholder"
          />
          <TextInput
            style={styles.input}
            onChangeText={() => {}}
            value={diagnos.desc}
            placeholder="useless placeholder"
          />
        </SafeAreaView>
      </View>
    </View>
  )
}