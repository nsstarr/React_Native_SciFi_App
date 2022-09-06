import React, {useState} from 'react'
import {View, Text, StyleSheet} from 'react-native'
import Header from '../Header'
import QuizAnswer from '../QuizAnswer'
import QuizQuestion from '../QuizQuestion'
import QuizPicture from '../QuizPicture'
import {images, GetImage} from "../../utilities/images"
import RadioGroup, {RadioButtonProps } from 'react-native-radio-buttons-group'


const QuizPage = () => {

    let answersData: RadioButtonProps[] = [
        {id: '1',
        value: "1",
        label: "Option 1"},
        {id: '2',
        value: "2",
        label: "Option 2"},
        {id: '3',
        value: "3",
        label: "Option 3"},
        {id: '4',
        value: "4",
        label: "Option 4"},
    ]

    const [answers, setAnswers] = useState<RadioButtonProps[]>(answersData)

    function onPressRadioButton(radioButtonsArray:RadioButtonProps[]) {
        setAnswers(radioButtonsArray);
    }

    const yoda = GetImage(`image${2}`)
    return (
        <View>
            <Header/>
            <View style={styles.pictureContainer}>
                <QuizPicture source={ yoda}/>
                <QuizQuestion question="Who is this character?" />
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