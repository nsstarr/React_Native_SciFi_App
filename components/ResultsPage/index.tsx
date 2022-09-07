import React from 'react'
import { View, Text, Image, Button, ScrollView, StyleSheet } from 'react-native'
import Header from '../Header'


const ResultsPage = () => {
  const score = '4 of 6';
  return (
    <View style={styles.container}>
      <Header />
      <ScrollView contentContainerStyle={styles.scrollView} >
        <Text>Your Result</Text>
        <Image source={require('../../assets/Matrix.jpg')} style={{width:300, height: 200}} />
        <Text>{score}</Text>
        <Text>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</Text>
        <Text>FINAL LINE</Text>
        <View style={styles.buttonsContainer}>
          <Button title={'Retake'} />
          <Button title={'Next Quiz'} />
        </View>
      </ScrollView>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    height: '100%'
  },
  scrollView: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '100%'
  }
})

export default ResultsPage

