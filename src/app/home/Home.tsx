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

import CameraSVG from './assets/camera.svg'
import CameraOutlineSVG from './assets/cameraIcon.svg'
import FoodSVG from './assets/food.svg'
import FoodOutlineSVG from './assets/foodOutline.svg'
import SearchSVG from './assets/search.svg'
import SearchOutlineSVG from './assets/searchOutline.svg'
import HatSVG from './assets/menu.svg'
import HatOutlineSVG from './assets/menuOutline.svg'
import ActivitySVG from './assets/speaker.svg'
import ActivityOutlineSVG from './assets/speakerOutline.svg'

import { InProgressMealModel } from 'domain/inProgressMeals/model';

// galio components
import {
    Block,
  } from 'galio-framework';

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
    const isFocused = useIsFocused()
    const route = useRoute()

    React.useEffect(() => {
        if (isFocused) {
            const load = async () => {
            const inProgressMeal = await InProgressMealModel.get()
        
            setInProgress(!!inProgressMeal)
            }
        
            load()
        }
      }, [isFocused])

    const componentRoutes = [{
        name: '/feed',
        component: Feed,
        options:{
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
                <Block style={{
                    borderWidth: 1,
                    borderColor: focused ? theme['color-primary-default'] : '#bbb',
                    padding: 10,
                    borderRadius: 50,
                    marginTop: -10,
                }}>
                    {
                        focused
                            ? (
                                <CameraSVG
                                    width={40}
                                    height={40}
                                />
                            )
                            : (
                                
                                    <CameraOutlineSVG
                                        width={40}
                                        height={40}
                                        fill={'#bbb'}
                                    />
                                
                            )

                    }
                </Block>
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
              componentRoutes.map(componentRoute => (<Tab.Screen {...componentRoute} />))
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
