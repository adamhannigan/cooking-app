import React from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';

import { Text, Spinner, Button } from '@ui-kitten/components'

// galio components
import {
  Block, theme
} from 'galio-framework';

import { MealBox } from './MealBox'
import { MealsModel, Meal } from 'domain/meals/model';
import MealSummary from 'app/profile/components/MealSummary';

const { width } = Dimensions.get('screen');

interface Props {
  onSelect: (meal: Meal) => void
  onCreateNew: () => void
  search: string
}

export const YourMenu = ({
  onSelect,
  onCreateNew,
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

  const filteredMeals = meals
    .filter(meal => meal.title.toLowerCase().includes(search.toLowerCase()))
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
                   filteredMeals
                      .map((meal, index) => (
                          <MealSummary
                            onClick={() => onSelect(meal)}
                            {...meal}
                          />
                    ))
                }

                {
                  !isLoading && filteredMeals.length === 0 && (
                    <TouchableOpacity
                          onPress={onCreateNew}
                          style={styles.item}
                    >
                      <Block style={styles.imagePlaceholder} />
                      <Block style={styles.contentPlaceholder} >
                        <Text category='h6' appearance='hint'>{`${search}...`}</Text>
                        <Button appearance='outline' status='basic' onPress={onCreateNew}>
                            Add now +
                        </Button>
                      </Block>

                    </TouchableOpacity>
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
    minHeight: 2000,
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
  item: {
      padding: theme.SIZES.BASE * 0.5,
      width: width - theme.SIZES.BASE * 2,
      marginLeft: theme.SIZES.BASE,
      marginBottom: theme.SIZES.BASE,
  
      borderRadius: 10,
  
      display: 'flex',
      flexDirection: 'row',
  
      shadowColor: "#ddd",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.4,
      shadowRadius: 5,
      
      elevation: 4,
  
      backgroundColor: 'white'
  },
  imagePlaceholder: {
    height: 100,
    width: 100,
    borderRadius: 10,
    backgroundColor: '#ddd',
  },
  contentPlaceholder: {
    flex: 1,
    paddingHorizontal: theme.SIZES.BASE,
    justifyContent: 'space-between'
  }
});

export default YourMenu
