import React from 'react';

import { useRoute, useNavigation } from '@react-navigation/native'

import { Meal } from 'constants/dummyData'

import { Route } from 'Navigation';

import Cooker from './components/Cooker'
import { InProgressMealModel } from 'domain/inProgressMeals/model';

const InProgress = props => {
  const route = useRoute<Route<'/cook/progress'>>()
  const { setOptions } = useNavigation()

  const [meal, setMeal] = React.useState<Meal>(null)

  React.useEffect(() => {
    const loadMeal = async () => {
        const inProgressMeal = await InProgressMealModel.get()
        setMeal(inProgressMeal)

        setOptions({
            title: inProgressMeal.title,
        })
    }

    loadMeal()
  }, [])
  
  return (
    <Cooker meal={meal} />
  )
};


export default InProgress;
