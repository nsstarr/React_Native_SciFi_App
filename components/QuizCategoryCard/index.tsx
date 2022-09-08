import React from 'react'
import {View, Text, StyleSheet, Button} from 'react-native'

const QuizCategoryCard = (props:CategoryProps ) => {
    return (
        <View style = {styles.container}  >
            <Text>{props.name}</Text>
            <Button title = "Sci-Fi Quiz" onPress = {() => {props.navigation.navigate('QuizPage')}}></Button>
        </View>
    )
}

type CategoryProps = {
  name: string;
  navigation: any;
};

const styles = StyleSheet.create({
  container: {
    width: 300,
    height: 150,
    backgroundColor: "#808080",
    flexDirection: 'column',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 70
  },
});

export default QuizCategoryCard