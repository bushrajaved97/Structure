import React , {Component} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

class WelcomeScreen extends Component {

  

  render() {
    return (
      <View style={styles.container}>
        <Button title='Sign In' onPress={() => this.props.navigation.navigate('DrawerNavigator')} ></Button>
        <Button title='Sign Up'onPress={() => this.props.navigation.navigate('SignUpScreen')} ></Button>
      </View>
    );
  }
}

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
