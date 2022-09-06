import React from 'react'
import {View, Text} from 'react-native'

const QuizCategoryCard = (props:CategoryProps) => {
    return (
        <View>
            <Text>{props.name}</Text>
        </View>
    )
}

type CategoryProps = {
    name: string
}

export default QuizCategoryCard