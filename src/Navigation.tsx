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
import OnboardMeals from './app/onboard/FavouriteMeals'
import Home from './app/home/Home'
import MealDetails from './app/meal/MealDetails'
import Profile from './app/profile/Profile'

import ChooseMeal from './app/cook/ChooseMeal'
import Cook, { CookHeaderButton } from './app/cook/Cook'
import Tags from './app/cook/Tags'
import { CameraView } from './app/cook/Camera'

import BookmarkButton from 'app/home/components/BookmarkButton';
import CookNowButton from 'app/home/components/CookNowButton';
import Favourites from 'app/recipeBook/RecipeBook'

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
  '/onboard/meals'
  '/favourites'
  '/cook/:id?': {
    id?: number
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
        headerLeft: () => (
          <CookNowButton />
        ),
        title: 'Home',
    }
  }, {
    name: '/profile/:id',
    component: Profile,
    options: headerOptions,
  }, {
    name: '/onboard/meals',
    component: OnboardMeals,
    options: headerOptions,
  }, {
    name: '/favourites',
    component: Favourites,
    options: {
      ...headerOptions,
      title: 'Recipe Book',
    },
  }, {
    name: '/cook/:id?',
    component: Cook,
    options: {
        ...headerOptions,
        headerLeft: null,
        headerRight: () => <CookHeaderButton />,
    },
  }]

  return (
    <NavigationContainer>
        <Stack.Navigator>
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
