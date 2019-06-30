import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ScreenTwo from './ScreenTwo';

class ScreenOne extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>ScreenOne</Text>
      </View>
    );
  }
}

export default ScreenOne;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
