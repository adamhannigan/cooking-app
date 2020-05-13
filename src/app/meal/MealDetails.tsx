import React from 'react';
import {
  Image,
  StatusBar,
  StyleSheet,
  ScrollView,
  View,
  Linking,
  Dimensions,
} from 'react-native';

import { Text, useTheme, Button } from '@ui-kitten/components'
import {
    useNavigation,
    useRoute,
    RouteProp,
    NavigationProp
} from '@react-navigation/native'

import Constants from 'expo-constants';

import { Route, NavProp } from 'Navigation'

import CryingSVG from './assets/crying.svg'

import Others from './Others'

const { statusBarHeight } = Constants;

// galio components
import {
  Block, Icon, NavBar, theme, Input,
} from 'galio-framework';

import { meals } from 'constants/dummyData'
import Meal from 'app/home/feed/components/Meal';

import InfoBlock from './components/InfoBlock'
import Steps from './components/Steps'
import IngredientList from './components/IngredientList'

const { width, height } = Dimensions.get('screen');

const MealDetails = () => {
  const navigation = useNavigation<NavProp>()
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

  const onCookIt = () => {
    navigation.navigate('/cook/details/:id', {
      id: meal.id,
    })
  }

  return (
    <View style={{ flex: 1 }}>
      <ScrollView style={{ flex: 1 }}>
        <Block>
            <Block style={styles.mealContainer}>
              <Meal {...meal} />
            </Block>

              <Button
                style={{ margin: theme.SIZES.BASE / 2 }}
                status='info'
                onPress={onCookIt}
              >
                Cook it tonight
              </Button>


            {
              meal.recipe && (
                <Text
                  style={{
                    marginHorizontal: theme.SIZES.BASE,
                    marginTop: theme.SIZES.BASE * 2,
                    fontSize: 14,
                  }}
                  onPress={onOpenRecipe}
                  status='info'
                  category='label'
                  numberOfLines={1}
                >
                  {meal.recipe}
                </Text>
              )
            }


            {
              meal.ingredients && (
                <IngredientList {...meal.ingredients} />
              )
            }
            
            {
              meal.steps.length > 0 && (
                <Steps steps={meal.steps} />
              )
            }

            {
              meal.steps.length === 0 && !meal.recipe && (
                <Block center middle style={{ marginTop: theme.SIZES.BASE }}>
                  <Text appearance='hint'>
                    No recipe has been added yet.
                  </Text>
                  <CryingSVG 
                    width={100}
                    height={100}
                  />
                </Block>
              )
            }

            
            {
              /*
              meal.recipe && (
                <TouchableOpacity >
                  <InfoBlock
                    title='Recipe'
                    icon='link'
                    text={meal.recipe}
                    status='info'
                  />
                </TouchableOpacity>
              )
              */
            }



            <Others />
            
        </Block>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  mealContainer: {
      backgroundColor: 'white',
      paddingTop: theme.SIZES.BASE,
      borderBottomWidth: 1,
      borderColor: '#ddd',
  }
});

export default MealDetails;
