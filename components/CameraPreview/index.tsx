import React from 'react'
import {View, ImageBackground, Text, TouchableOpacity} from 'react-native';

const CameraPreview = ({ photo, savePhoto, retakePicture }: any ) => {
  console.log("sdsfds", photo);
  return (
    <View
      style={{
        backgroundColor: "transparent",
        flex: 1,
        width: "100%",
        height: "100%",
      }}
    >
      <ImageBackground
        source={{ uri: photo && photo.uri }}
        style={{
          flex: 1,
        }}
      >
        <TouchableOpacity
            onPress={retakePicture}
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
              Retake picture
            </Text>
          </TouchableOpacity>
        <TouchableOpacity
            onPress={savePhoto}
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
              Save picture
            </Text>
          </TouchableOpacity>

      </ImageBackground>

    </View>
  );
};

export default CameraPreview