import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createDrawerNavigator, createAppContainer, createStackNavigator} from 'react-navigation';
import HomeScreenTabNavigator from './HomeScreenTabNavigator'
import SignOutScreen from './SignOutScreen';


const InnerStackNavigator = new createStackNavigator({
    TabNavigator:{screen:HomeScreenTabNavigator}
})

const AppDrawerNavigator = new createDrawerNavigator({
     HomeScreen: {screen:InnerStackNavigator},
     SignOut: {screen:SignOutScreen}

})

export default createAppContainer(AppDrawerNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
