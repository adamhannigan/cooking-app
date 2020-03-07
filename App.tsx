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
import Preferences from './src/onboard/Preferences'
import Follow from './src/onboard/Follow'
import Menu from './src/onboard/Menu'
import Home from './src/home/Home'
import Cook from './src/cook/Cook'

Amplify.configure(amplify);

const Stack = createStackNavigator()

function App() {
  return (
    <React.Fragment>
      <ApplicationProvider  mapping={mapping} theme={lightTheme}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Preferences" component={Preferences} />
            <Stack.Screen name="Follow" component={Follow} />
            <Stack.Screen name="Menu" component={Menu} />
            <Stack.Screen
              name="Login"
              component={Login}
            />
            <Stack.Screen name="Register" component={Register} />
            <Stack.Screen name="Cook" component={Cook} />
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
