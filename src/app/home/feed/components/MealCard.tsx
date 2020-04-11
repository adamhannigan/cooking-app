import React from 'react';
import {
  StyleSheet,
  Dimensions,
} from 'react-native';

import { Meal as IMeal } from '../../../../constants/dummyData'

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
          <Meal {...meal} />
        </Block>
  )
}

const styles = StyleSheet.create({
  container: {
    width: width,
  },
  
  text: {
    fontWeight: 'bold',
    padding: theme.SIZES.BASE / 2,
  }
});

export default MealCard;
