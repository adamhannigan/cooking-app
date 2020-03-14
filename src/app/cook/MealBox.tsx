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
            <Text category='s1' numberOfLines={2}>
                {meal.title}
            </Text>
        </Block>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    padding: 10,
    width: width / 3,
  },
  image: {
    height: width / 3 - 10,
  },
});
