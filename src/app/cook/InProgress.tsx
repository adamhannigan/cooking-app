import React from 'react';

import { useRoute, useNavigation, useIsFocused } from '@react-navigation/native'

import { Meal } from 'constants/dummyData'

import { Route } from 'Navigation';

import Cooker from './components/Cooker'
import { InProgressMealModel } from 'domain/inProgressMeals/model';

const InProgress = props => {
  const { setOptions } = useNavigation()

  const [meal, setMeal] = React.useState<Meal>(null)

  const isFocused = useIsFocused()

  React.useEffect(() => {
    setMeal(null)

    const loadMeal = async () => {
        const inProgressMeal = await InProgressMealModel.get()
        setMeal(inProgressMeal)

        setOptions({
            title: inProgressMeal.title,
        })
    }

    loadMeal()
  }, [isFocused])

  if (!meal) {
    return null
  }

  console.log('Got to cooked', meal)
  
  return (
    <Cooker meal={meal} />
  )
};


export default InProgress;
