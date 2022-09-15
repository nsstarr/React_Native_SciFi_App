import React from "react";
import {
  View,
  Text,
  Image,
  Button,
  ScrollView,
  StyleSheet,
  Pressable,
} from "react-native";
import Header from "../Header";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import {
  useFonts,
  Montserrat_400Regular,
  Montserrat_600SemiBold,
} from "@expo-google-fonts/dev";
import { LinearGradient } from "expo-linear-gradient";
import {answerKey} from "../../utilities/QuestionsData"

type Answers = {
  [question: string]: string
}

type StackTypes = {
  Home: undefined;
  QuizPage: undefined;
  ResultsPage: Answers;
};

type Props = NativeStackScreenProps<StackTypes, "ResultsPage">;

const ResultsPage = ({route, navigation }: Props) => {
const {question1} = route.params

  function scoring(answers:Answers,answerKey:Answers) {
    console.log(answers)
    console.log(answerKey)
    let score = 0
    let keys = Object.keys(answerKey)
    console.log(keys)
    let maxScore = keys.length
    for (let i in answerKey){
      if (!answers[i]){
        continue
      }
      if(answers[i] === answerKey[i]){
        score++
      }
    }
    let percentage = Math.floor((score/maxScore)*100)
    console.log(percentage)
    return percentage 
  }

  const score = scoring(route.params,answerKey);
  const scoreTitle = "Jar Jar Binks";
  const scoreDescription = "I’m... I’m so sorry, but the results don’t lie";

  let [fontsLoaded] = useFonts({
    Montserrat_400Regular,
    Montserrat_600SemiBold,
  });

  if (fontsLoaded === false) {
    return <Text>Loading...</Text>;
  }

  function checkAnswers() {
    console.log(route.params);
  }

  return (
    <View style={styles.container}>
      <Header />
      <ScrollView contentContainerStyle={styles.scrollView}>
        <Text style={styles.resultsText}>You Scored: {score}%</Text>
        <Image
          source={require("../../assets/Matrix.jpg")}
          style={{ width: 300, height: 200 }}
        />
        <Text style={styles.resultsText}>You are: {scoreTitle}</Text>
        <Text>{scoreDescription}</Text>
        <Text>FINAL LINE</Text>
        <View style={styles.buttonsContainer}>
          <Pressable
            style={styles.resultsButton}
            onPress={() => {
              navigation.navigate("QuizPage");
            }}
          >
            <LinearGradient
              colors={["rgba(75,0,130,1)", "rgba(75,0,130,0.64)"]}
              style={styles.linearGradient}
            >
              <Text style={styles.buttonText}>Retake</Text>
            </LinearGradient>
          </Pressable>
          <Pressable
            style={styles.resultsButton}
            onPress={() => {
              navigation.navigate("Home");
            }}
          >
            <LinearGradient
              colors={["rgba(75,0,130,1)", "rgba(75,0,130,0.64)"]}
              style={styles.linearGradient}
            >
              <Text style={styles.buttonText}>Next Quiz</Text>
            </LinearGradient>
          </Pressable>
        </View>
        <Button onPress={checkAnswers} title="Check"></Button>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "100%",
  },
  scrollView: {
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    height: "75%",
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 3,
    width: "100%",
    marginTop: 15,
  },
  resultsText: {
    fontFamily: "Montserrat_400Regular",
    fontSize: 24,
    marginBottom: 15,
    marginTop: 15,
  },
  resultsButton: {
    // backgroundColor: "purple",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    borderRadius: 20,
    height: "auto",
    width: 130,
    marginBottom: 60,
    textAlignVertical: "center",
    textAlign: "center",
  },
  buttonText: {
    color: "#FFFFFF",
    fontFamily: "Montserrat_600SemiBold",
    fontSize: 20,
    padding: 10,
    textAlignVertical: "center",
    textAlign: "center",
    alignSelf: "center",
    justifyContent: "center",
  },
  linearGradient: {
    borderRadius: 20
  }
});

export default ResultsPage;
