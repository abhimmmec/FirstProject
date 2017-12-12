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
import Logo from '../componants/Logo';
import Form from '../componants/Form';

export default class SignUp extends Component {
render()
{
return (
      <View >
       <Logo/>
       <Form/>
       <View style={styles.container}>
       <Text style={styles.singuptext}>
        Already have account !
        </Text>
        <Text>
          SingIn ?
          </Text>
        {/* <Text style={styles.container}>
         Welcome toLogin pages value!
        </Text> */}
       </View>
      </View>
    );
}
}
const styles=StyleSheet.create( {
        container:
        {
          flex:1,
          marginVertical:10,
          flexDirection:'row',
          alignItems:'flex-end',
          justifyContent:'center'
        },
        singuptext:{
        fontSize:16,
        color:'white',
        paddingRight:12
        }
    }
);