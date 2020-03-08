import React from 'react';
import {
  Image,
  StatusBar,
  StyleSheet,
  ScrollView,
  View,
  Dimensions,
  TouchableOpacity,
} from 'react-native';

import { useNavigation } from '@react-navigation/native'

import { Text, Avatar, Button } from '@ui-kitten/components'

import Constants from 'expo-constants';

import Meal from './Meal'

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
  user?: {
    name: string
  },
  preferences: string[]
  likes: number,
}
const MealCard = (meal: Card) => {
  const navigation = useNavigation()
    const [count, setCount] = React.useState(meal.likes)

    const onClick = () => {
        setCount(count + 1)
    }

    const isFavourited = (count - meal.likes) > 5
    
  return (
        <Block style={styles.container}>
            {
              meal.user && (
                <TouchableOpacity onPress={() => navigation.navigate('MyMenu')}>
                  <Block row middle space='between' style={styles.person}>
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
                    <Icon name='right' color={theme.COLORS.MUTED} family='AntDesign' size={15} />
                </Block>
              </TouchableOpacity>
              )
            }
            <Meal {...meal} />
          </Block>
  )
}

const styles = StyleSheet.create({
  container: {
    marginVertical: theme.SIZES.BASE * 1,
    paddingLeft: theme.SIZES.BASE,

    backgroundColor: 'white',
    width: width,
    borderTopWidth: 1,
    borderTopColor: '#e3e3e3',
    borderBottomWidth: 1,
    borderBottomColor: '#e3e3e3',
  },
  person: {
    paddingTop: theme.SIZES.BASE,
    paddingBottom: theme.SIZES.BASE / 2,
    paddingRight: theme.SIZES.BASE / 2,
  },
  avatar: {
      marginRight: 5,
  },
});

export default MealCard;
