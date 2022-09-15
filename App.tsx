import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Header from "./components/Header";
import HomeScreen from "./components/HomeScreen";
import QuizPage from "./components/QuizPage";
import ResultsPage from "./components/ResultsPage";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CategoryContext from "./context/Category";
import {useContext} from 'react'

const Stack = createNativeStackNavigator<StackTypes>();

type StackTypes = {
  Home: undefined;
  QuizPage: {
    question1?:string,
    question2?:string,
    question3?:string,
    question4?:string,
    question5?:string,
    question6?:string,
    question7?:string,
    question8?:string,
    question9?:string,
    question10?:string,
    question11?:string,
    question12?:string,
    question13?:string,
    question14?:string,
    question15?:string, 
  } |undefined;
  ResultsPage:  undefined
}

export default function App() {
  const slides = {
    avatar: require("./assets/profile_picture.png"),
  };
  return (
  
      <NavigationContainer>
        
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="QuizPage" component={QuizPage} />
          <Stack.Screen name="ResultsPage" component={ResultsPage} />
          {/* <Header avatar={slides.avatar}></Header>
      <QuizAnswer answer="Hello World" />
      <QuizAnswer answer="How are you doing?" />
      <StatusBar style="auto" /> */}
          {/* <HomeScreen /> */}
          {/* <QuizPage /> */}
          {/* <ResultsPage /> */}
        </Stack.Navigator>
      </NavigationContainer>

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
