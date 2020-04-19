import React from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Dimensions,
} from 'react-native';

import { Text } from '@ui-kitten/components'
import { useNavigation } from '@react-navigation/native'

// galio components
import {
  Block, theme
} from 'galio-framework';

import { meals, Meal } from '../../constants/dummyData'

import { MealBox } from './MealBox'

const { width } = Dimensions.get('screen');

interface Props {
  onSelect: (meal: Meal) => void
}

export const Recommendations = ({ onSelect }: Props)  => {
  return (
    <Block>
        <Block style={styles.group}>
            <Text category='h6' style={styles.heading} status='info'>
              Drools
            </Text>
            <Block style={styles.meals}>
            <ScrollView horizontal>
                {
                meals.map(meal => (
                    <MealBox
                      {...meal}
                      onClick={() => onSelect(meal)}
                    />
                ))
                }
            </ScrollView>
            </Block>
        </Block>
            
        <Block style={styles.group}>
            <Text category='h6' style={styles.heading} status='info'>
                Recently cooked
            </Text>
            <Block style={styles.meals}>
                <ScrollView horizontal>
                {
                    meals.map(meal => (
                    <MealBox
                        {...meal}
                        onClick={() => onSelect(meal)}
                    />
                    ))
                }
                </ScrollView>
            </Block>
        </Block>

        <Block style={styles.group}>
            <Text category='h6' style={styles.heading} status='info'>
                Recipe book
            </Text>
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
});
