import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './HomeScreen';
import Story from './Story';
import Insta from './Insta';



export default function App() {



  
  return (
    <View>
      <Insta/>
    <Story/>
    <HomeScreen/>
    </View>
  );
}

const styles = StyleSheet.create({

});
