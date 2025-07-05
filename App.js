import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import {GoogleSignin, statusCodes} from '@react-native-google-signin/google-signin';
import {signInWithCredential, GoogleAuthProvider} from 'firebase/auth';
import React from 'react';
export default function App() {
  return (
    <View style={styles.container}>
      <Text>Welcome</Text>
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
