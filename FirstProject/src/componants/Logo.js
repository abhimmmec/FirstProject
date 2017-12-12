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
  View,Image
} from 'react-native';


export default class Logo extends Component {
render()
{
return (
      <View >

<Image source={require('../images/ic_test.png')} />
        {/* <Text style={styles.container}>
         Welcome toLogin pages value!
        </Text> */}
       
      </View>
    );
}
}


const styles=StyleSheet.create( {
        container:
        {
           
            width: 40, height: 40 ,
          
           
        },
    }
);

