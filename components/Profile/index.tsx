import { Camera, CameraType } from 'expo-camera';
import { useState } from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View, Alert } from 'react-native';
import type { NativeStackScreenProps } from "@react-navigation/native-stack";

type Props = NativeStackScreenProps<StackTypes, "Profile">;

type StackTypes = {
  Profile: undefined
}

let camera: Camera



export default function Profile({route,navigation}:Props) {

  const [startCamera,setStartCamera] = useState(false)

const __startCamera = async ()=>{
  const {status} = await Camera.requestPermissionsAsync()
  if(status === 'granted'){
    // do something
    setStartCamera(true)
  }else{
    Alert.alert("Access denied")
}}


if(startCamera){
  return(
    <Camera
          style={{flex: 1,width:"100%"}}
          ref={(r) => {
            camera = r!
          }}
        ></Camera>
  )
}
  else 
  return (
    <View style={styles.container}>
      <View
        style={{
          flex: 1,
          backgroundColor: '#fff',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <TouchableOpacity
        onPress={__startCamera}
          style={{
            width: 130,
            borderRadius: 4,
            backgroundColor: '#14274e',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            height: 40
          }}
        >
          <Text
            style={{
              color: '#fff',
              fontWeight: 'bold',
              textAlign: 'center'
            }}
          >
            Take picture
          </Text>
        </TouchableOpacity>
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})