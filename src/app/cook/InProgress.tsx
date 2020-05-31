import React from 'react';

import { useNavigation, useIsFocused } from '@react-navigation/native'

import Cooker from './components/Cooker'
import { InProgressMealModel } from 'domain/inProgressMeals/model'
import { Meal } from 'domain/meals/model'

const InProgress = () => {
  const { setOptions } = useNavigation()

  const [meal, setMeal] = React.useState<Meal>(null)

  const isFocused = useIsFocused()

  React.useEffect(() => {
    if (isFocused) {
      setMeal(null)

      const loadMeal = async () => {
          const inProgressMeal = await InProgressMealModel.get()
          setMeal(inProgressMeal)

          setOptions({
              title: inProgressMeal.title,
          })
      }

      loadMeal()
    }
  }, [isFocused])

  if (!meal) {
    return null
  }

  return (
    <Cooker meal={meal} />
  )
};


export default InProgress;
