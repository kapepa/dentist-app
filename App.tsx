import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import StylesCSS from './styles.jsx';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.group}>
        <Text style={styles.groupTitle}>11 сентября</Text>
        <View style={styles.groupInner}>

          <View style={styles.groupItem}>
            <Image source={{ uri: "https://d5nunyagcicgy.cloudfront.net/external_assets/hero_examples/hair_beach_v391182663/original.jpeg"}} style={styles.avatar}/>
            <View style={styles.textUser}>
              <Text style={styles.fullName}>Анжела Mатиева</Text>
              <Text style={styles.grayText}>пульпит, удаление зуба</Text>
            </View>
            <Text style={[styles.groupDate, false ? styles.groupDateActive : ""]}>12:30</Text>
          </View>

        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create(StylesCSS);
