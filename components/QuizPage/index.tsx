import React, { useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import Header from "../Header";
import QuizAnswer from "../QuizAnswer";
import QuizQuestion from "../QuizQuestion";
import QuizPicture from "../QuizPicture";
import { questionsData } from "../../utilities/QuestionsData";
import { GetImage } from "../../utilities/images";
import RadioGroup, {RadioButtonProps} from "react-native-radio-buttons-group";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import Swiper from "react-native-swiper";
import * as Progress from 'react-native-progress'


type StackTypes = {
  Home: undefined;
  QuizPage: undefined;
  ResultsPage: undefined;
};

type RadioProps = RadioButtonProps & {
    name?: string
}

type PaginationProps = {
    index: number,
    total: number,
}
type Props = NativeStackScreenProps<StackTypes, "QuizPage">;

const QuizPage = ({ navigation }: Props) => {
  const [answerTracker, setAnswerTracker] = useState({});
  const [test, setTest] = useState("");
  function testQuestion() {
    setTest("test");
  }

  function onPressRadioButton(radioButtonsArray: RadioProps[]) {
    let answer = radioButtonsArray.filter((object) => {
      if (object.selected) {
        return object;
      }
    });
    setAnswerTracker({
      ...answerTracker,
      [answer[0].name as string]: answer[0].value,
    });

    console.log(radioButtonsArray);
  }

  function checkAnswers() {
    console.log(answerTracker);
  }

  function renderPagination(index:number,total:number){
    return(
        <Progress.Bar progress={index/(total-1)} width={null} height={15}/>
    )
  }
  //   const yoda = GetImage(`image${questionNumber}`, questionsData)!;

  return (
    //   <View>
    //     <Header />
    <Swiper loop={false} renderPagination={renderPagination as any} showsButtons={true}>
      {[
        ...questionsData.map((question, key) => {
          return (
            <View style={styles.screen} key={question.name}>
              <Header />
              <View style={styles.quizQuestion}>
                <QuizPicture source={question.image} />
                <QuizQuestion question={question.question!} />
                <RadioGroup
                  radioButtons={question.answers!}
                  onPress={onPressRadioButton}
                />
                <Button onPress={checkAnswers} title="Check"></Button>
                <Button onPress={testQuestion} title="test"></Button>
              </View>
            </View>
          );
        }),
        <View key="image6">
          <Header />
          <Text>
            You finished the quiz, press the button to see your results
          </Text>
          <Button
            title="To Results"
            onPress={() => {
              navigation.navigate("ResultsPage");
            }}
          ></Button>
        </View>
      ]}
    </Swiper>
    //   </View>
  );
};

const styles = StyleSheet.create({
  screen: {
  },
  quizQuestion: {
    marginTop: 50,
    alignItems: "center",
  }
});

export default QuizPage;
