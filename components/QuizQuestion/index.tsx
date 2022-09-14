import React from 'react'
import { View, Text, StyleSheet } from 'react-native';
import {
  useFonts,
  Montserrat_600SemiBold
} from "@expo-google-fonts/dev"; 

const QuizQuestion = ({question}:QuestionProps) => {
    let [fontsLoaded] = useFonts({
        Montserrat_600SemiBold
    });

    if (fontsLoaded === false) {
        return <Text>Loading...</Text>;
    }

    return (
        <View>
            <Text style={styles.quizQuestion}>{question}</Text>
        </View>
    )
}

type QuestionProps = {
    question: string
}

const styles = StyleSheet.create({
    quizQuestion: {
        fontFamily: 'Montserrat_600SemiBold',
        fontSize: 20,
        marginTop: 18,
        marginBottom: 18,
    }
})

export default QuizQuestion