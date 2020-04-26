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


import drool from 'app/home/feed/components/assets/drool.gif'
import Chef from 'app/home/activity/assets/chef.svg'


// galio components
import {
  Block, theme
} from 'galio-framework';

import { meals, Meal } from '../../constants/dummyData'

import { MealBox } from './MealBox'
import { DroolModel } from 'domain/drools/model';

const { width } = Dimensions.get('screen');

interface Props {
  onSelect: (meal: Meal) => void
}

export const Recommendations = ({ onSelect }: Props)  => {
  const [droolingMeals, setDroolingMeals] = React.useState<Meal[]>([])

  React.useEffect(() => {
    console.log('Recommended!')
    const loadDrools = async () => {
      const meals = await DroolModel.getDrools()
      setDroolingMeals(meals)
    }

    loadDrools()
  }, [])

  return (
    <Block>
        <Block style={styles.group}>
          <Block style={styles.header}>
            <Text category='h6' style={styles.heading} status='info'>
                Recently Cooked
            </Text>
            <Chef
                width={25}
                height={25}
            />
          </Block>
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
          <Block style={styles.header}>
            <Text category='h6' style={styles.heading} status='info'>
                Drooling over
            </Text>
            <Image
                source={drool}
                style={styles.drool}
            />
          </Block>
            
            <Block style={styles.meals}>
                {
                    droolingMeals.map(meal => (
                      <MealBox
                          {...meal}
                          size='large'
                          onClick={() => onSelect(meal)}
                      />
                    ))
                }
                {
                    droolingMeals.length === 0 && (
                      <Text category='s1' appearance='hint'>
                        You have not drooled over any meals yet
                      </Text>
                    )
                }
            </Block>
        </Block>
    </Block>
  )
};

const styles = StyleSheet.create({
  group: {
    width,
    backgroundColor: 'white',
    marginBottom: theme.SIZES.BASE / 2,

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
  drool: {
    width: 30,
    position: 'relative',
    top: -2,
    height: 35,
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    height: 40,
    paddingTop: 10,
  }
});
