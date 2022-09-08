import React, {useState} from 'react'
import {View, Text, StyleSheet, Button} from 'react-native'
import Header from '../Header'
import QuizAnswer from '../QuizAnswer'
import QuizQuestion from '../QuizQuestion'
import QuizPicture from '../QuizPicture'
import {questionsData} from "../../utilities/QuestionsData"
import {GetImage} from "../../utilities/images"
import RadioGroup, {RadioButtonProps } from 'react-native-radio-buttons-group'
import type {NativeStackScreenProps} from "@react-navigation/native-stack"
type StackTypes = {
  Home: undefined;
  QuizPage: undefined;
  ResultsPage: undefined
}

type Props = NativeStackScreenProps<StackTypes, 'QuizPage'>

const QuizPage = ({navigation}:Props) => {
    const [questionNumber, setQuestionNumber] = useState(0)

    const [answerTracker, setAnswerTracker] = useState({})
    let answersData: RadioButtonProps[] = questionsData[questionNumber].answers!
   

    const [answers, setAnswers] = useState<RadioButtonProps[]>(answersData)

    function changeQuestion(){
        setQuestionNumber(prev => prev + 1)
    }



    function onPressRadioButton(radioButtonsArray:RadioButtonProps[]) {
        let answer = radioButtonsArray.filter((object)=>{if(object.selected){return object}})
        setAnswerTracker({...answerTracker, [questionNumber]:answer[0].value})
        setAnswers(radioButtonsArray);
    }

    function checkAnswers() {
        console.log(questionNumber)
        console.log(`Length of quiz is ${questionsData.length}`)
        console.log(answerTracker)
        console.log(questionsData[questionNumber])
    }

    const yoda = GetImage(`image${questionNumber}`, questionsData)!

    if(questionNumber >= (questionsData.length -1 )){
        return(
            <View>
                <Text>You finished the quiz, press the button to see your results</Text>
                <Button title="To Results" onPress={() => {navigation.navigate('ResultsPage')}}></Button>
            </View>
        )
    }
    else {
        return (
        <View>
            <Header/>
            <View style={styles.pictureContainer}>
                <QuizPicture source={ yoda}/>
                <QuizQuestion question={questionsData[(questionNumber)].question!} />
                <RadioGroup radioButtons={questionsData[(questionNumber)].answers!} onPress={onPressRadioButton}/>
                <Button onPress={changeQuestion} title="Next"></Button>
                <Button onPress={checkAnswers} title="Check"></Button>
            </View>
        </View>
    )
    }
}

const styles = StyleSheet.create({
    pictureContainer:{
        alignItems: 'center',
        margin: 50
    }
})

export default QuizPage