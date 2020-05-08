import React from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Dimensions,
  Image,
} from 'react-native';

import CookingSVG from './assets/cooking.svg'
import IngredientSVG from './assets/HealthyFood_02.svg'
import DirtySVG from './assets/dirty.svg'

import { useNavigation, useRoute } from '@react-navigation/native'
import * as ImagePicker from 'expo-image-picker'

import { Text, useTheme, Input, Button, ButtonGroup } from '@ui-kitten/components'

import { meals, Meal } from 'constants/dummyData'

// galio components
import {
  Block, theme, Icon
} from 'galio-framework';

import OrDivider from './components/OrDivider'

import CameraSVG from './assets/camera.svg'
import AddIngredients from './AddYourOwnIngredients';
import AddSteps from './AddSteps';
import { Route } from 'Navigation';

export { CookHeaderButton } from './CookHeaderButton'
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

const Cook = props => {
  const kittenTheme = useTheme()
  const route = useRoute<Route<'/cook/:id?'>>()
  const { navigate, isFocused, addListener, setOptions } = useNavigation()

  const [recipe, setRecipe] = React.useState<string>(null)
  const [title, setTitle] = React.useState<string>(null)
  const [meal, setMeal] = React.useState<Meal>(null)

  const [photo, setPhoto] = React.useState<string>(null)
  const [isMenuItem, setIsMenuItem] = React.useState<boolean>(true)

  const matchedMeal = meals.find(meal => !!route.params && route.params.id === meal.id)

  React.useEffect(() => {
    const loadMeal = () => {

      if (matchedMeal) {
        setRecipe(matchedMeal.recipe)

        // Navigation header
        setOptions({ title: matchedMeal.title })
      } else {
        setRecipe(null)
        setOptions({ title: '' })
      }

      setMeal(matchedMeal)
    }

    addListener('focus', () => {
      loadMeal()
    })

    loadMeal()

  }, [isFocused])


  const onRecipeChange = text => setRecipe(text)

  const onTitleChange = text => {
    setOptions({ title: text.nativeEvent.text })
    setTitle(text)
  }

  const onDone = () => {
    // Add meal to list
    navigate('Tags')
  }

  const onSave = () => {
    // Add meal to list
    navigate('/')
  }

  const onTakePhoto = async () => {

    console.log('Open it')
    await ImagePicker.requestCameraPermissionsAsync()
    
    //setIsTakingPhoto(true)
    let result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 1
    });

    console.log('Result', result)
    if (!result.cancelled) {
      setPhoto(result.uri)
    }
  }

  const onToggleMenuItem = () => {
    setIsMenuItem(!isMenuItem)
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
                    onChange={onTitleChange}
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
                    icon={() => 
                      <Icon
                          name='link'
                          size='small'
                          family={"AntDesign"}
                      />
                    }
                    textStyle={{
                      fontSize: 18,
                    }}
              />

              <OrDivider backgroundColor='white' />

              <AddIngredients
                initialIngredients={matchedMeal && matchedMeal.ingredients}
              />

              <AddSteps
                initialSteps={matchedMeal && matchedMeal.steps}
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
            onPress={onSave}
            style={{flex: 1}}
          >
            Save and close
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


export default Cook;
