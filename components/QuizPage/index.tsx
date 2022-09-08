import React, { useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import Header from "../Header";
import QuizAnswer from "../QuizAnswer";
import QuizQuestion from "../QuizQuestion";
import QuizPicture from "../QuizPicture";
import { questionsData } from "../../utilities/QuestionsData";
import { GetImage } from "../../utilities/images";
import RadioGroup from "react-native-radio-buttons-group";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import Swiper from "react-native-swiper";
type StackTypes = {
  Home: undefined;
  QuizPage: undefined;
  ResultsPage: undefined;
};

export type RadioButtonProps = {
  borderColor?: string;
  color?: string;
  containerStyle?: object;
  description?: string;
  descriptionStyle?: object;
  disabled?: boolean;
  id: string;
  label?: string;
  labelStyle?: object;
  layout?: 'row' | 'column';
  onPress?: (id: string) => void;
  selected?: boolean;
  size?: number;
  value?: string;
  name?: string;
};

type Props = NativeStackScreenProps<StackTypes, "QuizPage">;

const QuizPage = ({ navigation }: Props) => {
//   const [questionNumber, setQuestionNumber] = useState(0);

  const [answerTracker, setAnswerTracker] = useState({});
//   let answersData: RadioButtonProps[] = questionsData[questionNumber].answers!;

//   const [answers, setAnswers] = useState<RadioButtonProps[]>(answersData);

  function changeQuestion() {
    // setQuestionNumber((prev) => prev + 1);
  }

  function onPressRadioButton(radioButtonsArray: RadioButtonProps[]) {
    let answer = radioButtonsArray.filter((object) => {
      if (object.selected) {
        return object;
      }
    });
    setAnswerTracker({ ...answerTracker, [answer[0].name as string]: answer[0].value });
    // setAnswers(radioButtonsArray);
    console.log(radioButtonsArray)
  }

  function checkAnswers() {
    // console.log(questionNumber);
    // console.log(radioButtons);
    console.log(answerTracker);
    // console.log(questionsData[questionNumber]);
  }

//   const yoda = GetImage(`image${questionNumber}`, questionsData)!;


  



    return (
    //   <View>
    //     <Header />
        <Swiper>

          {[...questionsData.map((question, key) => {
            
            return (
              <View style={styles.pictureContainer} key = {question.name}>
                <Header />
                <QuizPicture source={question.image} />
                <QuizQuestion
                  question={question.question!}
                />
                <RadioGroup
                  radioButtons={question.answers!}
                  onPress={onPressRadioButton}
                />
                <Button onPress={checkAnswers} title="Check"></Button>
              </View>
            );
          }),
          <View key="image6">
            <Header />
        <Text>You finished the quiz, press the button to see your results</Text>
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
  }

const styles = StyleSheet.create({
  pictureContainer: {
    alignItems: "center",
    margin: 50,
  },
});

export default QuizPage;
