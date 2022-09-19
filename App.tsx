import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Header from "./components/Header";
import HomeScreen from "./components/HomeScreen";
import QuizPage from "./components/QuizPage";
import ResultsPage from "./components/ResultsPage";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator, NativeStackScreenProps } from "@react-navigation/native-stack";
import CategoryContext from "./context/Category";
import {useState} from 'react'
import { StackAnimationTypes } from "react-native-screens";
import Profile from "./components/Profile";
import { AvatarContext } from "./context/Avatar";
import {QuizzesType} from "./utilities/Quizzes"


const Stack = createNativeStackNavigator<StackTypes>();

type Props = NativeStackScreenProps<StackTypes, 'ResultsPage'>

type StackTypes = {
  Home: undefined;
  QuizPage: QuizzesType;
  ResultsPage: {},
  Profile: {saveProfile:React.Dispatch<React.SetStateAction<string>>, preview:string}
}

export default function App() {

const [profilePic, setProfilePic] = useState(
  require("./assets/profile_picture.png")
);
  return (
  
      <NavigationContainer>
        <AvatarContext.Provider value={{profilePic, setProfilePic}}>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen}/>
          <Stack.Screen name="QuizPage" component={QuizPage} />
          <Stack.Screen name="ResultsPage" component={ResultsPage} />
          <Stack.Screen name="Profile" component={Profile} />
          {/* <Header avatar={slides.avatar}></Header>
      <QuizAnswer answer="Hello World" />
      <QuizAnswer answer="How are you doing?" />
      <StatusBar style="auto" /> */}
          {/* <HomeScreen /> */}
          {/* <QuizPage /> */}
          {/* <ResultsPage /> */}
        </Stack.Navigator>
        </AvatarContext.Provider>
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
