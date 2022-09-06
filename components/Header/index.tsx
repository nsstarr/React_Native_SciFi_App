import React from 'react'
import {View, Image, Text} from 'react-native';

const Header = (props: HeaderProps) => {
    return (
      <View>
        <Text>Trivia Quiz</Text>
        <Image
          source={require("../../assets/profile_picture.png")}
          style={{ width: 100, height: 100 }}
        />
      </View>
    );
}

type HeaderProps = {
    source: string, 
}

export default Header