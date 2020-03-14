import 'react-native-gesture-handler'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'

import React from 'react';
import { StyleSheet } from 'react-native'
import { useTheme } from '@ui-kitten/components'

import {
  Icon,
} from 'galio-framework';

import Login from './app/login/Login'
import Register from './app/register/Register'
import Preferences from './app/onboard/Preferences'
import Follow from './app/onboard/Follow'
import Menu from './app/onboard/Menu'
import Home from './app/home/Home'

import ChooseMeal from './app/cook/ChooseMeal'
import Cook from './app/cook/Cook'

const Stack = createStackNavigator()

function Navigation() {
  const theme = useTheme()

  return (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen
            name="Home"
            component={Home}
            options={{
                headerRight: () => (
                <Icon name={'staro'} color={theme['color-primary-default']}  family={"AntDesign"} size={30} style={styles.favouriteButton} />
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
            <Stack.Screen name="ChooseMeal" component={ChooseMeal} />
            <Stack.Screen name="Cook" component={Cook} />
            <Stack.Screen name="Follow" component={Follow} />
        </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  favouriteButton: {
    marginRight: 10,
  },
});

export default Navigation
