import React from 'react';
import {
  Image,
  StatusBar,
  StyleSheet,
  ScrollView,
  View,
  Dimensions,
  TouchableOpacity
} from 'react-native';

import { useNavigation } from '@react-navigation/native'
import { useTheme, Text, Button } from '@ui-kitten/components'

import FAB from 'react-native-fab'

// galio components
import {
  Block, Icon, NavBar, theme,
} from 'galio-framework';

import { useRoute, useIsFocused } from '@react-navigation/native'

import { NavProp } from 'Navigation'

import { sortedMeals } from '../../../constants/dummyData'

import MealCard from './components/MealCard'
import AvatarHeader from './components/AvatarHeader'
import MealSummary from '../myMenu/components/MealSummary';

const { width, height } = Dimensions.get('screen');

const Feed = props => {
  const navigation = useNavigation<NavProp>()
  const [isFocused, setIsFocused ] = React.useState<boolean>(false)
  const kittenTheme = useTheme()

  React.useEffect(() => {
    const focus = async () => {
      await new Promise(r => setTimeout(r, 500))

      setIsFocused(true)
    }

    focus()
  }, [])

  const onMealClick = (id: number) => {
    navigation.navigate('/meal/:id', {
      id,
    })
  }

  return (
    <View style={{ flex: 1, ...styles.container }}>
      <ScrollView style={{ flex: 1 }}>
        <Block center style={{ marginTop: - theme.SIZES.BASE * 2 }}>
          <Block flex style={styles.header}>
            {
              sortedMeals.map((group) => (
                  <Block>
                    <Block style={styles.tagHeader}>
                      <Text category='h3'>{group.tag.name}</Text>
                      <Button
                            appearance='ghost'
                          >
                          Not interested
                      </Button>
                    </Block>
                    {
                      group.meals.map((meal, idx) => (
                        <TouchableOpacity onPress={() => onMealClick(meal.id)}>
                          {
                            idx % 2 === 0 && (
                              <Block style={styles.item}>
                                <AvatarHeader
                                  avatarUrl=''
                                  name={meal.user.name}
                                  time='10 hrs ago'
                                />
                                <MealCard {...meal}/>
                              </Block>
                            )
                          }
                          {
                            idx % 2 === 1 && (
                              <Block style={styles.item}>
                                <Block center>
                                  <Text
                                      category='h1'
                                    >
                                     📖
                                  </Text>
                                  <Text
                                      category='h6'
                                    >
                                      On the menu
                                  </Text>
                                </Block>
                                <AvatarHeader
                                  avatarUrl=''
                                  name={meal.user.name}
                                  time='10 hrs ago'
                                />
                                <MealSummary {...meal}/>
                              </Block>
                            )
                          }
                        </TouchableOpacity>
                      ))
                    }
                  </Block>
                )
              )
            }
            
          </Block>
        </Block>
      </ScrollView>
      <FAB buttonColor={kittenTheme['color-primary-default']} iconTextColor="#FFFFFF" onClickAction={() => navigation.navigate('ChooseMeal')} visible={isFocused} iconTextComponent={
          (
            <Icon name='plus' family='AntDesign' size={30} />
          )
        }
      />
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
    borderBottomColor: '#e3e3e3',
  },
  fab: {
    position: 'absolute',
  },
});

export default Feed;
