import React from 'react'
import { View, Text } from 'react-native'

const QuizQuestion = ({question}:QuestionProps) => {
    return (
        <View>
            <Text>{question}</Text>
        </View>
    )
}

type QuestionProps = {
    question: string
}

export default QuizQuestion