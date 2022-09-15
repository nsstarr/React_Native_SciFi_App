import React from 'react'
import {View, ImageBackground} from 'react-native';

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
      />
    </View>
  );
};

export default CameraPreview