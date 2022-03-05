import React, { useState, useRef } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, SectionList} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import GroupItems from '../../components/group.items/index';
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
  const { data } = route.params;
  const activeDate = useRef<string>(null)  ;
  const [state, setState] = useState<IState>({
    activeProfile: {} as GroopDto,
  });

  return (
    <View style={styles.container}>
      <SectionList
        style={styles.group}
        sections={data}
        keyExtractor={(item, index) => item.time + index}
        renderItem={({ item }) => { return <View style={styles.groupInner}><GroupItems { ...{...item, navigation} } /></View> }}
        renderSectionHeader={({ section: { date } }) => (
           <Text style={styles.groupTitle}>{date}</Text>
        )}
      />
      <TouchableOpacity style={styles.plusBtn} onPress={() => {console.log("btn +")}}>
        <AntDesign name="pluscircle" size={63} color="#2a86ff" />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create(StylesCSS);
