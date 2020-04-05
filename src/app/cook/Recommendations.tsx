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

import { meals } from '../../constants/dummyData'

import { MealBox } from './MealBox'

const { width } = Dimensions.get('screen');

interface Props {
  onSelect: (name: string) => void
}

export const Recommendations = ({ onSelect }: Props)  => {
  return (
    <Block>
        <Block style={styles.content}>
            <Text category='h6' style={styles.heading}>
              Saved
            </Text>
            <Block style={styles.meals}>
            <ScrollView horizontal>
                {
                meals.map(meal => (
                    <MealBox
                      {...meal}
                      onClick={() => onSelect(meal.title)}
                    />
                ))
                }
            </ScrollView>
            </Block>
        </Block>
            
        <Block style={styles.content}>
            <Text category='h6' style={styles.heading}>
                Your menu
            </Text>
            <Block style={styles.meals}>
                <ScrollView horizontal>
                {
                    meals.map(meal => (
                    <MealBox
                        {...meal}
                        onClick={() => navigation.navigate('Cook')}
                    />
                    ))
                }
                </ScrollView>
            </Block>
        </Block>
    </Block>
  )
};

const styles = StyleSheet.create({
  content: {
    width,
    marginBottom: theme.SIZES.BASE * 2,
  },

  heading: {
    paddingHorizontal: theme.SIZES.BASE / 2,
    paddingTop: theme.SIZES.BASE / 2,
  },
  meals: {
    display: 'flex',
    flexDirection: 'row',
    width,
    overflow: 'scroll',
  },
});
