import React from 'react';
import {
  StyleSheet,
  Dimensions,
} from 'react-native';

import { Meal as IMeal } from '../../../constants/dummyData'

import Meal from './Meal'

// galio components
import {
  Block, theme
} from 'galio-framework';

import { Text, useTheme } from '@ui-kitten/components'

const { width } = Dimensions.get('screen');

const MealCard = (meal: IMeal) => {
    return (
        <Block style={styles.container}>
          <Block row middle space='between'>
            {
              meal.user && (
                <Text category='s1' style={styles.text} status='info'>
                  {meal.user.name}
                </Text>
              )
            }

            <Text category='s1'>
              {meal.preferences.map(p => p.emoji)}
            </Text>
          </Block>
          <Meal {...meal} />
        </Block>
  )
}

const styles = StyleSheet.create({
  container: {
    marginVertical: theme.SIZES.BASE * 1,
    paddingHorizontal: theme.SIZES.BASE / 2,

    width: width,
  },
  
  text: {
    fontWeight: 'bold',
    padding: theme.SIZES.BASE / 2,
  }
});

export default MealCard;
