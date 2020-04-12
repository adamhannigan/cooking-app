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
  title: {
    paddingTop: theme.SIZES.BASE,
  },
  content: {
    width: width,
    padding: theme.SIZES.BASE,
    display: 'flex',
    justifyContent: 'center',
  },
  imageContainer: {
    width: '100%',
    height: 255, 
    borderRadius: 10,
  },
  takePhotoContainer: {
    width: '100%',
    borderWidth: 2,
    borderRadius: 5,
    borderStyle: 'dashed',
    borderColor: 'grey',
    paddingHorizontal: theme.SIZES.BASE,
  },
  captureButton: {
    height: 85,
    width: 85,
    borderRadius: 50,
    position: 'absolute',
    left: '50%',
    top: '50%',
    marginLeft: -25,
    marginTop: -38,

    shadowOffset:{  width: 3,  height: 5,  },
    shadowColor: '#777',
    shadowOpacity: 0.3,
  },
  testButton: {
    position: 'absolute',
    bottom: 25,
    right: 25,
    height: 50,
    width: 50,
    borderRadius: 50,     
  },
  removeButton: {
    position: 'absolute',
    bottom: 25,
    right: 85,
    height: 50,
    width: 50,
    borderRadius: 50,  
  },
  buttonIcon: {
    width: 50,
    height: 50,
    padding: 10,
    fontSize: 30,
  },
  removeIcon: {
    width: 50,
    height: 50,
    padding: 10,
    fontSize: 30,
  },
  bottomBar: {
    margin: 15,
    marginBottom: 25,
  },
  tagHeading: {
    marginVertical: theme.SIZES.BASE,
  }
});

const Cook = props => {
  const kittenTheme = useTheme()
  const { navigate, isFocused, addListener, setOptions } = useNavigation()
  const [isTakingPhoto, setIsTakingPhoto] = React.useState(false)
  const [photo, setPhoto] = React.useState<string>(null)
  const [ingredientPhoto, setIngredientPhoto] = React.useState<string>(null)
  const [recipe, setRecipe] = React.useState<string>(null)
  const [tip, setTip] = React.useState<string>(null)

  const [meal, setMeal] = React.useState<Preparation>(null)

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
  const onTakePhoto = () => {
    setIsTakingPhoto(true)
    setPhoto(null)
  }

  const onPhoto = (uri: string) => {
    setIsTakingPhoto(false)
    setPhoto(uri)
  }

  const onRemovePhoto = () => {
    setPhoto(null)
  }

  const onCameraClose = () => {
    setIsTakingPhoto(false)
  }

  const onAddRecipe = () => {

  }

  const onAddTags = () => {
    navigate('Tags')
  }

  const onRecipeChange = text => setRecipe(text)
  const onTipChange = text => setRecipe(text)

  const onDone = () => {
    // Add meal to list
    navigate('/')
  }

  if (isTakingPhoto) {
    return (
      <CameraView
        onPhotoTaken={onPhoto}
        onBack={onCameraClose}
      />
    )
  }

  return (
    <View style={{ flex: 1 }}>
      <ScrollView style={{ flex: 1 }}>
        {
          meal && (
            <Block>
              <Block style={styles.content}>
                <Text category='s1'>Take a photo of your meal.</Text>
                {
                  !photo && (
                    <Block style={styles.takePhotoContainer}>
                      <CookingSVG
                        width={width - theme.SIZES.BASE * 4 }
                        height={250}
                      />
                      <Button
                        onPress={onTakePhoto}
                        style={styles.captureButton}
                        icon={() => 
                          <Icon
                              name='camera'
                              color='white'
                              family={"AntDesign"}
                              style={styles.buttonIcon}
                          />
                        }
                      />
                    </Block>
                  )
                }
                {
                  photo && [
                    <Image
                        source={{ uri: photo }}
                        style={styles.imageContainer}
                    />,
                    <Button
                      style={{
                        ...styles.removeButton,
                      }}
                      status='danger'
                      onPress={onRemovePhoto}
                      icon={() => 
                        <Icon
                            name='delete'
                            color='white'
                            family={"AntDesign"}
                            style={styles.buttonIcon}
                        />
                      }
                    />,
                    <Button
                      style={styles.testButton}
                      onPress={onTakePhoto}
                      icon={() => 
                        <Icon
                            name='camera'
                            color='white'
                            family={"AntDesign"}
                            style={styles.buttonIcon}
                        />
                      }
                    />
                  ]
                }
              </Block>

              <Block row style={styles.content}>
                {
                  !ingredientPhoto && (
                    <Block style={{
                      width: width/2 - theme.SIZES.BASE * 2,
                      marginRight: theme.SIZES.BASE,
                    }}>
                      <Text category='s1'>Photo of ingredients.</Text>
                      <Block style={styles.takePhotoContainer}>
                        <IngredientSVG
                          width={width / 2 - theme.SIZES.BASE * 4 }
                          height={125}
                        />
                        <Button
                          onPress={onTakePhoto}
                          style={{
                            ...styles.captureButton,
                            width: 45,
                            height: 45,
                            marginLeft: 3,
                            marginTop: -20,
                          }}
                          icon={() => 
                            <Icon
                                name='camera'
                                color='white'
                                family={"AntDesign"}
                                style={{
                                  ...styles.buttonIcon,
                                  fontSize: 25,
                                  padding: 13,
                                }}
                            />
                          }
                        />
                      </Block>
                    </Block>
                  )
                }
                {
                  photo && [
                    <Image
                        source={{ uri: photo }}
                        style={styles.imageContainer}
                    />,
                  ]
                }
                {
                  !ingredientPhoto && (
                    <Block style={{
                      width: width/2 - theme.SIZES.BASE * 2,
                      marginLeft: theme.SIZES.BASE,
                    }}>
                      <Text category='s1'>Photo of dirty dishes.</Text>
                      <Block style={styles.takePhotoContainer}>
                        <DirtySVG
                          width={width / 2 - theme.SIZES.BASE * 3 }
                          height={125}
                        />
                        <Button
                          onPress={onTakePhoto}
                          style={{
                            ...styles.captureButton,
                            width: 45,
                            height: 45,
                            marginLeft: 3,
                            marginTop: -20,
                          }}
                          icon={() => 
                            <Icon
                                name='camera'
                                color='white'
                                family={"AntDesign"}
                                style={{
                                  ...styles.buttonIcon,
                                  fontSize: 25,
                                  padding: 13,
                                }}
                            />
                          }
                        />
                        </Block>
                    </Block>
                  )
                }
                {
                  photo && [
                    <Image
                        source={{ uri: photo }}
                        style={styles.imageContainer}
                    />,
                  ]
                }
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
                    label='Tip'
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
            onPress={onDone}
          >
            Done
          </Button>
        </Block>
    </View>
  )
};


export default Cook;
