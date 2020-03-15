import 'react-native-gesture-handler'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'

import React from 'react';

import Login from './app/login/Login'
import Register from './app/register/Register'
import Preferences from './app/onboard/Preferences'
import Follow from './app/onboard/Follow'
import Menu from './app/onboard/Menu'
import Home from './app/home/Home'

import ChooseMeal from './app/cook/ChooseMeal'
import Cook from './app/cook/Cook'
import Tags from './app/cook/Tags'
import BookmarkButton from 'app/home/BookmarkButton';

const Stack = createStackNavigator()

function Navigation() {
  return (
    <NavigationContainer>
        <Stack.Navigator>

            <Stack.Screen
              name="Home"
              component={Home}
              options={{
                  headerRight: () => (
                    <BookmarkButton />
                  )
              }}
            />

            <Stack.Screen name="Preferences" component={Preferences} />

            <Stack.Screen name="Menu" component={Menu} />
            <Stack.Screen
                name="Login"
                component={Login}
            />
            <Stack.Screen name="Register" component={Register} />
            <Stack.Screen name="Follow" component={Follow} />

            <Stack.Screen name="ChooseMeal" component={ChooseMeal} />
            <Stack.Screen name="Cook" component={Cook} />
            <Stack.Screen name="Tags" component={Tags} />

        </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation
