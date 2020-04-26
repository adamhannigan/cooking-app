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

interface Props extends IMeal {
  onClick: () => void
  size?: 'medium' | 'large'
}

const PADDING = 10

export const MealBox = ({
  onClick,
  size = 'medium',
  ...meal
}: Props) => {
  const mealWidth = size === 'medium'
    ? (width / 2.5) - PADDING * 2
    : (width / 2) - PADDING * 2

  return (
    <TouchableOpacity onPress={onClick}>
        <Block style={{
          ...styles.container,
          meal: mealWidth,
        }}>
            <Image
                source={{ uri: meal.image }}
                style={{
                  ...styles.image,
                  height: mealWidth,
                  width: mealWidth,
                }}
            />
            <Text
              category='s1'
              style={{
                ...styles.text,
                width: mealWidth,
              }}
              numberOfLines={2}
            >
                {meal.title}
            </Text>
        </Block>
    </TouchableOpacity>
  )
}

// Want the meal to intersect with screen edge so they know to scroll
const styles = StyleSheet.create({
  container: {
    display: 'flex',
    padding: PADDING,
  },
  image: {
    borderRadius: 5,
  },
  text: {
    fontWeight: 'bold',
    lineHeight: 17,
    paddingTop: 2,
    overflow: 'hidden',
    width: '100%',
  }
});
