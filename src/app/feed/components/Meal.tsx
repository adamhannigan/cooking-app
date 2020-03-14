import React from 'react';
import {
  Image,
  StyleSheet,
  Dimensions,
} from 'react-native';

import { Text, Button } from '@ui-kitten/components'

import Constants from 'expo-constants';

// galio components
import {
  Block, theme, Icon
} from 'galio-framework';

const { width, height } = Dimensions.get('screen');

interface Meal {
  title: string
  image: string
  action: string
  preferences: string[]
  likes: number,
}
const Meal = (meal: Meal) => {
    const [count, setCount] = React.useState(meal.likes)

    const onClick = () => {
        setCount(count + 1)
    }

    const isFavourited = (count - meal.likes) > 5
    
  return (
        <Block>
            <Image
                source={{ uri: meal.image }}
                style={styles.image}
            />
            <Block row style={styles.content}>
              <Block style={styles.left} space='between'>
                <Block>
                  <Block row>
                    <Text category='h4' numberOfLines={2}>
                        {meal.title}
                    </Text>
                  </Block>

                  <Block row>
                    <Text category='s1'>
                        {meal.preferences && meal.preferences.join(' • ')}
                    </Text>
                  </Block>
                  <Block row end style={styles.description}>
                    <Text category='s1' appearance='hint'>
                        Easy peasy lemon squeezy!
                    </Text>
                  </Block>
                </Block>
                <Block row style={styles.metadata}>
                  <Text category='label' appearance='hint'>
                        5 hrs ago
                  </Text>
                </Block>
              </Block>
            <Block style={styles.right} space='between'>
              <Block>
                  <Button
                    appearance='outline'
                    style={styles.likeButton}
                    status='primary'
                    onPress={onClick}
                    size='small'
                    disabled={isFavourited}
                  >
                    {`${count} ♥️`}
                  </Button>
                  {
                  isFavourited && (
                    <Block start>
                      <Button
                        appearance='outline'
                        style={styles.likeButton}
                        status='success'
                        size='small'
                      >
                        Menu +
                      </Button>
                      <Button
                        appearance='outline'
                        status='primary'
                        size='small'
                        style={styles.likeButton}
                      >
                        Save
                      </Button>
                  </Block>
                )}
                </Block>
                <Button
                    appearance='ghost'
                    status='primary'
                    size='small'
                    style={styles.button}
                  >
                    Recipe
                </Button>
              </Block>
            </Block>
          </Block>
  )
}

const styles = StyleSheet.create({
  container: {
    marginVertical: theme.SIZES.BASE * 1,
    paddingLeft: theme.SIZES.BASE,

    backgroundColor: 'white',
    width: width - (theme.SIZES.BASE * 2),
    borderTopWidth: 1,
    borderTopColor: '#e3e3e3',
    borderBottomWidth: 1,
    borderBottomColor: '#e3e3e3',
  },
  description: {
    paddingVertical: theme.SIZES.BASE / 3,
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
    width: width,
    height: theme.SIZES.BASE * 10,
    marginLeft: -theme.SIZES.BASE,
  },
  metadata: {
  },
  right: {
    width: 80,
  },
  left: {
    flex: 1,

  },
});

export default Meal;
