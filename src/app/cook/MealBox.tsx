import React from 'react';
import {
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';

import { Text, Button } from '@ui-kitten/components'

import Constants from 'expo-constants';

// galio components
import {
  Block, theme, Icon
} from 'galio-framework';

import { Meal as IMeal } from '../../constants/dummyData'

const { width, height } = Dimensions.get('screen');

interface Meal extends IMeal {
  onClick: () => void
}

export const MealBox = (meal: Meal) => {
  return (
    <TouchableOpacity onPress={meal.onClick}>
        <Block style={styles.container}>
            <Image
                source={{ uri: meal.image }}
                style={styles.image}
            />
            <Text category='s1' style={styles.text}>
                {meal.title}
            </Text>
        </Block>
    </TouchableOpacity>
  )
}

// Want the meal to intersect with screen edge so they know to scroll
const mealWidth = width / 2.5
const styles = StyleSheet.create({
  container: {
    display: 'flex',
    padding: 10,
    width: mealWidth,
  },
  image: {
    height: mealWidth,
    borderRadius: 5,
  },
  text: {
    fontWeight: 'bold',
    lineHeight: 17,
    paddingTop: 2,
  }
});
