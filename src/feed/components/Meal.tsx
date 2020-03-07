import React from 'react';
import {
  Image,
  StatusBar,
  StyleSheet,
  ScrollView,
  View,
  Dimensions,
  TouchableOpacity
} from 'react-native';

import { Text, Avatar, Button } from '@ui-kitten/components'

import Constants from 'expo-constants';

import Tag from '../../onboard/Tag'

const { statusBarHeight } = Constants;

console.disableYellowBox = true
// galio components
import {
  Block, Icon, NavBar, theme
} from 'galio-framework';

const { width, height } = Dimensions.get('screen');

interface Card {
  title: string
  image: string
  action: string
  user: {
    name: string
  },
  preferences: string[]
  likes: number,
}
const Meal = (meal: Card) => {
    const [count, setCount] = React.useState(meal.likes)

    const onClick = () => {
        setCount(count + 1)
    }
    
  return (
        <Block style={styles.container}>
            <Block row space='between' style={styles.person}>
                <Block row>
                    <Avatar
                        style={styles.avatar}
                        source={{
                            uri: 'http://i.pravatar.cc/100?id=skater',
                        }}
                    />
                    <Block>
                        <Text category='label'>
                            {meal.user.name}
                        </Text>
                        <Text category='s1'>
                            {meal.action}
                        </Text>
                    </Block>
                </Block>
            </Block>
            <Image
                source={{ uri: meal.image }}
                style={styles.image}
            />
            <Block flex row style={styles.buttons}>
              <Button
                appearance='outline'
                style={styles.likeButton}
                status='warning'
                onPress={onClick}
                size='small'
                disabled={count >= 5}
              >
                {`${count} ♥️`}
              </Button>
              {
                count > 5 && (
                  <Block start row>
                    <Button
                      appearance='outline'
                      status='warning'
                      size='small'
                      style={styles.button}
                    >
                      Menu +
                    </Button>
                    <Button
                      appearance='outline'
                      status='basic'
                      size='small'
                      style={styles.button}
                    >
                      Bookmark +
                    </Button>
                </Block>
              )}
            </Block>
            <Block row>
              <Text category='h5'>
                  {meal.title}
              </Text>
            </Block>
            <Block row>
              <Text category='label'>
                  {meal.preferences}
              </Text>
            </Block>
            <Block row space='between' middle style={styles.metadata}>
              <Text category='label' appearance='hint'>
                    5 hrs ago
              </Text>
              <Button
                  appearance='ghost'
                  status='warning'
                  size='small'
                  style={styles.button}
                >
                  Recipe >
                </Button>
            </Block>
        </Block>
  )
}

const styles = StyleSheet.create({
  container: {
    marginVertical: theme.SIZES.BASE * 1,
    paddingLeft: theme.SIZES.BASE,

    backgroundColor: 'white',
    width,
    borderTopWidth: 1,
    borderTopColor: '#e3e3e3',
    borderBottomWidth: 1,
    borderBottomColor: '#e3e3e3',
  },
  person: {
    paddingTop: theme.SIZES.BASE,
    paddingBottom: theme.SIZES.BASE / 2,
  },
  avatar: {
      marginRight: 5,
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
    paddingRight: 0,
    paddingLeft: 0,
  },
  button: {
    marginRight: theme.SIZES.BASE,
    backgroundColor: 'white',
    alignSelf: 'flex-end',
  },
  image: {
    width: width,
    height: theme.SIZES.BASE * 10,
    marginLeft: -theme.SIZES.BASE,
    marginTop: theme.SIZES.BASE * 0.5,
  },
  metadata: {
    marginTop: -10,
  },
});

export default Meal;
