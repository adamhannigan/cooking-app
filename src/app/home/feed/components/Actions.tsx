import React from 'react';
import {
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';

import { useTheme } from '@ui-kitten/components'

import { BookmarkModel } from 'domain/bookmarks/model'
import { Meal as IMeal } from 'constants/dummyData'

import droolGif from './assets/drool.gif'
import droolFrame from './assets/droolFrame.gif'

// galio components
import {
  Block, theme, Icon
} from 'galio-framework';

const { width, height } = Dimensions.get('screen');

const Actions = (meal: IMeal) => {
    const [likes, setLikes] = React.useState(meal.likes)

    const userLikes = (likes - meal.likes)
    const isDrooled = userLikes >= 1

    const onLike = () => {
      setLikes(likes + 1)
    }

    const droolImage = isDrooled
        ? droolGif
        : droolFrame

    return (
        <Block style={styles.actions}>
            <TouchableOpacity onPress={onLike} disabled={isDrooled}>
                <Block row style={styles.shadow}>
                    <Block style={styles.icon}>
                        <Image
                            source={droolImage}
                            style={styles.drool}
                        />
                    </Block>
                </Block>
            </TouchableOpacity>
        </Block>
    )
}

const styles = StyleSheet.create({
icon: {
    marginRight: 5,
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 25,

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    height: 46,
    width: 46,

    shadowOffset:{  width: 5,  height: 3,  },
    shadowColor: '#777',
    shadowOpacity: 0.3,

    overflow: 'hidden',
},
shadow: {
    shadowOffset:{  width: 4,  height: 5,  },
    shadowColor: '#777',
    shadowOpacity: 0.6,
    shadowRadius: 4,
},
  heart: {
    position: 'absolute',
    left: 10,
    top: 10,
  },
  actions: {
    position: 'absolute',
    right: 0,
    top: -20,
    display: 'flex',
    flexDirection: 'row-reverse',
    justifyContent: 'space-between',
  },
  drool: {
      width: 35,
      height: 40,

      position: 'relative',
      top: 2,
  },
  star: {
    width: 37,
    height: 37,

},
});

export default Actions;
