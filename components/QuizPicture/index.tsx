import React from 'react'
import {View, Image} from 'react-native'

const QuizPicture = ({source}:ImageProps) => {
    return (
        <View>
            <Image source={source as any} style = {{width:300, height: 200}}/>
        </View>
    )
}

type ImageProps = {
    source:string
}

export default QuizPicture