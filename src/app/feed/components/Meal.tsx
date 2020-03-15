import React from 'react';
import {
  Image,
  StyleSheet,
  Dimensions,
} from 'react-native';

import { Text, Button, useTheme } from '@ui-kitten/components'

import Constants from 'expo-constants';

import { BookmarkModel } from 'domain/bookmarks/model'
import { Meal as IMeal } from 'constants/dummyData'

import Person from './Person'

// galio components
import {
  Block, theme, Icon
} from 'galio-framework';
import { TouchableOpacity } from 'react-native-gesture-handler';

const { width, height } = Dimensions.get('screen');

const Meal = (meal: IMeal) => {
    const [likes, setLikes] = React.useState(meal.likes)
    const [isSaved, setIsSaved] = React.useState(false)

    const kittenTheme = useTheme()

    const onLike = () => {
        setLikes(likes + 1)
    }

    const onFavourite = () => {
      setIsSaved(true)

      BookmarkModel.addMeal(meal)
    }

    const onAddToMenu = () => {
      setLikes(likes + 1)
    }

    const userLikes = (likes - meal.likes)
    const isFavourited = userLikes >= 3
    
    return (
        <Block>
            <Block row style={styles.title}>
              <Text category='h4' numberOfLines={2}>
                  {meal.title}
              </Text>
            </Block>
            <Image
                source={{ uri: meal.image }}
                style={styles.image}
            />
            <Block style={styles.inset}>
              <Text category='h4'>
                {meal.preferences}
              </Text>
            </Block>
            <Block row style={styles.content}>
              <Block style={styles.left} space='between'>
                <Block>
                  {
                    meal.user && (
                      <Person {...meal} />
                    )
                  }

                  <Block row end style={styles.description}>
                    <Icon
                      name='clockcircleo'
                      color={kittenTheme['text-hint-color']}
                      family={"AntDesign"} size={20}
                      style={{ marginRight: 5 }}
                    />
                    <Text category='s1' appearance='hint'>
                        Under 30 min.
                    </Text>
                  </Block>
                </Block>
              </Block>
            <Block style={styles.actions}>
                  <TouchableOpacity onPress={onLike} disabled={isFavourited}>
                    <Block row>
                      <Text status='primary' style={styles.likeCount}>
                        {`${likes}`}
                      </Text>
                      <Block>
                        <Icon
                            //name={isFavourited ? 'heart' : 'hearto'}
                            name='hearto'
                            color={kittenTheme['color-info-default']}
                            family={"AntDesign"} size={25}
                        />
                        <Icon
                            name='heart'
                            color={kittenTheme['color-info-default']}
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
                        <Icon
                            name={isSaved ? 'star' : 'staro'}
                            color={kittenTheme['color-primary-default']}
                            family={"AntDesign"} size={25}
                          />
                      </TouchableOpacity>,
                      <TouchableOpacity>
                        <Icon
                            name='filetext1'
                            color={kittenTheme['color-primary-default']}
                            family={"AntDesign"} size={25}
                          />
                      </TouchableOpacity>
                  ]}
              </Block>
            </Block>
          </Block>
  )
}

const styles = StyleSheet.create({
  description: {
    paddingVertical: theme.SIZES.BASE / 3,
  },
  title: {
    marginTop: theme.SIZES.BASE / 2,
    marginBottom: theme.SIZES.BASE / 4,
  },
  inset: {
    backgroundColor: 'white',
    position: 'absolute',
    right: 0,
    top: 44, 
    borderBottomLeftRadius: 20,
  },

  heart: {
    position: 'absolute',
  },
  likeCount: {
    fontSize: 20,
    lineHeight: 25,
    marginRight: 5,
  },

  content: {
    marginTop: theme.SIZES.BASE / 2,
    paddingBottom: theme.SIZES.BASE / 2,
  },
  buttons: {
    marginTop: theme.SIZES.BASE,
    marginBottom: theme.SIZES.BASE,
    display: 'flex',
    justifyContent: 'space-between',
  },
  likeButton: {
    borderRadius: 50,
    width: 70,
    marginRight: theme.SIZES.BASE,
    backgroundColor: 'white',
    paddingRight: 0,
    paddingLeft: 0,
    marginBottom: 10,
  },
  button: {
    backgroundColor: 'white',
  },
  image: {
    height: theme.SIZES.BASE * 10,
    borderRadius: 10,
  },
  actions: {
    display: 'flex',
    alignItems: 'flex-end',
    height: 100,
    justifyContent: 'space-between'
  },
  left: {
    flex: 1,

  },
});

export default Meal;
