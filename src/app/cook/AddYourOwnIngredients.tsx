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

import IngredientsSVG from './assets/ingredients.svg'

export { CookHeaderButton } from './CookHeaderButton'

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
    initialIngredients?: Ingredients
}

const AddIngredients: React.FC<Props> = ({
    initialIngredients,
}) => {
  const [ingredientPhoto, setIngredientPhoto] = React.useState<{ url: string }>(
    initialIngredients
        ? initialIngredients.photo
        : null
  )

  const [ingredients, setIngredients] = React.useState<string[]>(
    initialIngredients
        ? [...initialIngredients.items, null]
        : [null]
    )

  const onTakePhoto = async () => {
    //setIsTakingPhoto(true)
    let result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 1
    });

    if (!result.cancelled) {
        console.log('Result', result)
        setIngredientPhoto({
            url: result.uri,
        })
    }
  }

  const onChangeIngredient = (text: string, ingredientIndex: number) => {
      const newIngredients = [...ingredients]

      // Nullify if empty string
      const name = text || null
      newIngredients[ingredientIndex] = name

      setIngredients(newIngredients)
  }

  const onAddIngredient = () => {
    setIngredients([
        ...ingredients,
        null,
    ])
  }

  return (
    <Block>
        <Text category='h5' status='info'>
            Add your ingredients
        </Text>
        <Block style={styles.imageContainer}>
            
            {
                ingredientPhoto && (
                    <Image
                        source={{
                            uri: ingredientPhoto.url
                        }}
                        style={styles.image}
                    />
                )
            }
            {
                !ingredientPhoto && [
                    <IngredientsSVG
                        width={100}
                        height={100}
                        style={{
                            marginTop: theme.SIZES.BASE,
                        }}
                    />,
                    <Button
                        appearance='outline'
                        status='basic'
                        onPress={onTakePhoto}
                        style={{
                            marginTop: theme.SIZES.BASE,
                            marginBottom: theme.SIZES.BASE,
                        }}
                    >
                        Take a photo of your ingredients
                    </Button>
                ]
            }
        </Block>

        {
            ingredients.map((ingredient, index) => (
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
            // Disable if last ingredients is still empty
            disabled={!ingredients[ingredients.length - 1]}
            onPress={onAddIngredient}
        >
            Add another ingredient +
        </Button>
    </Block>
  )
};


export default AddIngredients;
