import React from "react";
import { View, Text, StyleSheet, Button, Platform, ImageBackground } from "react-native";

const QuizCategoryCard = (props: CategoryProps) => {
  return (
    <View style={[styles.container]}>
      <ImageBackground source={props.image as any} resizeMode="cover" style={{height:"100%", width: "100%", borderRadius:20, overflow:"hidden" }}>
      <Button
        title={props.name}
        onPress={() => {
          props.navigation.navigate("QuizPage");
        }}
        color= "red"
      ></Button>
      </ImageBackground>
    </View>
  );
};

type CategoryProps = {
  name: string;
  navigation: any;
  image: string;
};

const styles = StyleSheet.create({
  container: {
    width: 300,
    height: 150,
    flexDirection: "column",
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
    borderRadius: 20,
    // backgroundColor: "grey",
    ...Platform.select({
      ios: {
        shadowColor: "#171717",
        shadowOffset: { width: -2, height: 4 },
        shadowOpacity: 0.8,
        shadowRadius: 4,
      },
      android: {
        elevation: 6,
      },
    }),
  },
  button: {

  }
});

export default QuizCategoryCard;
