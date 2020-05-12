import React from 'react';
import {
  Dimensions,
} from 'react-native';

import { useRoute, useNavigation } from '@react-navigation/native'

import { meals, Meal } from 'constants/dummyData'

import { Route } from 'Navigation';

import Cooker from './components/Cooker'
const Details = props => {
  const route = useRoute<Route<'/cook/details/:id'>>()
  const { setOptions } = useNavigation()

  const matchedMeal = meals.find(meal => !!route.params && route.params.id === meal.id)

  React.useEffect(() => {
    if (matchedMeal) {
      setOptions({
          title: matchedMeal.title,
      })
    }
  }, [])
  
  return (
    <Cooker meal={matchedMeal} />
  )
};


export default Details;
