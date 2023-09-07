/// React Component file Layout:
// 1 - Import libraries we need to create a component
// 2 - Crete a component - a function that returns some 'JSX'
// 3 - Create a stylesheet or style the component
// 4 - Export the component so we can use it elsewhere in the project

import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const ComponentsScreen = () => {
  const greeting = <Text>Hello to you!</Text>;
  const name = 'Matt';

  return <View>
      <Text style={styles.textStyle}>Getting started with React Native!</Text>
      <Text style={styles.subHeaderStyle}>My name is {name}</Text>
    </View>
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 45,
  },
  subHeaderStyle: {
    fontSize: 20
  }
});

export default ComponentsScreen;
