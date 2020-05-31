import React from 'react';
import {
  Dimensions,
} from 'react-native';

import { useRoute, useNavigation } from '@react-navigation/native'

import { meals,  } from 'constants/dummyData'

import { Route } from 'Navigation';

import Cooker from './components/Cooker'
import { MealsModel, Meal } from 'domain/meals/model';
import { Spinner } from '@ui-kitten/components';

const Details = props => {
  const route = useRoute<Route<'/cook/details/:id'>>()
  const { setOptions } = useNavigation()

  const [meal, setMeal] = React.useState<Meal>()
  const [isLoading, setIsLoading] = React.useState(true)

  React.useEffect(() => {
    const load = async () => {
      const meal = await MealsModel.find(route.params.id)

      setOptions({
        title: meal.title,
      })

      setMeal(meal)

      setIsLoading(false)
    }

    load()
  }, [])

  if (isLoading) {
    return (
      <Spinner />
    )
  }
  
  return (
    <Cooker meal={meal} />
  )
};


export default Details;
