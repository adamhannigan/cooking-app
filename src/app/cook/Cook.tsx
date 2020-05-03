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

import { useNavigation } from '@react-navigation/native'
import * as ImagePicker from 'expo-image-picker'

import { Text, List, useTheme, Input, Button, ButtonGroup } from '@ui-kitten/components'

import { CameraView } from './Camera'
import { getMeal, Preparation } from './NewMeal'
import { CaptureImage } from './CaptureImage'

// galio components
import {
  Block, theme, Icon
} from 'galio-framework';

import OrDivider from './components/OrDivider'

import CameraSVG from './assets/camera.svg'
import IngredientsSVG from './assets/ingredients.svg'
import AddSteps from './AddYourOwnIngredients';

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
    height: 200,
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
  const { navigate, isFocused, addListener, setOptions } = useNavigation()
  const [recipe, setRecipe] = React.useState<string>(null)
  const [tip, setTip] = React.useState<string>(null)
  const [meal, setMeal] = React.useState<Preparation>(null)

  const [photo, setPhoto] = React.useState<string>(null)

  React.useEffect(() => {
    const loadMeal = () => {
      const meal = getMeal()
      console.log('Loaded', meal)
      setMeal(meal)

      // Navigation header
      setOptions({ title: meal.getTitle() })
    }

    addListener('focus', () => {
      console.log('On focus')
      loadMeal()
    })

    loadMeal()

    console.log('Focused changed')
  }, [isFocused])

  console.log('Redner cook')


  const onRecipeChange = text => setRecipe(text)

  const onDone = () => {
    // Add meal to list
    navigate('Tags')
  }

  const onSave = () => {
    // Add meal to list
    navigate('Home')
  }

  const onTakePhoto = async () => {

    console.log('Open it')
    //setIsTakingPhoto(true)
    let result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1
    });

    console.log('Result', result)
    setPhoto(result.uri)
  }

  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <ScrollView style={{ flex: 1 }}>
        <Block style={styles.content}>

        <Text category='h3'>
          Get Started
        </Text>
        {
          meal && (
            <Block>
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
                      fontSize: 14,
                      fontWeight: 'normal'
                    }}
                    placeholder={`www.${meal.getTitle().toLowerCase().substr(0, 10)}...`}
                    value={recipe}
                    onChangeText={onRecipeChange}
                    icon={() => 
                      <Icon
                          name='link'
                          size='small'
                          family={"AntDesign"}
                      />
                    }
              />

              <OrDivider backgroundColor='white' />

              <AddSteps />
            </Block>
            )
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
