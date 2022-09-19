import React from "react";
import { View, Text } from "react-native";

type AppProps = {
  answer: string;
};

const QuizAnswer = ({ answer }: AppProps) => {
  return (
    <View>
      <Text>{answer}</Text>
    </View>
  );
};

export default QuizAnswer;
