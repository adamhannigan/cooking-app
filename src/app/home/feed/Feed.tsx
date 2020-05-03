import React from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Dimensions,
} from 'react-native';


import { useTheme, Text, Button } from '@ui-kitten/components'


// galio components
import {
  Block, Icon, NavBar, theme,
} from 'galio-framework';

import { useRoute, useIsFocused, useNavigation } from '@react-navigation/native'

import { NavProp } from 'Navigation'

import { sortedMeals } from '../../../constants/dummyData'

import MealCard from './components/MealCard'
import AvatarHeader from './components/AvatarHeader'
import MealSummary from 'app/profile/components/MealSummary'

import MealBoardIcon from 'app/home/activity/assets/menu-board.svg'

const { width, height } = Dimensions.get('screen');

const Feed = props => {
  const [isFocused, setIsFocused ] = React.useState<boolean>(false)
  const [notInterested, setNotInterested ] = React.useState<string[]>([])
  const kittenTheme = useTheme()
  const navigation = useNavigation()
  const route = useRoute()
  
  const onNotInterested = (name: string) => {
    setNotInterested([
      ...notInterested,
      name,
    ])
  }

  React.useEffect(() => {
    const focus = async () => {
      await new Promise(r => setTimeout(r, 500))

      setIsFocused(true)

      setNotInterested([])
    }

    focus()
  }, [route])

  // Filter out any meals they do not want to see tonight
  const interesedMeals = sortedMeals.filter(group => !notInterested.includes(group.tag.name))

  return (
    <View style={{ flex: 1, ...styles.container }}>
      <ScrollView style={{ flex: 1 }}>
        <Block center style={{ marginTop: - theme.SIZES.BASE * 2 }}>
          <Block flex style={styles.header}>
            {
              interesedMeals.map((group) => (
                  <Block>
                    {/*}
                    <Block style={styles.tagHeader}>
                      <Text category='h3'>{group.tag.name}</Text>
                      <Button
                          appearance='ghost'
                          onPress={() => onNotInterested(group.tag.name)}
                        >
                          Not interested
                      </Button>
                    </Block>
                    */}
                    {
                      group.meals.map((meal, idx) => (
                          idx % 2 === 0 ? (
                            <Block style={styles.item}>
                              <AvatarHeader
                                avatarUrl=''
                                name={meal.user.name}
                                time='10 hrs ago'
                                userId={meal.user.id}
                              />
                              <MealCard
                                {...meal}
                                secondaryTag={meal.preferences.find(pref => pref.name !== group.tag.name).name}
                              />
                            </Block>
                          )
                          : idx % 2 === 1 && (
                              <Block style={styles.item}>
                                <Block style={styles.mealAddedContainer}>
                                  <MealBoardIcon width={30} height={30} />
                                  <Text
                                      category='h6'
                                      status='info'
                                    >
                                      {`${meal.user.name}'s menu`}
                                  </Text>
                                  <MealBoardIcon width={30} height={30} />
                                </Block>

                                <AvatarHeader
                                  avatarUrl=''
                                  name={meal.user.name}
                                  time='10 hrs ago'
                                  userId={meal.user.id}
                                />
                                <MealSummary {...meal}/>
                              </Block>
                          )
                      ))
                    }
                  </Block>
                )
              )
            }
          </Block>
        </Block>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
  },
  header: {
    borderTopLeftRadius: theme.SIZES.BASE * 2,
    borderTopRightRadius: theme.SIZES.BASE * 2,
    paddingVertical: theme.SIZES.BASE * 2,
    width,
    paddingBottom: theme.SIZES.BASE * 3,
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
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderColor: '#e3e3e3',
  },
  fab: {
    position: 'absolute',
  },
});

export default Feed;
