import React from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Dimensions,
} from 'react-native';

import { useNavigation } from '@react-navigation/native'

import { Input, Button } from '@ui-kitten/components'

import { Meal } from 'constants/dummyData'
import { InProgressMealModel } from 'domain/inProgressMeals/model'

// galio components
import {
  Block, theme
} from 'galio-framework';


import OrDivider from './components/OrDivider'

import AddIngredients from './components/AddYourOwnIngredients';
import AddSteps from './components/AddSteps';
import { NavProp } from 'Navigation'

export { CookHeaderButton } from './CookHeaderButton'
const { width } = Dimensions.get('screen');

const styles = StyleSheet.create({
  content: {
    width: width,
    padding: theme.SIZES.BASE,
  },
  bottomBar: {
    padding: theme.SIZES.BASE,
    paddingBottom: theme.SIZES.BASE * 2,
    display: 'flex',
    flexDirection: 'row',
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    backgroundColor: '#f0f0f0',
  },
});


const Recipe: React.FC = ({
}) => {
  const [recipe, setRecipe] = React.useState<string>(null)
  const [ingredients, setIngredients] = React.useState<Meal['ingredients']>(null)
  const [steps, setSteps] = React.useState<Meal['steps']>(null)

  const onRecipeChange = text => setRecipe(text)

  const { navigate } = useNavigation<NavProp>()

  React.useEffect(() => {
    const loadMeal = async () => {
        const inProgressMeal = await InProgressMealModel.get()

        setRecipe(inProgressMeal.recipe)
        setIngredients(inProgressMeal.ingredients)
        setSteps(inProgressMeal.steps.length && inProgressMeal.steps)
    }

    loadMeal()
  }, [])

  const onSave = async () => {
    const meal = await InProgressMealModel.get()

    const hasIngredients = ingredients && (ingredients.photo || ingredients.items)

    await InProgressMealModel.save({
      ...meal,
      recipe,
      steps: steps
        ? steps.filter(Boolean)
        : [],
      ingredients: hasIngredients && {
        photo: ingredients.photo,
        // Remove the null
        items: ingredients.items.filter(Boolean)
      }
    } as Meal)

    navigate('/cook/progress')
  }
  
  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <ScrollView style={{ flex: 1 }}>
        <Block style={styles.content}>
            <Input
                label='Add a link to the recipe'
                autoCapitalize='none'
                labelStyle={{
                    color: 'black',
                    fontSize: 16,
                    fontWeight: 'normal'
                }}
                placeholder={`www.creamy-chic...`}
                value={recipe}
                onChangeText={onRecipeChange}
                textStyle={{
                    fontSize: 18,
                }}
            />

            <OrDivider backgroundColor='white' />

            <AddIngredients
                ingredients={ingredients || undefined}
                onChange={setIngredients}
            />

            <AddSteps
                steps={steps || undefined}
                onChange={setSteps}
            />
            
        </Block>
      </ScrollView>
      <Block style={styles.bottomBar}>
          <Button
            size='medium'
            status='info'
            onPress={onSave}
            style={{flex: 1}}
          >
            Save
          </Button>
        </Block>
    </View>
  )
};

export default Recipe;
