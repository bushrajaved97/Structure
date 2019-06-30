import React , {Component} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

class SignInScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Button title='CompleteLogin' onPress={() => this.props.navigation.navigate('DrawerNavigator')} ></Button>

      </View>
    );
  }
}

export default SignInScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
