import React ,{Component} from 'react';
import { StyleSheet, Text, View,TextInput,Button } from 'react-native';


class ScreenTwo extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style = {styles.logoText}>ADD PATIENT</Text>
        <TextInput 
          style = {styles.input}
          placeholder = {'Name'}
          ></TextInput>
           <TextInput 
          style = {styles.input}
          placeholder = {'Email'}
          ></TextInput>
           <TextInput 
          style = {styles.input}
          placeholder = {'Phone Number'}
          ></TextInput>
           <TextInput 
          style = {styles.input}
          placeholder = {'Gender'}
          ></TextInput>
           <Button title='Submit'  ></Button>

      </View>
    );
  }
}

export default ScreenTwo;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
