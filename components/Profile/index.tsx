import { Camera, CameraType } from "expo-camera";
import { useState, useEffect } from "react";
import {
  Button,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Alert,
  ImageBackground,
  Image
} from "react-native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import CameraPreview from "../CameraPreview";

type Props = NativeStackScreenProps<StackTypes, "Profile">;

type StackTypes = {
  Profile: {saveProfile:React.Dispatch<React.SetStateAction<string>>, preview:string};
};

let camera: Camera;

export default function Profile({ route, navigation }: Props) {

console.log(route.params)
let {saveProfile} = route.params
console.log(saveProfile)

useEffect(()=>{

  setSavedImage(route.params.preview)
},[])

  const [previewVisible, setPreviewVisible] = useState(false);
  const [capturedImage, setCapturedImage] = useState<any>(null);
  const [startCamera, setStartCamera] = useState(false);
  const [savedImage, setSavedImage] =useState()

  const __startCamera = async () => {
    const { status } = await Camera.requestCameraPermissionsAsync();
    if (status === "granted") {
      // do something
      setStartCamera(true);
    } else {
      Alert.alert("Access denied");
    }
  };

  const __takePicture = async () => {
    if (!camera) return;
    const photo = await camera.takePictureAsync();
    console.log(photo);
    setPreviewVisible(true);
    setCapturedImage(photo);
  };

  const __retakePicture = () => {
    setCapturedImage(null);
    setPreviewVisible(false);
    __startCamera();
  };

  const __savePhoto = () => {
    setSavedImage(capturedImage.uri)
    let capturedUri = {uri: capturedImage.uri}
    saveProfile(capturedUri)
    setPreviewVisible(false)
    setStartCamera(false)
  }

  if (previewVisible && capturedImage) {
    return (
      <CameraPreview
        photo={capturedImage}
        savePhoto={__savePhoto}
        retakePicture={__retakePicture}
      />
    );
  } else if (startCamera) {
    return (
      <Camera
        style={{ flex: 1, width: "100%" }}
        ref={(r) => {
          camera = r!;
        }}
      >
        <View
          style={{
            position: "absolute",
            bottom: 0,
            flexDirection: "row",
            flex: 1,
            width: "100%",
            padding: 20,
            justifyContent: "space-between",
          }}
        >
          <View
            style={{
              alignSelf: "center",
              flex: 1,
              alignItems: "center",
            }}
          >
            <TouchableOpacity
              onPress={__takePicture}
              style={{
                width: 70,
                height: 70,
                bottom: 0,
                borderRadius: 50,
                backgroundColor: "#fff",
              }}
            />
          </View>
        </View>
      </Camera>
    );
  } else
    return (
      <View style={styles.container}>
        {savedImage && <Image source={savedImage as any} style={{height:100, width:100}}/>}
        <View
          style={{
            flex: 1,
            backgroundColor: "#fff",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <TouchableOpacity
            onPress={__startCamera}
            style={{
              width: 130,
              borderRadius: 4,
              backgroundColor: "#14274e",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              height: 40,
            }}
          >
            <Text
              style={{
                color: "#fff",
                fontWeight: "bold",
                textAlign: "center",
              }}
            >
              Take picture
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
