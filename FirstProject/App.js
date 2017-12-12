/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,StatusBar
} from 'react-native';
import Login from './src/pages/Login';
import Buttonclick from './src/pages/Buttonclick';
import Routes from './src/Routes';


const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});



export default class App extends Component<{}> {
  render() {
    return (
      <View style={styles.container}>
       <StatusBar
     backgroundColor="red"
     barStyle="light-content"
   />
 
        {
          /* <Text style={styles.welcome}>
         Welcome to React Native Devlopment!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit App.js
        </Text>
        <Text style={styles.instructions}>
          {instructions}
        </Text> 
        }
        {/* <Text style={styles.test}>
           Himanshu singh Bhardwaj
        </Text> */}
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
   
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor:'#7375d8',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginVertical:5,
    marginBottom: 5,
  },
  test:{
    textAlign:'center',
    color:'#f50057',
    margin:5,
  },

});
