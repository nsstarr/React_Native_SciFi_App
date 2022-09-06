import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import QuizAnswer from './components/QuizAnswer';

export default function App() {
  return (
    <View style={styles.container}>
      <QuizAnswer answer="Hello World"/>
      <QuizAnswer answer="How are you doing?"/>
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
