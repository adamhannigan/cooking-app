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

// galio components
import {
  Block, theme, Icon
} from 'galio-framework';

const { width, height } = Dimensions.get('screen');

const Meal = (meal: IMeal) => {
    const [likes, setLikes] = React.useState(meal.likes)
    const [isSaved, setIsSaved] = React.useState(false)

    const kittenTheme = useTheme()

    const onFavourite = () => {
      setIsSaved(true)

      BookmarkModel.addMeal(meal)
    }

    const onAddToMenu = () => {
        // Reset for testing
        setLikes(meal.likes)
    }

    const userLikes = (likes - meal.likes)
    const isFavourited = userLikes >= 3

    const onLike = () => {
      setLikes(likes + 1)
    }

    return (
        <Block style={styles.actions}>
            <TouchableOpacity onPress={onLike} disabled={isFavourited}>
                <Block row>
                    <Block style={styles.icon}>
                        <Icon
                            name='hearto'
                            color={kittenTheme['color-danger-default']}
                            family={"AntDesign"} size={25}
                        />
                        <Icon
                            name='heart'
                            color={kittenTheme['color-danger-default']}
                            family={"AntDesign"} size={25}
                            style={{
                                ...styles.heart,
                                height: userLikes * 8,
                            }}
                        />
                    </Block>
                </Block>
            </TouchableOpacity>
            {
                isFavourited && [
                <TouchableOpacity onPress={onFavourite}>
                    <Block style={styles.icon}>
                        <Icon
                            name={isSaved ? 'star' : 'staro'}
                            color={kittenTheme['color-primary-default']}
                            family={"AntDesign"} size={25}
                            
                        />
                    </Block>
                </TouchableOpacity>,
                /*<TouchableOpacity onPress={onAddToMenu}>
                    <Block style={styles.icon}>
                        <Icon
                            name='filetext1'
                            color={kittenTheme['color-info-default']}
                            family={"AntDesign"} size={25}
                        />
                    </Block>
                </TouchableOpacity>*/
            ]}
        </Block>
    )
}

const styles = StyleSheet.create({
icon: {
    marginRight: 5,
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 25,

    shadowOffset:{  width: 5,  height: 3,  },
    shadowColor: '#777',
    shadowOpacity: 0.3,
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
});

export default Meal;
