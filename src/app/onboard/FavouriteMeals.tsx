import React, { useEffect } from 'react';
import {
  Image,
  StatusBar,
  StyleSheet,
  ScrollView,
  View,
  Dimensions,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';

import API from '@aws-amplify/storage'

import { Text, Avatar, Button, Spinner } from '@ui-kitten/components'

import Constants from 'expo-constants';

const { statusBarHeight } = Constants;

// galio components
import {
  Block, Icon, NavBar, theme, Input,
} from 'galio-framework';

import { useNavigation } from '@react-navigation/native';
import { MealsModel, Meal } from 'domain/meals/model';
import { UserModel } from 'domain/users/model';

import S3Image from 'components/S3Image'

const { width, height } = Dimensions.get('screen');

const Menu = ({ }) => {
  const navigation = useNavigation()
  const [selected, setSelected] = React.useState<Meal[]>([])
  const [meals, setMeals] = React.useState<Meal[]>([])
  const [isLoading, setIsLoading] = React.useState(true)

  useEffect(() => {
    const load = async () => {
      const meals = await MealsModel.getAll()

      setMeals(meals)
      setIsLoading(false)
    }

    load()
  })

  const onNext = async () => {
    const menuItemPromises = selected.map(MealsModel.addToMenu)

    await Promise.all(menuItemPromises)

    navigation.navigate('/home', {
      screen: '/feed'
    })
  }

  const onSelect = (meal: Meal) => {
    const alreadyExists = selected.includes(name)

    if (alreadyExists) {
      setSelected(selected.filter(item => item.id !== meal.id))
    } else {
      setSelected([...selected, meal])
    }
  }

  return (
    <View style={{ flex: 1 }}>
      <ScrollView style={{ flex: 1 }}>
        <Block style={{ marginTop: - theme.SIZES.BASE * 2 }}>
          <Block flex style={styles.header}>
            <Text category='h4' style={styles.title}>
              What are your favourite meals?
            </Text>
            <Text category='p' style={styles.title}>
              Select your favourite meals to showcase in your personal menu. Others will be able to see your favourite meals.
            </Text>
          </Block>
        </Block>
        <Input
            placeholder="Input with Icon on right"
            right
            rounded
            icon="search1"
            family="antdesign"
            iconSize={14}
            iconColor="orange"
            style={styles.search}
          />
          <Block>
            {
              isLoading && (
                <Spinner />
              )
            }
            {
              meals.map(meal => {
                  const isSelected = selected.find(item => item.id === meal.id)

                  return (
                      <Block row style={styles.meal}>
                        <S3Image
                          s3Key={meal.image.file.key}
                          style={styles.image}
                        />
                        <Block style={styles.mealContent} flex row space='between'>
                            <Text category='h5' style={styles.mealTitle} numberOfLines={2}>
                                {meal.title}
                            </Text>
                            <Block center>
                                <Button
                                    appearance='outline'
                                    status='primary'
                                    onPress={() => onSelect(meal)}
                                    style={{
                                        backgroundColor: isSelected ? '#fe9b0040' : 'white'
                                    }}
                                >
                                    {
                                        isSelected
                                            ? 'Added'
                                            : 'Add'
                                    }
                                </Button>
                            </Block>
                        </Block>
                      </Block>
                  )
              })
            }
          </Block>
      </ScrollView>
      <Block style={styles.bottomBar}>
          <Button
            size='medium'
            appearance='ghost'
            status='primary'
            onPress={onNext}
          >
            Skip for now
          </Button>
          <Button
            size='medium'
            status='primary'
            onPress={onNext}
            disabled={selected.length === 0}
          >
            Next
          </Button>
      </Block>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    paddingTop: theme.SIZES.BASE * 2,
    paddingHorizontal: theme.SIZES.BASE,
    backgroundColor: 'white',
    width,
    borderBottomWidth: 1,
    borderBottomColor: '#e3e3e3',
  },
  bottomBar: {
      padding: theme.SIZES.BASE / 2,
      backgroundColor: 'white',
      borderTopWidth: 1,
      borderTopColor: '#e3e3e3',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between'
  },
  title: {
    paddingTop: theme.SIZES.BASE,
    paddingBottom: theme.SIZES.BASE,
  },
  meal: {
      backgroundColor: 'white',
      marginBottom: theme.SIZES.BASE,
  },
  mealTitle: {
      flex: 0,
      width: width - theme.SIZES.BASE * 12,
      overflow: 'hidden',
  },
  mealContent: {
      padding: theme.SIZES.BASE / 2,
  },
  image: {
    width: theme.SIZES.BASE * 5,
    height: theme.SIZES.BASE * 5,
  },
  search: {
    margin: theme.SIZES.BASE / 2,
    width: width - theme.SIZES.BASE,
  },
});

export default Menu;
