import React from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Image,
  Dimensions,
} from 'react-native';

import { Text } from '@ui-kitten/components'
import { useNavigation } from '@react-navigation/native'


import MealBoardIcon from 'app/home/activity/assets/menu-board.svg'


// galio components
import {
  Block, theme
} from 'galio-framework';

import { meals, Meal } from '../../../constants/dummyData'

import { MealBox } from './MealBox'
import { DroolModel } from 'domain/drools/model';

const { width } = Dimensions.get('screen');

interface Props {
  onSelect: (meal: Meal) => void
}

export const YourMenu = ({
  onSelect,
}: Props)  => {
  return (
    <Block>
        <Block style={styles.group}>
          <Block style={styles.header}>
            <Text category='h6' style={styles.heading} status='info'>
                Choose from your menu
            </Text>
            <MealBoardIcon
                width={25}
                height={25}
            />
          </Block>
            <Block style={styles.meals}>
                {
                    meals.map(meal => (
                    <MealBox
                        {...meal}
                        size='large'
                        onClick={() => onSelect(meal)}
                    />
                    ))
                }
            </Block>
        </Block>
    </Block>
  )
};

const styles = StyleSheet.create({
  group: {
    width,
    marginBottom: theme.SIZES.BASE / 2,

    backgroundColor: 'white',
    borderTopWidth: 1,
    borderTopColor: '#e3e3e3',
    borderBottomWidth: 1,
    borderBottomColor: '#e3e3e3',
  },

  heading: {
    paddingHorizontal: theme.SIZES.BASE / 2,
  },
  meals: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    width,
    overflow: 'scroll',
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    height: 40,
    paddingTop: 10,
  }
});

export default YourMenu