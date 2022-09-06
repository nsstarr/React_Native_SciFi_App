import React from 'react'
import {View, Image, Text, StyleSheet} from 'react-native';

const Header = (props: HeaderProps) => {

  

    return (
      <View style={styles.container}>
        <View></View>
        <Text style={{color: '#fff', fontSize:40}}>Trivia Quiz</Text>
        <Image
          source={props.avatar}
          style={{ width: 100, height: 100, borderRadius: 50 }}
        />
      </View>
    );
}

type HeaderProps = {
    avatar: string, 
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    // position: 'absolute',
    // width: 100,
    // height: 50,
    // marginTop: 0,
    marginTop: 50,
    padding: 10,
    backgroundColor: '#211f3d',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});

export default Header