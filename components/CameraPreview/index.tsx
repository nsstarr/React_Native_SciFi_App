import React from "react";
import { View, ImageBackground, Text, TouchableOpacity } from "react-native";

const CameraPreview = ({ photo, savePhoto, retakePicture }: any) => {
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
          justifyContent: "space-evenly",
          flexDirection: "row",
          alignItems: "flex-end",
        }}
      >
        <TouchableOpacity
          onPress={retakePicture}
          style={{
            width: 130,
            borderRadius: 4,
            backgroundColor: "#EFA80C",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            height: 40,
            marginBottom: 40,
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
            backgroundColor: "#EFA80C",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            height: 40,
            marginBottom: 40,
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

export default CameraPreview;
