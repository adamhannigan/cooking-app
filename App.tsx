import Amplify from 'aws-amplify';
import amplify from './src/aws-exports';

import 'react-native-gesture-handler'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'

import { ApplicationProvider, IconRegistry } from '@ui-kitten/components'
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { mapping, light as lightTheme } from '@eva-design/eva'

import React from 'react';
import { StyleSheet } from 'react-native'

import Login from './src/login/Login'
import Register from './src/register/Register'
import Home from './src/home/Home'

Amplify.configure(amplify);

const Stack = createStackNavigator()

function App() {
  return (
    <React.Fragment>
      <ApplicationProvider  mapping={mapping} theme={lightTheme}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen
              name="Login"
              component={Login}
            />
            <Stack.Screen name="Register" component={Register} />
          </Stack.Navigator>
        </NavigationContainer>
      </ApplicationProvider>
    </React.Fragment>
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

export default App