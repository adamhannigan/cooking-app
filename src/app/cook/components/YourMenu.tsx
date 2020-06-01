import React from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Image,
  Dimensions,
} from 'react-native';

import { Text, Spinner } from '@ui-kitten/components'

// galio components
import {
  Block, theme
} from 'galio-framework';

import { MealBox } from './MealBox'
import { MealsModel, Meal } from 'domain/meals/model';

const { width } = Dimensions.get('screen');

interface Props {
  onSelect: (meal: Meal) => void
  search: string
}

export const YourMenu = ({
  onSelect,
  search,
}: Props)  => {
  const [meals, setMeals] = React.useState<Meal[]>([])
  const [isLoading, setIsLoading] = React.useState(true)
  const [error, setError] = React.useState(null)

  React.useEffect(() => {
    const load = async () => {
      try {
        const meals = await MealsModel.getAll()

        setMeals(meals)
      } catch(e) {
        setError(e)
      }

      setIsLoading(false)
    }

    load()
  }, [search])
  return (
    <Block>
        <Block style={styles.group}>
            <Block style={styles.meals}>
                {
                  isLoading && (
                    <Spinner />
                  )
                }
                {
                  error && (
                    <Text>
                      {`Error: ${error}`}
                    </Text>
                  )
                }
                {
                    meals
                      .filter(meal => meal.title.toLowerCase().includes(search.toLowerCase()))
                      .map((meal, index) => (
                        <MealBox
                            {...meal}
                            size='large'
                            onClick={() => onSelect(meal)}
                            isFromMenu={index % 3 === 0}
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
    minHeight: 2000,
    marginBottom: theme.SIZES.BASE / 2,

    backgroundColor: 'white',
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