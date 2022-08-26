import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Routes from "./source/route";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TextInput,
  StatusBar,
} from "react-native";



export default function App() {
  return (
    <NavigationContainer style ={styles.container}>
      <Routes style ={styles.container}
      />
    </NavigationContainer>
  );

}



const styles = StyleSheet.create({
  container: {
    backgroundColor: "red",
    flex: 1,
  },
});