import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image, ImageBackgroundBase, ImageBackground } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

import { HeaderBackButton } from 'react-navigation-stack';
import counter from '../assets/counter.png'

const counterscreen = (props) => {

  const [num, setNum] = useState(0);

  const onPressIncrement = () => {
    setNum(num + 1);
  }
  const onPressDecrement = () => {
    // if (num > 0)
    setNum(num - 1);
  }
  const onPressReset = () => {
    setNum(0);
  }
  return (
    <View style={styles.container}>
      <View style={{ marginTop: 90 }}>
        <Text style={styles.btnnum}>{num}</Text>
      </View>
      <View style={styles.btncontainer}>
        <TouchableOpacity style={styles.btn} onPress={onPressIncrement}><Entypo name="plus" size={24} color="black" /></TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={onPressDecrement}><Entypo name="minus" size={24} color="black" /></TouchableOpacity>
      </View>
      <View style={{ alignItems: 'center', marginVertical: 3, marginVertical: 15 }}>
        <TouchableOpacity style={styles.btn} onPress={onPressReset}>
          <Text style={{ color: 'white' }}>RESET</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
counterscreen.navigationOptions = (navData) => {
  return {
    headerTitle: 'Mathematics',
    headerStyle: {
      backgroundColor: 'rgba(3,220,203,255)',
    },
    headerTintColor: 'white',
    headerTitleAlign: 'left',
    // headerRight: () => (
    //   <ImageBackground source={counter} style={{ width: 30, height: 30, marginRight: 20 }} />
    // ),
    headerRight: (
      <View style={{}}>
        <Image
          style={{ width: 25, height: 25, marginLeft: 10, marginTop: 5 }}
          source={require('../assets/counter.png')}
        />
        <Text style={{ color: 'white', marginRight: 15 }}>Counter</Text>
      </View>
    ),
    // headerRight: (
    //   <View style={{}}>
    //     <Image
    //       style={{ width: 25, height: 25, marginLeft: 10, marginTop: 5 }}
    //       source={require('../assets/counter.png')}
    //     />
    //     <Text style={{ color: 'white', marginRight: 15 }}>Counter</Text>
    //   </View>
    // ),
    headerStyle: styles.header,
    headerTitleStyle: styles.headerTXT,
  };
};
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: `white`,
    flex: 1,
  },
  btncontainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  btnnum: {
    fontSize: 25,
    backgroundColor: 'white',
    marginBottom: 50
  },
  btn: {
    backgroundColor: 'rgba(3,220,203,255)',
    marginHorizontal: 10,
    padding: 10,
    alignItems: 'center',
    borderRadius: 5,
    width: 150,
    marginTop: 20
  },
  header: {
    backgroundColor: 'rgba(3,220,203,255)',
  },
});
export default counterscreen;
