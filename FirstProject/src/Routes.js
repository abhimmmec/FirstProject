import React, { Component } from 'react';
import {Stack,Scene, Router} from 'react-native-router-flux';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import  Buttonclick from './pages/Buttonclick';
import { View } from './C:/Users/verma/AppData/Local/Microsoft/TypeScript/2.6/node_modules/@types/react-native';

 class Routes extends Component  {
    render() {
        return <Router>
<Stack key="root">
      <Scene key="login" component={Buttonclick} title="Login"/>
      <Scene key="register" component={SignUp} title="Register"/>
    
    </Stack>

          {/* <Scene key="root">
            <Scene key="login" component={Login} title="Login"/>
            <Scene key="register" component={SignUp} title="Register"/>
          
          </Scene> */}

          {/* <View>
              <Text>
                  ABhishek verma
                  </Text>
              </View> */}
        </Router>
      }
}