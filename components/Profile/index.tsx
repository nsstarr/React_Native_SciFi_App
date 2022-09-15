import React from 'react'
import { View, Text } from 'react-native'
import type { NativeStackScreenProps } from "@react-navigation/native-stack";


type StackTypes = {
  Profile: undefined
};

type Props = NativeStackScreenProps<StackTypes, "Profile">;

export default function Profile({route, navigation }: Props) {
  return (
    <View>
      <Text>Profile</Text>
    </View>
  )
}
