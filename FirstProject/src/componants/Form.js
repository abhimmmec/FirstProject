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
  TextInput,
  View,Image,TouchableOpacity
} from 'react-native';


export default class Form extends Component {
    constructor(props) {
        super(props)
        this.state = { count: 0 }
      }
    onPress = () => {
        this.setState({
     
          count: this.state.count+1
        })
      }
render()
{
return (
      <View >
         
       <TextInput style={styles.inputbox} underlineColorAndroid="white" placeholder="Email" placeholderTextColor="#3d5afe"/>
       <TextInput style={styles.inputbox} underlineColorAndroid="white" placeholder="Password" 
       secureTextEntry={true} placeholderTextColor="#3d5afe"/>
      <TouchableOpacity style={styles.button} onPress={this.onPress}>
          <Text style={styles.buttontext}>Login</Text>
          </TouchableOpacity>

          <Text style={[styles.countText]}>
            { this.state.count !== 0 ? this.state.count: null}
          </Text>
      </View>
    );
}
}


const styles=StyleSheet.create( {
        container:
        {
            flex: 1,
            justifyContent: 'center',
            flexDirection: 'column',
            alignItems: 'center',
            backgroundColor:'#f50057',
        },
        inputbox:
        {
            backgroundColor:'white',
         width:300,
        
         marginVertical:5,
         borderRadius:25,
         alignItems:'center',
         paddingHorizontal:25,
         color:'black',
         fontSize:16,
        },
        buttontext:
        {
        textAlign:'center',
        alignItems: 'center',
        fontSize:16,
        fontWeight:'500',
        color:'#ffffff',
        marginVertical:10,
        },
        button:{
       backgroundColor:'rgba(255,255,255,0.3)',
    borderRadius:25,
    marginVertical:10,
    paddingVertical:1,
    width:300
        },
        countText: {
            color: '#FF00FF'
          }
    }
    
);

