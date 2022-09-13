import React from 'react'
import {View, Text, StyleSheet, Button} from 'react-native'

const QuizCategoryCard = (props:CategoryProps ) => {
    return (
        <View style = {[styles.container,styles.shadowProp]}  >
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
    margin: 10,
    borderRadius: 20,
    // shadowOffset: {width: 4, height: 0},
    // shadowColor: "rgba(0,0,0,0.25)",
    // shadowOpacity: 100
  },
  shadowProp: {
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
});

export default QuizCategoryCard