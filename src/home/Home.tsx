import * as React from 'react';
import { BottomNavigation } from 'react-native-paper';

import {
    Block, Text, Icon, NavBar, theme
} from 'galio-framework';

import Feed from '../feed/Feed'

const AlbumsRoute = () => <Text>Albums</Text>;

const RecentsRoute = () => <Text>Recents</Text>;

const routes = [
    { key: 'feed', title: 'Feed', icon: 'queue-music' },
    { key: 'albums', title: 'Login', icon: 'album' },
    { key: 'recents', title: 'Register', icon: 'history' },
]

const scene = BottomNavigation.SceneMap({
    feed: Feed,
    albums: AlbumsRoute,
    recents: RecentsRoute,
});

const Home = () => {
  const [index, setIndex] = React.useState<number>(0)

    return (
        <BottomNavigation
            navigationState={{ index, routes }}
            onIndexChange={index => setIndex(index)}
            renderScene={scene}
        />
    )
}

export default Home