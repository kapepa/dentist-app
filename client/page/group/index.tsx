import React, { useState, useRef } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, SectionList, SafeAreaView} from 'react-native';
import GroupItems from '../../components/group.items/index';
import ButtonPlus from '../../components/button.plus';
import { GroopItemDto, GroopDto } from '../../dto/group.dto.tsx';
import StylesCSS from './styles.tsx';

import { Ionicons } from '@expo/vector-icons';

interface IGroupPage {
  data: GroopDto,
  navigation: any,
}
interface IState {
  activeProfile: GroopItemDto,
}

export default function GroupPage<IGroupPage> ( { navigation, route } ) {
  const { data } = route.params;;
  const [state, setState] = useState(data);

  return (
    <SafeAreaView style={styles.container}>
      <SectionList
        style={styles.group}
        sections={data}
        keyExtractor={(item, index) => item.phone + index }
        renderItem={({ item }) => { return <View style={styles.groupInner}><GroupItems { ...{...item, navigation} } /></View> }}
        renderSectionHeader={({ section: { date } }) => {
            return (<Text style={styles.groupTitle}>{ date }</Text>)
        }}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create(StylesCSS);

