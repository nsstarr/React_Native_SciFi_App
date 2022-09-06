import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/Header';
import QuizAnswer from './components/QuizAnswer';

export default function App() {

  const slides = {
    avatar: require("./assets/profile_picture.png")
  }
  return (
    <View style={styles.container}>
      <Header avatar={slides.avatar}></Header>
      <QuizAnswer answer="Hello World" />
      <QuizAnswer answer="How are you doing?" />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flexDirection: 'column',
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
    // margin:'auto',
  },
});
