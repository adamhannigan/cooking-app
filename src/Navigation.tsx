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

import BookmarkButton from './app/home/components/BookmarkButton'
import Home from './app/home/Home'
import MealDetails from './app/meal/MealDetails'
import Profile from './app/profile/Profile'

import ChooseMeal from './app/cook/ChooseMeal'
import CookDetails from 'app/cook/Details'
import Recipe from 'app/cook/Recipe'
import { CookHeaderButton } from 'app/cook/components/Cooker'
import InProgress from 'app/cook/InProgress'
import Tags from './app/cook/Tags'


import Favourites from 'app/recipeBook/RecipeBook'
import { UserModel } from 'domain/users/model';
import { AuthModel } from 'domain/auth/model';

const Stack = createStackNavigator()

console.disableYellowBox = true

export type Routes = {
  '/login'
  '/register'
  // There are nested routes in /home
  '/home'

  '/meal/:id': {
    id: string
  }
  '/profile/:id': {
    id: string
  }

  '/onboard/preferences'
  '/onboard/people'
  '/onboard/meals'

  '/favourites'
  '/cook/details/:id': {
    id?: string
  }
  '/cook/progress'
  '/cook/recipe'
  '/cook/pick'
  '/cook/tags'
}

type RouteName = keyof Routes
export type Route<T extends RouteName> = RouteProp<Routes, T>
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

  const [initialRoute, setInitialRoute] = React.useState<RouteName>(null)
  React.useEffect(() => {
    const load = async () => {
      const authenticatedUser = await AuthModel.getCurrentUser()

      if (authenticatedUser) {
        setInitialRoute('/home')
      } else {
        setInitialRoute('/login')
      }
    }

    load()
    // Check authentication
  }, [])


  if (!initialRoute) {
    // Return loader
    return null
  }

  const routes: {
    name: RouteName,
    component: any,
    options: any,
    initialParams?: any,
  }[] = [{
    name: '/login',
    component: Login,
    options: headerOptions,
  }, {
    name: '/register',
    component: Register,
    options: headerOptions,
  }, {
    name: '/onboard/preferences',
    component: Preferences,
    options: headerOptions,
  }, {
    name: '/onboard/people',
    component: Follow,
    options: headerOptions,
  }, {
    name: '/onboard/meals',
    component: OnboardMeals,
    options: headerOptions,
  }, {
    name: '/home',
    component: Home,
    options: {
        ...headerOptions,
        title: 'Home',
        headerRight: () => (
          <BookmarkButton />
        ),
    }
  }, {
    name: '/meal/:id',
    component: MealDetails,
    options: {
      ...headerOptions,
      headerBackTitle: 'Back',
      headerRight: () => (
        <BookmarkButton />
      ),
    },
    initialParams: {
      // Hot reload testing
      id: 1,
    },
  }, {
    name: '/profile/:id',
    component: Profile,
    options: headerOptions,
  }, {
    name: '/favourites',
    component: Favourites,
    options: {
      ...headerOptions,
      title: 'Favourites',
    },
  }, {
    name: '/cook/details/:id',
    component: CookDetails,
    options: {
        ...headerOptions,
        headerLeft: null,
        headerRight: () => <CookHeaderButton />,
    },
  }, {
    name: '/cook/progress',
    component: InProgress,
    options: {
        ...headerOptions,
        headerLeft: null,
        headerRight: () => <CookHeaderButton />,
    },
  }, {
    name: '/cook/recipe',
    component: Recipe,
    options: headerOptions,
  }, {
    name: '/cook/pick',
    component: ChooseMeal,
    options: headerOptions,
  }, {
    name: '/cook/tags',
    component: Tags,
    options: headerOptions,
  }]

  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName={initialRoute}>
            {
              routes.map(route => (<Stack.Screen key={route.name} {...route} />))
            }
        </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation
