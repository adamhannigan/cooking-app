import React from 'react';
import {
  Image,
  StatusBar,
  StyleSheet,
  ScrollView,
  View,
  Linking,
  Dimensions,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';

import { Text, useTheme } from '@ui-kitten/components'
import {
    useNavigation,
    useRoute,
    RouteProp,
    NavigationProp
} from '@react-navigation/native'

import Constants from 'expo-constants';

import { Route } from 'Navigation'

import Others from './Others'

const { statusBarHeight } = Constants;

// galio components
import {
  Block, Icon, NavBar, theme, Input,
} from 'galio-framework';

import { meals } from 'constants/dummyData'
import Meal from 'app/home/feed/components/Meal';

import InfoBlock from './components/InfoBlock'

const { width, height } = Dimensions.get('screen');

const MealDetails = () => {
  const navigation = useNavigation()
  const route = useRoute<Route<'/meal/:id'>>()

  const meal = meals.find(meal => meal.id === route.params.id)

  const kittenTheme = useTheme()

  React.useEffect(() => {
    navigation.setOptions({
      title: meal.title,
    })
  }, [])
  
  const onOpenRecipe = () => {
    Linking.openURL(meal.recipe)
  }
  
  return (
    <View style={{ flex: 1 }}>
      <ScrollView style={{ flex: 1 }}>
        <Block>
            <Meal {...meal} />


            {
              meal.recipe && (
                <TouchableOpacity onPress={onOpenRecipe}>
                  <InfoBlock
                    title='Recipe'
                    icon='link'
                    text={meal.recipe}
                    status='info'
                  />
                </TouchableOpacity>
              )
            }

            {
              meal.tip && (
                <InfoBlock
                  title='Tip'
                  icon='bulb1'
                  text={meal.tip}
                />
              )
            }

            <Others />
            
        </Block>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
});

export default MealDetails;
