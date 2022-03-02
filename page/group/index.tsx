import React, { useState, useRef } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, SectionList} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import GroupItems from '../../components/group.items/index';
import { GroopItemDto, GroopDto } from '../../dto/group.dto.tsx';
import StylesCSS from './styles.tsx';

interface IGroupPage {
  data: GroopDto,
}
interface IState {
  activeProfile: GroopItemDto,
}

// export default function GroupPage<IGroupPage> ( { date } ) {
//   const activeDate = useRef<string>(null)  ;
//   const [state, setState] = useState<IState>({
//     activeProfile: {} as GroopDto,
//   });
//
//   return (
//     <View style={styles.container}>
//       {date.map((val: any, i: number) => (
//         <View key={val.date + i} style={styles.group}>
//           <Text style={styles.groupTitle}>{val.date}</Text>
//           <View style={styles.groupInner}>
//             {val.items.map((item: GroopItemDto, i: number) => {
//               if(!activeDate.current){
//                 setState({...state, activeProfile: item});
//                 activeDate.current = val.date
//               }
//               return <GroupItems key={ item + i} {...{...item, active: state.activeProfile.time === item.time && activeDate.current === val.date }} />
//             })}
//           </View>
//         </View>
//       ))}
//     </View>
//   )
// }


export default function GroupPage<IGroupPage> ( { data } ) {
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
        renderItem={({ item }) => { return <View style={styles.groupInner}><GroupItems {...item} /></View> }}
        renderSectionHeader={({ section: { date } }) => (
           <Text style={styles.groupTitle}>{date}</Text>
        )}
      />
      <TouchableOpacity>
        <AntDesign name="pluscircle" size={64} color="#2a86ff" />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create(StylesCSS);
