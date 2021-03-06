import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Dimensions, View, Text, TextInput } from 'react-native';
import Login from './components/Login'

export default class App extends Component {

  render() {
    return (
      <View style={styles.container}>
        <View>
          <Text>Login to your account</Text>
          <Login />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
