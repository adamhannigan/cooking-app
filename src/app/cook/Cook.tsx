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

import { Text, List, useTheme, Input, Button, ButtonGroup } from '@ui-kitten/components'

import { CameraView } from './Camera'
import { getMeal, Preparation } from './NewMeal'
import { CaptureImage } from './CaptureImage'

// galio components
import {
  Block, theme, Icon
} from 'galio-framework';

import TagItem, { Tag } from './components/TagItem'

const { width } = Dimensions.get('screen');

const styles = StyleSheet.create({
  header: {
    paddingTop: theme.SIZES.BASE,
    paddingHorizontal: theme.SIZES.BASE * 1.5,
    width,
  },
  content: {
    width: width,
    padding: theme.SIZES.BASE,
    display: 'flex',
    justifyContent: 'center',
  },
  bottomBar: {
    margin: 15,
    marginBottom: 25,
    display: 'flex',
    flexDirection: 'row',
  },
});

const Cook = props => {
  const kittenTheme = useTheme()
  const { navigate, isFocused, addListener, setOptions } = useNavigation()
  const [recipe, setRecipe] = React.useState<string>(null)
  const [tip, setTip] = React.useState<string>(null)
  const [meal, setMeal] = React.useState<Preparation>(null)

  const [photos, setPhotos] = React.useState<string[]>([])

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
  const onTipChange = text => setRecipe(text)

  const onDone = () => {
    // Add meal to list
    navigate('Tags')
  }

  const onSave = () => {
    // Add meal to list
    navigate('Home')
  }

  const onAddPhoto = (photo: string) => {
    console.log('Add photo', photo)
    setPhotos([
      ...photos,
      photo,
    ])
  }

  console.log('Hpthos length', photos.length)

  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <ScrollView style={{ flex: 1 }}>
        {
          meal && (
            <Block>
              <Block style={styles.content}>
                <Text category='h6' status='info' style={{ marginVertical: theme.SIZES.BASE }}>
                  Photos
                </Text>
                <ScrollView
                  horizontal
                  decelerationRate={0}
                  snapToInterval={width / 4 * 3}
                  snapToAlignment={"center"}
                >
                  {
                    photos.map(photo => (
                      <CaptureImage
                        photo={photo}
                        onPhotoCaptured={() => {}}
                      />
                    ))
                  }
                  <CaptureImage
                    photo={null}
                    onPhotoCaptured={onAddPhoto}
                  />
                </ScrollView>
              </Block>

              <Block style={styles.header}>
                <Block>
                  <Input
                    label='Recipe URL'
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
                  <Input
                    label='Do you have a special tip?'
                    labelStyle={{
                      color: 'black',
                      marginTop: theme.SIZES.BASE,
                      fontSize: 14,
                      fontWeight: 'normal'
                    }}
                    multiline={true}
                    textStyle={{ minHeight: 64 }}
                    autoCapitalize='none'
                    placeholder='What is your tip for this recipe?'
                    value={recipe}
                    onChangeText={onTipChange}
                    icon={() => 
                      <Icon
                          name='bulb1'
                          size='small'
                          family={"AntDesign"}
                      />
                    }
                  />
                </Block>
              </Block>
            </Block>
            )
          }
      </ScrollView>
      <Block style={styles.bottomBar}>
        <Button
            size='medium'
            status='primary'
            appearance='ghost'
            onPress={onSave}
            style={{flex: 1}}
          >
            Save for later
          </Button>
          <Button
            size='medium'
            status='info'
            onPress={onDone}
            disabled={photos.length === 0}
            style={{flex: 1}}
          >
            Next
          </Button>
        </Block>
    </View>
  )
};


export default Cook;
