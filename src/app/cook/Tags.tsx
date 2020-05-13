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

import { Text, Avatar, Button } from '@ui-kitten/components'
import { useNavigation } from '@react-navigation/native'
import Constants from 'expo-constants';

import { getMeal, Preparation } from './components/NewMeal'

const { statusBarHeight } = Constants;


// galio components
import {
  Block, Icon, NavBar, theme
} from 'galio-framework';

import { tagGroups, meals } from 'constants/dummyData'
import { InProgressMealModel } from 'domain/inProgressMeals/model';
import { MealsModel } from 'domain/meals/model';

const { width, height } = Dimensions.get('screen');

const Preferences = () => {
  const [selected, setSelected] = React.useState<string[]>([])
  const { navigate, addListener } = useNavigation()

  const onSelect = (name: string) => {
    const alreadyExists = selected.includes(name)

    let newTags = []
    if (alreadyExists) {
      newTags = selected.filter(item => item !== name)
    } else {
      newTags = [...selected, name]
    }

    setSelected(newTags)
  }

  const onDone = async () => {
    const inProgressMeal = await InProgressMealModel.get()

    const meal = {
      ...inProgressMeal,
      preferences: selected.map(name => ({ name })),
    }

    await MealsModel.addFakeMeal(meal)

    await InProgressMealModel.clear()

    navigate('/')
  }

  return (
    <View style={{ flex: 1 }}>
      <ScrollView style={{ flex: 1 }}>
        <Block center style={{ marginTop: - theme.SIZES.BASE * 2 }}>
          <Block flex style={styles.header}>
            <Text category='h4' style={styles.title}>
              Select up to 2 tags.
            </Text>
            <Text category='p'>
              These tags will appear on your meal and help your friends find your meals.
            </Text>
          </Block>

          {
            tagGroups.map(group => (
              <Block style={styles.group}>
                  <Block>
                      <Text category='h5' style={styles.title}>
                        {group.name}
                      </Text>
                  </Block>
                  <Block style={styles.tags}>
                      {
                        group.items.map(item => {
                          const isSelected = selected.includes(item.name)

                          return (
                            <Button
                              style={{
                                ...styles.tag,
                                backgroundColor: isSelected ? '#fe9b0040' : 'white'
                              }}
                              appearance={'outline' }
                              status='primary'
                              onPress={() => onSelect(item.name)}
                              disabled={!isSelected && selected.length >= 2}
                            >
                                {`${item.name}${item.emoji || ''}`}
                              </Button>
                          )
                        })
                      }
                  </Block>
              </Block>
            ))
          }
        </Block>
      </ScrollView>
      <Block style={styles.bottomBar}>
          <Button
            status='primary'
            onPress={onDone}
          >
            Share
          </Button>
      </Block>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    paddingTop: theme.SIZES.BASE * 2,
    paddingBottom: theme.SIZES.BASE,
    paddingHorizontal: theme.SIZES.BASE,
    backgroundColor: 'white',
    width,
    borderBottomWidth: 1,
    borderBottomColor: '#e3e3e3',
  },
  group: {
    marginVertical: theme.SIZES.BASE * 1,
    paddingHorizontal: theme.SIZES.BASE,
    backgroundColor: 'white',
    width,
    paddingBottom: theme.SIZES.BASE,
    borderTopWidth: 1,
    borderTopColor: '#e3e3e3',
    borderBottomWidth: 1,
    borderBottomColor: '#e3e3e3',
  },
  bottomBar: {
      padding: theme.SIZES.BASE / 2,
      backgroundColor: 'white',
      borderTopWidth: 1,
      borderTopColor: '#e3e3e3',
      paddingBottom: 20,
  },
  tags: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  tag: {
    marginRight: theme.SIZES.BASE / 2,
    marginBottom: theme.SIZES.BASE / 2,
    borderRadius: 50,
  },
  title: {
    paddingTop: theme.SIZES.BASE,
    paddingBottom: theme.SIZES.BASE,
  },
});

export default Preferences;
