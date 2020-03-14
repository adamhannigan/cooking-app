import * as React from 'react';
import { BottomNavigation } from 'react-native-paper';

import {
    Block, Text, Icon, NavBar, theme
} from 'galio-framework';

import { useTheme } from '@ui-kitten/components'


import Feed from '../feed/Feed'
import Activity from '../activity/Activity'
import MyMenu from '../myMenu/MyMenu'
import Search from '../search/Search'

const routes = [
    { key: 'meals', title: 'Meals', icon: 'silverware-fork-knife' },
    { key: 'search', title: 'Search', icon: 'feature-search-outline' },
    { key: 'activity', title: 'Activity', icon: 'heart-outline' },
    { key: 'menu', title: 'Menu', icon: 'book-open' },
]

const scene = BottomNavigation.SceneMap({
    meals: Feed,
    search: Search,
    activity: Activity,
    menu: MyMenu,
});

const Home = () => {
    const [index, setIndex] = React.useState<number>(0)
    const theme = useTheme()

    return (
        <BottomNavigation
            navigationState={{ index, routes }}
            onIndexChange={index => setIndex(index)}
            renderScene={scene}
            labeled
            barStyle={{ backgroundColor: theme['color-primary-default'] }}
            activeColor='white'
            inactiveColor='#f4f4f4'
        />
    )
}

export default Home
