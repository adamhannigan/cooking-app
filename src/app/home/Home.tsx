import * as React from 'react';
import {
    NavigationContainer, useNavigation
  } from '@react-navigation/native'

import { useTheme } from '@ui-kitten/components'

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import Feed from './feed/Feed'
import Activity from './activity/Activity'
import MyMenu from './myMenu/MyMenu'
import Search from './search/Search'

const routes = [
    { key: 'meals', title: 'Meals', icon: 'silverware-fork-knife' },
    // { key: 'search', title: 'Search', icon: 'feature-search-outline' },
    { key: 'activity', title: 'Activity', icon: 'heart-outline', badge: true },
    { key: 'menu', title: 'Menu', icon: 'book-open' },
]

/*
const scene = BottomNavigation.SceneMap({
    meals: Feed,
    // search: Search,
    activity: Activity,
    menu: MyMenu,
});
*/
const Tab = createMaterialBottomTabNavigator();

const Home = () => {
    const [index, setIndex] = React.useState<number>(0)
    const theme = useTheme()
    const navigation = useNavigation()

    const componentRoutes = [{
        name: '/',
        component: Feed,
      }, {
        name: '/activity',
        component: Activity,
      }, {
        name: '/menu',
        component: MyMenu,
      }]

    return (
        <Tab.Navigator>
            {
              componentRoutes.map(route => (<Tab.Screen {...route} />))
            }
        </Tab.Navigator>
    )
    /*
    return (
        <BottomNavigation
            navigationState={{ index, routes }}
            onIndexChange={onIndexChange}
            renderScene={(props) => null}
            labeled
            barStyle={{ backgroundColor: theme['color-primary-default'] }}
            activeColor='white'
            inactiveColor='#f4f4f4'
        />
    )
    */
}

export default Home
