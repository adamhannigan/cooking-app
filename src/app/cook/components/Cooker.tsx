import React from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Dimensions,
  Image,
} from 'react-native';

import { useNavigation, useRoute } from '@react-navigation/native'
import * as ImagePicker from 'expo-image-picker'

import { Text, Input, Button } from '@ui-kitten/components'

import { Meal } from 'constants/dummyData'
import { InProgressMealModel } from 'domain/inProgressMeals/model'

// galio components
import {
  Block, theme, Icon
} from 'galio-framework';

import OrDivider from './OrDivider'

import CameraSVG from '../assets/camera.svg'
import AddIngredients from './AddYourOwnIngredients';
import AddSteps from './AddSteps';

export { CookHeaderButton } from '../CookHeaderButton'
const { width } = Dimensions.get('screen');

const styles = StyleSheet.create({
  header: {
    paddingTop: theme.SIZES.BASE,
  },
  content: {
    width: width,
    padding: theme.SIZES.BASE,
  },
  checkboxContainer: {
    marginVertical: theme.SIZES.BASE,
  },
  imageContainer: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    backgroundColor: '#f0f0f0',

    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    marginTop: theme.SIZES.BASE,
    marginBottom: theme.SIZES.BASE * 4,
  },
  image: {
    width: '100%',
    height: 400,
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

interface Props {
    meal?: Meal
}

const Cooker: React.FC<Props> = ({
    meal,
}) => {
  const [recipe, setRecipe] = React.useState<string>(meal && meal.recipe)
  const [title, setTitle] = React.useState<string>(meal && meal.title)
  const [photo, setPhoto] = React.useState<string>()

  const onRecipeChange = text => setRecipe(text)

  const { navigate, setOptions } = useNavigation()

  const onTitleChange = title => {
    setOptions({ title })
    setTitle(title)
  }

  const onDone = async () => {
    await save()

    // Add meal to list
    navigate('/cook/tags')
  }


  const onTakePhoto = async () => {
    await ImagePicker.requestCameraPermissionsAsync()
    
    //setIsTakingPhoto(true)
    let result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 1
    });

    if (!result.cancelled) {
      setPhoto(result.uri)
    }
  }

  const save = async () => {
    await InProgressMealModel.save({
      image: photo,
      title: title,
      steps: [],
      ingredients: null,
      preferences: [],
      user: {
        id: 1,
        name: 'Adam Hannigan'
      },
      id: 2, // FAKE
      likes: 55,
    } as Meal)
  }

  const onSaveAndClose = async () => {
    await save()

    navigate('/')
  }
  
  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <ScrollView style={{ flex: 1 }}>
        <Block style={styles.content}>

        <Text category='h3'>
          Get Started
        </Text>

        {
            <Block>
              {
                !meal && (
                  <Input
                    multiline={true}
                    placeholder='Creamy...'
                    label='What did you cook?'
                    onChangeText={onTitleChange}
                    value={title}
                    style={{
                        marginTop: theme.SIZES.BASE * 2,
                    }}
                    labelStyle={{
                      color: 'black',
                      fontSize: 16,
                      fontWeight: 'normal'
                    }}
                    textStyle={{
                        minHeight: 64,
                        fontSize: 20,
                    }}
                />
                )
              }

                <Block style={styles.imageContainer}>
                  {
                    !photo && [
                      <CameraSVG
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
                          marginVertical: theme.SIZES.BASE,
                        }}
                      >
                        Take a photo of your meal
                      </Button>
                      ]
                }
                {
                  photo &&  (
                    <Image
                        source={{
                            uri: photo
                        }}
                        style={styles.image}
                    />
                )
                }
                </Block>
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
                initialIngredients={meal && meal.ingredients}
              />

              <AddSteps
                initialSteps={meal && meal.steps}
              />
            </Block>
          }
        </Block>

      </ScrollView>
      <Block style={styles.bottomBar}>
        <Button
            size='medium'
            status='info'
            appearance='ghost'
            onPress={onSaveAndClose}
            style={{flex: 1}}
          >
            Save for later
          </Button>
          <Button
            size='medium'
            status='info'
            onPress={onDone}
            disabled={!photo}
            style={{flex: 1}}
          >
            Next
          </Button>
        </Block>
    </View>
  )
};


export default Cooker;
