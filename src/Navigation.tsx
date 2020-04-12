import 'react-native-gesture-handler'
import {
  NavigationContainer,
  RouteProp,
  RouteConfig,
  NavigationProp,
} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'

import React from 'react';

import { useTheme } from '@ui-kitten/components'

import Login from './app/login/Login'
import Register from './app/register/Register'
import Preferences from './app/onboard/Preferences'
import Follow from './app/onboard/Follow'
import Menu from './app/onboard/Menu'
import Home from './app/home/Home'
import MealDetails from './app/meal/MealDetails'
import Profile from './app/profile/Profile'

import ChooseMeal from './app/cook/ChooseMeal'
import Cook from './app/cook/Cook'
import Tags from './app/cook/Tags'
import { CameraView } from './app/cook/Camera'

import BookmarkButton from 'app/home/components/BookmarkButton';

const Stack = createStackNavigator()

console.disableYellowBox = true

export type Routes = {
  '/'
  '/meal/:id': {
    id: number
  }
  '/profile/:id': {
    id: number
  }
}

export type Route<T extends keyof Routes> = RouteProp<Routes, T>
export type NavProp = NavigationProp<Routes>

function Navigation() {
  const kittenTheme = useTheme()

  const headerOptions = {
    headerStyle: {
      backgroundColor: kittenTheme['color-info-default'],
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold' as 'bold',
    },
  }

  const routes: RouteConfig<Routes, keyof Routes, object>[] = [{
    name: '/meal/:id',
    component: MealDetails,
    options: {
      ...headerOptions,
      headerBackTitle: 'Back',

    },
    initialParams: {
      // Hot reload testing
      id: 1,
    },
  }, {
    name: '/',
    component: Home,
    options: {
        ...headerOptions,
        headerRight: () => (
          <BookmarkButton />
        ),
        headerLeft: null,
        title: 'Home',
    }
  }, {
    name: '/profile/:id',
    component: Profile,
    options: headerOptions,
  }]

  return (
    <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
              name="Home"
              component={Home}
              options={{
                  ...headerOptions,
                  headerRight: () => (
                    <BookmarkButton />
                  ),
                  headerLeft: null,
              }}
            />

            <Stack.Screen
              name="Cook"
              component={Cook}
              options={headerOptions}
            />

            {
              routes.map(route => (<Stack.Screen {...route} />))
            }

            <Stack.Screen
              name="Follow"
              component={Follow}
              options={headerOptions}
            />

            

            <Stack.Screen
              name="Preferences"
              component={Preferences}
              options={headerOptions}
            />

            <Stack.Screen
                name="Login"
                component={Login}
            />

            <Stack.Screen
              name="Register"
              component={Register}
              options={headerOptions}
            />

            <Stack.Screen
              name="ChooseMeal"
              component={ChooseMeal}
              options={headerOptions}
            />

            <Stack.Screen
              name="Camera"
              component={CameraView}
              options={headerOptions}
            />

            <Stack.Screen
              name="Tags"
              component={Tags}
              options={headerOptions}
            />

        </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation
