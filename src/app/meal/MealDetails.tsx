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
import {
    useNavigation,
    useRoute,
    RouteProp,
    NavigationProp
} from '@react-navigation/native'

import Constants from 'expo-constants';

import { Route } from 'Navigation'

const { statusBarHeight } = Constants;

// galio components
import {
  Block, Icon, NavBar, theme, Input,
} from 'galio-framework';

import { meals } from 'constants/dummyData'
import Meal from 'app/feed/components/Meal';
const { width, height } = Dimensions.get('screen');

const MealDetails = () => {
  const navigation = useNavigation()
  const route = useRoute<Route<'/meal/:id'>>()

  const meal = meals.find(meal => meal.id === route.params.id)

  React.useEffect(() => {
    navigation.setOptions({
      title: meal.title,
    })
  }, [])
  console.log('Go meal', meal)
  
  return (
    <View style={{ flex: 1 }}>
      <ScrollView style={{ flex: 1 }}>
        <Block style={{ marginTop: statusBarHeight }}>
          <Text>hello</Text>
            <Meal {...meal} />
        </Block>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    paddingTop: theme.SIZES.BASE * 4,
    paddingBottom: theme.SIZES.BASE * 1,
    paddingHorizontal: theme.SIZES.BASE,

    backgroundColor: 'white',
    width,
    borderBottomWidth: 1,
    borderBottomColor: '#e3e3e3',
  },
});

export default MealDetails;
