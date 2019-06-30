import React,{Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';

class DoctorProfileScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
          <Text style = {styles.logoText}>Bushra Javed</Text>
          <Text style = {styles.logoText}>abc@hotmail.com</Text>
          <Text style = {styles.logoText}>Female</Text>
          <Text style = {styles.logoText}>12345</Text>
          
        
      </View>
    );
  }
}

export default DoctorProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
