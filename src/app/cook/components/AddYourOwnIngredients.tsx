import React from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Dimensions,
  Image,
  KeyboardAvoidingView,
} from 'react-native';

import * as ImagePicker from 'expo-image-picker'

import { Text, Input, Button } from '@ui-kitten/components'

// galio components
import {
  Block, theme
} from 'galio-framework';

import { Ingredients } from 'constants/dummyData'

import IngredientsSVG from '../assets/ingredients.svg'

import TakePhoto from './TakePhoto'

export { CookHeaderButton } from '../CookHeaderButton'

const styles = StyleSheet.create({
  imageContainer: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    backgroundColor: '#f0f0f0',

    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    marginTop: theme.SIZES.BASE,
    marginBottom: theme.SIZES.BASE,
  },
  addAnotherStep: {
      marginVertical: theme.SIZES.BASE,
  },
  image: {
      width: '100%',
      height: 400,
  }
});

interface Props {
    ingredients: Ingredients
    onChange: (ingredients: Ingredients) => void
}

const AddIngredients: React.FC<Props> = ({
    ingredients = {
        items: [null],
        photo: null,
    },
    onChange,
}) => {
  const onPhoto = (url?: string) => {
    onChange({
        ...ingredients,
        photo: url && {
            url,
        },
    })
  }

  const onChangeIngredient = (text: string, ingredientIndex: number) => {
      const newIngredients = [...ingredients.items]

      // Nullify if empty string
      const name = text || null
      newIngredients[ingredientIndex] = name

      onChange({
          ...ingredients,
          items: newIngredients,
      })
  }

  const onAddIngredient = () => {
    onChange({
        ...ingredients,
        items: [
            ...ingredients.items,
            null,
        ]
    })
  }

  console.log('Ingredients', ingredients)


  return (
    <Block>
        <Text category='h5' status='info'>
            Add your ingredients
        </Text>
        <TakePhoto
            photoUrl={ingredients.photo && ingredients.photo.url}
            onPhoto={onPhoto}
        />


        {
            ingredients && ingredients.items.map((ingredient, index) => (
                <Input
                    numberOfLines={3}
                    placeholder='Add the ingredient...'
                    style={{
                    }}
                    textStyle={{
                        fontSize: 18,
                    }}
                    value={ingredient}
                    onChangeText={(text) => onChangeIngredient(text, index)}
                />
            ))
        }

        <Button
            style={styles.addAnotherStep}
            status='info'
            onPress={onAddIngredient}
            disabled={!ingredients.items[ingredients.items.length - 1]}
        >
            Add another ingredient +
        </Button>
    </Block>
  )
};


export default AddIngredients;
