import React from 'react'
import {View, Image, StyleSheet,Platform} from 'react-native'

const QuizPicture = ({source}:ImageProps) => {
    return (
        <View>
            <Image source={source as any} style={styles.quizImage} />
        </View>
    )
}

type ImageProps = {
    source:string
}

const styles = StyleSheet.create({
    quizImage: {
        borderRadius: 20,
        height: 200,
        width: 300,
    },
})

export default QuizPicture