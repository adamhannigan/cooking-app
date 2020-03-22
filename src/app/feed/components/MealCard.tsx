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

const { width, height } = Dimensions.get('screen');

const MealCard = (meal: IMeal) => {
    return (
        <Block style={styles.container}>
            <Meal {...meal} />
        </Block>
  )
}

const styles = StyleSheet.create({
  container: {
    marginVertical: theme.SIZES.BASE * 1,

    width: width,
    padding: theme.SIZES.BASE / 2,


    shadowOffset:{  width: 5,  height: 3,  },
    shadowColor: '#777',
    shadowOpacity: 0.1,
  },
});

export default MealCard;
