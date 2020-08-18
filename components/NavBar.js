import React, { useState } from 'react';
import { StyleSheet, Dimensions, View, Text, TextInput } from 'react-native';
import { NativeRouter as Router, Route } from 'react-router-native';

const Login = () => {

    const [value, onChangeText] = useState('your email');

    return (
      <View style={styles.container}>
        <TextInput
        onChangeText={text => onChangeText(text)}
        value={value}
        />
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Login;