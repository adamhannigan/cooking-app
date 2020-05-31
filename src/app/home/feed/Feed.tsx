import React from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Dimensions,
  RefreshControl,
} from 'react-native';


import { Text, Spinner,  } from '@ui-kitten/components'

// galio components
import {
  Block, theme,
} from 'galio-framework';

import { useRoute, useIsFocused } from '@react-navigation/native'

import MealSummary from 'app/profile/components/MealSummary'
import MealBoardIcon from 'app/home/assets/menu.svg'

import MealCard from './components/MealCard'

import InProgressMeal from './components/InProgressMeal';
import { MealsModel, Meal } from 'domain/meals/model';

const { width, height } = Dimensions.get('screen');

const Feed = props => {
  const [meals, setMeals] = React.useState<Meal[]>([])
  const [isLoading, setIsLoading] = React.useState(true)
  const [error, setError] = React.useState(null)

  const isFocused = useIsFocused()

  const load = async () => {
    setIsLoading(true)
    try {
      const storedMeals = await MealsModel.getAll()
      setMeals(storedMeals)
    } catch (e) {
      setError(e)
    }

    setIsLoading(false)
  }

  React.useEffect(() => {
    load()
  }, [])


  return (
    <View style={{ flex: 1 }}>
      <ScrollView
        style={{ flex: 1 }}
        refreshControl={
          <RefreshControl refreshing={isLoading} onRefresh={load} />
        }>
          <Block flex style={styles.header}>
            {
              error && (
                <Text>
                  {`Error: ${error}`}
                </Text>
              )
            }
            {
              !isLoading && meals.length === 0 && (
                <Text>
                  No meals yet.
                </Text>
              )
            }
            {
              !isLoading && meals.map((meal, idx) => (
                  <Block style={styles.item}>
                    <MealCard
                      {...meal}
                    />
                  </Block>
                )
              )
            }
          </Block>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    borderTopLeftRadius: theme.SIZES.BASE * 2,
    borderTopRightRadius: theme.SIZES.BASE * 2,
    width,
  },
  tagHeader: {
    padding: theme.SIZES.BASE / 2,
    marginBottom: theme.SIZES.BASE,

    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    
    backgroundColor: 'white',

    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#e3e3e3',
  },
  title: {
    paddingTop: theme.SIZES.BASE,
    paddingBottom: theme.SIZES.BASE,
  },
  item: {
    marginBottom: theme.SIZES.BASE * 2,
    marginTop: theme.SIZES.BASE,

    backgroundColor: 'white',

    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderColor: '#e3e3e3',
  },
  mealAddedContainer: {
    paddingHorizontal: theme.SIZES.BASE,
    paddingVertical: theme.SIZES.BASE / 2,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: '#e3e3e3',
  },
  fab: {
    position: 'absolute',
  },
});

export default Feed;
