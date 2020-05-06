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

import OrDivider from './components/OrDivider'

import IngredientsSVG from './assets/ingredients.svg'
import StepsSVG from './assets/steps.svg'

export { CookHeaderButton } from './CookHeaderButton'
const { width } = Dimensions.get('screen');

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
  step: {
      marginTop: theme.SIZES.BASE * 2,
  },
  addAnotherStep: {
      marginVertical: theme.SIZES.BASE,
  },
  image: {
      width: '100%',
      height: 200,
  }
});

const AddSteps = props => {
  const [ingredientPhoto, setIngredientPhoto] = React.useState<string>(null)
  const [ingredients, setIngredients] = React.useState<string[]>([null])
  
  // Currently, we are just storing image steps
  const [steps, setSteps] = React.useState<string[]>([null])

  const onTakePhoto = async () => {
    //setIsTakingPhoto(true)
    let result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1
    });

    console.log('Result', result)
    setIngredientPhoto(result.uri)
  }

  const onTakeStepPhoto = async (stepIndex: number) => {
    let result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1
    });

    const newSteps = [...steps]
    newSteps[stepIndex] = result.uri

    setSteps(newSteps)
  }

  const onAddStep = () => {
      setSteps([
          ...steps,
          null,
      ])
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
                            uri: ingredientPhoto
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

        {
            steps.map((photo, index) => (
                <Block style={styles.step}>
                    <Text category='h5' status='info'>
                        {`Step ${index + 1}`}
                    </Text>

                    <Block style={styles.imageContainer}>
                        {
                            photo && (
                                <Image
                                    source={{
                                        uri: photo
                                    }}
                                    style={styles.image}
                                />
                            )
                        }
                        {
                            !photo && [
                                <StepsSVG
                                    width={100}
                                    height={100}
                                    style={{
                                        marginTop: theme.SIZES.BASE,
                                    }}
                                />,
                                <Button
                                    appearance='outline'
                                    status='basic'
                                    onPress={() => onTakeStepPhoto(index)}
                                    style={{
                                        marginTop: theme.SIZES.BASE,
                                        marginBottom: theme.SIZES.BASE,
                                    }}
                                >
                                    Take a photo of the step
                                </Button>,
                            ]
                        }
                        
                    </Block>

                    <Input
                        multiline={true}
                        placeholder='Describe the step...'
                        textStyle={{
                            minHeight: 64,
                        }}
                    />
                </Block>
            ))
        }

        <Button
            style={styles.addAnotherStep}
            status='info'
            // Disable if last step is still empty
            disabled={!steps[steps.length - 1]}
            onPress={onAddStep}
        >
            Add another step +
        </Button>
    </Block>
  )
};


export default AddSteps;
