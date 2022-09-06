import React, {useState} from 'react'
import {View, Text, StyleSheet} from 'react-native'
import Header from '../Header'
import QuizAnswer from '../QuizAnswer'
import QuizQuestion from '../QuizQuestion'
import QuizPicture from '../QuizPicture'
import {questionsData, GetImage} from "../../utilities/QuestionsData"
import RadioGroup, {RadioButtonProps } from 'react-native-radio-buttons-group'


const QuizPage = () => {
    const [questionNumber, setQuestionNumber] = useState(1)
    let answersData: RadioButtonProps[] = questionsData[questionNumber].answers!
   

    const [answers, setAnswers] = useState<RadioButtonProps[]>(answersData)

    function onPressRadioButton(radioButtonsArray:RadioButtonProps[]) {
        setAnswers(radioButtonsArray);
    }

    const yoda = GetImage(`image${questionNumber}`)
    return (
        <View>
            <Header/>
            <View style={styles.pictureContainer}>
                <QuizPicture source={ yoda}/>
                <QuizQuestion question={questionsData[questionNumber].question!} />
                <RadioGroup radioButtons={answers}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    pictureContainer:{
        alignItems: 'center',
        margin: 50
    }
})

export default QuizPage