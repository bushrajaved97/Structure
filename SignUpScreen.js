import React , {Component} from 'react';
import { StyleSheet, Text, View,Button } from 'react-native';

class SignUpScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
         <Button title='Submit' onPress={() => this.props.navigation.navigate('DrawerNavigator')} ></Button>
      </View>
    );
  }
}

export default SignUpScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
