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

import { Meal as IMeal } from '../../../constants/dummyData'

import Meal from './Meal'

const { statusBarHeight } = Constants;

console.disableYellowBox = true
// galio components
import {
  Block, Icon, NavBar, theme
} from 'galio-framework';
import Person from './Person';

const { width, height } = Dimensions.get('screen');

const MealCard = (meal: IMeal) => {
  const navigation = useNavigation()
    const [count, setCount] = React.useState(meal.likes)

    const onClick = () => {
        setCount(count + 1)
    }

    const isFavourited = (count - meal.likes) > 5
    
    return (
        <Block style={styles.container}>
            <Meal {...meal} />
        </Block>
  )
}

const styles = StyleSheet.create({
  container: {
    marginVertical: theme.SIZES.BASE * 1,
    paddingHorizontal: theme.SIZES.BASE / 2,

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
