import * as React from 'react';
import {
    NavigationContainer,
    useNavigation,
    useIsFocused,
    useRoute,
  } from '@react-navigation/native'

import { useTheme } from '@ui-kitten/components'
import {
    Icon,
  } from 'galio-framework';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import Feed from './feed/Feed'
import Activity from './activity/Activity'
import MyMenu from './myMenu/MyMenu'
import Search from './search/Search'
import Cook from 'app/cook/ChooseMeal'

import RecipeSVG from './assets/file.svg'
import RecipeOutlineSVG from './assets/penAndPaperOutline.svg'
import FriendSVG from './assets/friends.svg'
import FoodSVG from './assets/food.svg'
import FoodOutlineSVG from './assets/foodOutline.svg'
import SearchSVG from './assets/search.svg'
import SearchOutlineSVG from './assets/searchOutline.svg'
import HatSVG from './assets/hat.svg'
import HatOutlineSVG from './assets/hatOutline.svg'
import ActivitySVG from './assets/activity.svg'
import ActivityOutlineSVG from './assets/activityOutline.svg'

import { InProgressMealModel } from 'domain/inProgressMeals/model';

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
    const [inProgress, setInProgress] = React.useState<boolean>(false)
    const theme = useTheme()
    const navigation = useNavigation()
    const isFocused = useIsFocused()
    const route = useRoute()

    console.log('Render home', route)

    React.useEffect(() => {
        const load = async () => {
          const inProgressMeal = await InProgressMealModel.get()
    
          setInProgress(!!inProgressMeal)
        }
    
        load()
      }, [isFocused])

    const componentRoutes = [{
        name: '/',
        component: Feed,
        options:{
            tabBarLabel: 'Meals',
            tabBarIcon: ({ focused }) => (
                focused
                    ? (
                        <FoodSVG
                            width={40}
                            height={40}
                        />
                    )
                    : (
                        <FoodOutlineSVG
                            width={40}
                            height={40}
                            fill={'#bbb'}
                        />
                    )
            ),
        }
      }, {
        name: '/search',
        component: Search,
        options:{
            tabBarIcon: ({ focused }) => (
                focused
                    ? (
                        <SearchSVG
                            width={40}
                            height={40}
                        />
                    )
                    : (
                        <SearchOutlineSVG
                            width={40}
                            height={40}
                            fill={'#bbb'}
                        />
                    )
            ),
        }
    }, {
        name: '/cook',
        component: Cook,
        options:{
            tabBarBadge: inProgress,
            tabBarIcon: ({ focused }) => (
                focused
                    ? (
                        <RecipeSVG
                            width={40}
                            height={40}
                        />
                    )
                    : (
                        <RecipeOutlineSVG
                            width={40}
                            height={40}
                            fill={'#bbb'}
                        />
                    )
            ),
        }
    }, {
        name: '/activity',
        component: Activity,
        options:{
            tabBarIcon: ({ focused }) => (
                focused
                    ? (
                        <ActivitySVG
                            width={40}
                            height={40}
                        />
                    )
                    : (
                        <ActivityOutlineSVG
                            width={40}
                            height={40}
                            fill={'#bbb'}
                        />
                    )
            ),
        }
    },  {
        name: '/menu',
        component: MyMenu,
        options:{
            tabBarIcon: ({ focused }) => (
                focused
                    ? (
                        <HatSVG
                            width={40}
                            height={40}
                        />
                    )
                    : (
                        <HatOutlineSVG
                            width={40}
                            height={40}
                            fill={'#bbb'}
                        />
                    )
            ),
        }
      }]

    return (
        <Tab.Navigator
            initialRouteName='/'
            barStyle={{
                backgroundColor: 'white',//theme['color-primary-default'],
                borderTopColor: '#ddd',
                borderTopWidth: 2,
            }}
            activeColor='white'
            labeled={false}
            
        >
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
