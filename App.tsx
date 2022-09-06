import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/Header';
import QuizAnswer from './components/QuizAnswer';

export default function App() {
  return (
    <View style={styles.container}>
      <Header source="https://www.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png"></Header>
      <QuizAnswer answer="Hello World" />
      <QuizAnswer answer="How are you doing?" />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
