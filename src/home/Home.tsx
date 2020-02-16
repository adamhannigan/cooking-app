import * as React from 'react';
import { BottomNavigation } from 'react-native-paper';

import {
    Block, Text, Icon, NavBar, theme
} from 'galio-framework';

import Feed from '../feed/Feed'
import Chefs from '../chefs/Chefs'

const RecentsRoute = () => <Text>Recents</Text>;

const routes = [
    { key: 'feed', title: 'Feed', icon: 'queue-music' },
    { key: 'chefs', title: 'Chefs', icon: 'album' },
    { key: 'recents', title: 'Register', icon: 'history' },
]

const scene = BottomNavigation.SceneMap({
    feed: Feed,
    chefs: Chefs,
    recents: RecentsRoute,
});

const Home = () => {
  const [index, setIndex] = React.useState<number>(0)

    return (
        <BottomNavigation
            navigationState={{ index, routes }}
            onIndexChange={index => setIndex(index)}
            renderScene={scene}
            labeled
            barStyle={{ backgroundColor: 'orange' }}
            activeColor='white'
            inactiveColor='#f4f4f4'
        />
    )
}

export default Home