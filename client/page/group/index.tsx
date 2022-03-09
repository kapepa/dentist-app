import React, { useState, useRef, useContext, useEffect } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, SectionList, SafeAreaView} from 'react-native';
import GroupItems from '../../components/group.items/index';
import ButtonPlus from '../../components/button.plus';
import { GroopItemDto, GroopDto } from '../../dto/group.dto.tsx';
import { UserAllContext } from '../../App.tsx';
import StylesCSS from './styles.tsx';

import { Ionicons } from '@expo/vector-icons';

interface IGroupPage {
  data: GroopDto,
  navigation: any,
}
interface IState {
  activeProfile: GroopItemDto,
}

export default function GroupPage<IGroupPage> ( { navigation } ) {
  const userAll = useContext(UserAllContext);
  const [state, setState] = useState([]);

  useEffect(() => {
    if(userAll.length)setState(userAll)
  },[userAll])

  return (
    <>
      {state.length ? (
        <SafeAreaView style={styles.container}>
          <SectionList
            style={styles.group}
            sections={state}
            keyExtractor={(item, index) => item.phone + index }
            renderItem={({ item }) => { return <View style={styles.groupInner}><GroupItems { ...{...item, navigation} } /></View> }}
            renderSectionHeader={({ section: { date } }) => {
                return (<Text style={styles.groupTitle}>{ date }</Text>)
            }}
          />
        </SafeAreaView>
      ) : null}
    </>
  )
}

const styles = StyleSheet.create(StylesCSS);

