import React from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Dimensions,
} from 'react-native';


import { Text, Spinner } from '@ui-kitten/components'

// galio components
import {
  Block, theme,
} from 'galio-framework';

import { useRoute, useIsFocused } from '@react-navigation/native'

import MealSummary from 'app/profile/components/MealSummary'
import MealBoardIcon from 'app/home/assets/menu.svg'

import MealCard from './components/MealCard'
import AvatarHeader from './components/AvatarHeader'

import InProgressMeal from './components/InProgressMeal';
import { MealsModel, Meal } from 'domain/meals/model';

const { width, height } = Dimensions.get('screen');

const Feed = props => {
  const [meals, setMeals] = React.useState<Meal[]>([])
  const [isLoading, setIsLoading] = React.useState(true)
  const [error, setError] = React.useState(null)

  const isFocused = useIsFocused()

  React.useEffect(() => {
    if (isFocused) {
      const load = async () => {
        try {
          const storedMeals = await MealsModel.getAll()
          console.log('Use meals', storedMeals)
          setMeals(storedMeals)
        } catch (e) {
          setError(e)
        }

        setIsLoading(false)
      }

      load()
    }
  }, [isFocused])

  return (
    <View style={{ flex: 1 }}>
      <ScrollView style={{ flex: 1 }}>
          <Block flex style={styles.header}>
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
              meals.length === 0 && (
                <Text>
                  No meals yet.
                </Text>
              )
            }
            {
              meals.map((meal, idx) => (
                  idx % 2 === 0 ? (
                    <Block style={styles.item}>
                      <AvatarHeader
                        avatarUrl=''
                        name={meal.createdBy.username}
                        time='10 hrs ago'
                        userId={meal.createdBy.id}
                      />
                      <MealCard
                        {...meal}
                      />
                    </Block>
                  )
                  : idx % 2 === 1 && (
                      <Block style={styles.item}>
                        <Block style={styles.mealAddedContainer}>
                          <MealBoardIcon width={30} height={30} />
                          <Text
                              appearance='hint'
                              style={{
                                marginLeft: theme.SIZES.BASE,
                              }}
                            >
                              Recommended from their menu
                          </Text>
                        </Block>

                        <AvatarHeader
                          avatarUrl=''
                          name={meal.createdBy.username}
                          time='10 hrs ago'
                          userId={meal.createdBy.id}
                        />
                        <MealSummary {...meal}/>
                      </Block>
                  )
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
