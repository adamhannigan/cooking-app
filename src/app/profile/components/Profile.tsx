import React from 'react';
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

import { Text, Avatar, Button } from '@ui-kitten/components'
import { useNavigation } from '@react-navigation/native'

import { NavProp } from 'Navigation'

import Constants from 'expo-constants';

import MealBoardIcon from 'app/home/assets/menu.svg'


import { people } from 'constants/dummyData'
import MealSummary from './MealSummary'


// galio components
import {
  Block, Icon, NavBar, theme, Input,
} from 'galio-framework';

import { meals } from 'constants/dummyData'
import { LikeModel } from 'domain/likes/model';
import { InProgressMealModel } from 'domain/inProgressMeals/model';
import { MealsModel } from 'domain/meals/model';
const { width, height } = Dimensions.get('screen');

interface Props {
  id: number
  isCurrentUser?: boolean
}

const Menu = ({ id, isCurrentUser }: Props) => {
  const navigation = useNavigation<NavProp>()
  
  const person = people.find(user => user.id === id)

  const onClick = (id: number) => {
    navigation.navigate('/meal/:id', {
      id,
    })
  }
  
  // HACK to go back to start of onboarding
  const onBackToStart = () => {
    LikeModel.reset()
    InProgressMealModel.clear()
    MealsModel.clear()
    
    navigation.navigate('Preferences')

  }

  return (
    <View style={{ flex: 1 }}>
      <ScrollView style={{ flex: 1 }}>
        <Block style={{ marginTop: - theme.SIZES.BASE * 2 }}>
          <Block center flex style={styles.header}>
            <TouchableOpacity onPress={onBackToStart}>
              <Avatar
                  style={styles.avatar}
                  source={{
                      uri: 'http://i.pravatar.cc/100?id=skater',
                  }}
              />
            </TouchableOpacity>
            <Text category='h4'>
              {person.name}
            </Text>
            <Text category='h4' >
              🐔🍖🍅
            </Text>
            <Text category='p' >
              Lets go, cook some meat!
            </Text>
            <Block style={styles.stats}>
              <Block center>
                <Text category='h5' >
                222
                </Text>
                <Text category='s2' >
                  Followers
                </Text>
              </Block>
              <Block center>
                <Text category='h5' >
                  34
                </Text>
                <Text category='s2' >
                  Meals
                </Text>
              </Block>
              <Block center>
                <Text category='h5' >
                800
                </Text>
                <Text category='s2' >
                  Drools
                </Text>
              </Block>
            </Block>
          </Block>
        </Block>
          
        <Block>
          <Block row middle space='between'  style={styles.menuTitle}>
            <Block row middle>
              <MealBoardIcon
                width={35}
                height={35}
                style={{
                  marginRight: theme.SIZES.BASE,
                }}
              />
              <Text category='h4'>
                Menu
              </Text>
            </Block>
            <Text appearance='hint' >
              {`${meals.length} menu items`}
            </Text>
          </Block>
          <Block>
            {
              meals.map(card => (
                <TouchableOpacity
                onPress={() => onClick(card.id)}
                style={styles.item}
                key={card.id}
              >
                  <MealSummary {...card}/>
                </TouchableOpacity>
              ))
            }
          </Block>
          {
            isCurrentUser && (
              <Button
                size='medium'
                status='primary'
                style={styles.addMenuButton}
              >
                Edit your menu
              </Button>
            )
          }
        </Block>

        <Block>
        <Block row middle space='between'  style={styles.menuTitle}>
            <Text category='h4'>
              Recent Activity
            </Text>
          </Block>
            <Block>
              {
                meals.map(card => (
                  <TouchableOpacity onPress={() => onClick(card.id)} style={styles.item}>
                    <MealSummary {...card}/>
                  </TouchableOpacity>
                ))
              }
            </Block>
          </Block>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    paddingTop: theme.SIZES.BASE * 4,
    paddingBottom: theme.SIZES.BASE * 1,

    backgroundColor: 'white',
    width,
    borderBottomWidth: 1,
    borderBottomColor: '#e3e3e3',
  },
  avatar: {
    width: 100,
    height: 100,
  },
  title: {
    paddingTop: theme.SIZES.BASE,
    paddingBottom: theme.SIZES.BASE,
  },
  stats: {
    paddingTop: theme.SIZES.BASE * 2,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width,
  },
  meal: {
      backgroundColor: 'white',
      marginBottom: theme.SIZES.BASE,
  },
  addMenuButton: {
    margin: theme.SIZES.BASE,
  },
  mealTitle: {
      flex: 0,
      width: width - theme.SIZES.BASE * 12,
      overflow: 'hidden',
  },
  menuTitle: {
    margin: theme.SIZES.BASE,
  },
  image: {
    width: theme.SIZES.BASE * 5,
    height: theme.SIZES.BASE * 5,
  },
  item: {
    backgroundColor: 'white',
    marginBottom: theme.SIZES.BASE,

    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderColor: '#e3e3e3',
  }
});

export default Menu;
