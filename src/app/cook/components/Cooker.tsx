import React from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Dimensions,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';

import { useNavigation, useRoute } from '@react-navigation/native'

import { Text, Input, Button, Avatar } from '@ui-kitten/components'

import { Media } from 'constants/dummyData'
import { InProgressMealModel } from 'domain/inProgressMeals/model'

// galio components
import {
  Block, theme,
} from 'galio-framework';

import TrophySVG from 'app/home/feed/components/assets/cup.svg'
import CryingSVG from 'app/meal/assets/crying.svg'

import Tags from 'app/home/feed/components/Tags'

import IngredientSVG from '../assets/ingredients.svg'
import TakePhoto from './TakePhoto';
import { NavProp } from 'Navigation';
import { MealsModel, Meal } from 'domain/meals/model';
import InProgressMeal from 'app/home/feed/components/InProgressMeal';

export { CookHeaderButton } from '../CookHeaderButton'
const { width } = Dimensions.get('screen');

const styles = StyleSheet.create({
  container: {
    width: width,
    padding: theme.SIZES.BASE,

    flex: 1,
    display: 'flex',
    alignItems: 'stretch',
  },
  bottomBar: {
    padding: theme.SIZES.BASE,
    paddingBottom: theme.SIZES.BASE * 2,
    display: 'flex',
    flexDirection: 'row',
    flex: 0,
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    backgroundColor: '#f0f0f0',
  },
  avatar: {
    marginRight: theme.SIZES.BASE,
  },
  stats: {
    marginTop: theme.SIZES.BASE * 3,
  }
});

interface Props {
    meal?: Meal
}

const Cooker: React.FC<Props> = ({
    meal,
}) => {
  const [photo, setPhoto] = React.useState<Media>(null)
  const [description, setDescription] = React.useState<string>(meal.description || '')

  const { navigate, setOptions } = useNavigation<NavProp>()

  React.useEffect(() => {
    const loadImage = async () => {
      const image = await InProgressMealModel.getPhoto()
      setPhoto(image)
    }

    loadImage()
  })

  const onDone = async () => {
    await MealsModel.create({
      title: meal.title,
      description,
      image: {
        file: {
          key: photo.s3Path,
        },
      },
    })

    await InProgressMealModel.clear()

    // Add meal to list
    navigate('/home', {
      screen: '/feed',
    })
  }

  const save = async () => {
    await InProgressMealModel.save({
      ...meal,
      image: {
        file: {
          key: photo.s3Path,
        },
      },
      description: description,
    } as Meal)
  }

  const onGoToRecipe = async () => {
    await save()

    navigate('/cook/recipe')
  }

  const onEditTags = async () => {
    await save()

    navigate('/cook/tags')
  }

  const hasRecipe = meal.recipe || (meal.steps && meal.steps.length > 0)

  const scrollViewRef = React.useRef<ScrollView>(null)
  
  const onFocus = () => {
    scrollViewRef.current.scrollTo(theme.SIZES.BASE * 12)
  }

  const tags = meal.tags
    ? meal.tags.map(( tag ) => ({ name: tag }))
    : []
  
  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS == "ios" ? "padding" : "height"}
    >
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <ScrollView style={{ flex: 1 }} ref={ref => scrollViewRef.current = ref}>
          <Block style={styles.container}>
            <Block>

              <TakePhoto
                photo={photo}
                onPhoto={setPhoto}
              />

              {
                !meal.id && (
                  <Block>
                    <Block row middle>
                      <TrophySVG
                        width={30}
                        height={30}
                        style={{
                          marginRight: theme.SIZES.BASE,
                        }}
                      />
                      <Text
                        appearance='hint'
                        style={{
                          flex: 1,
                        }}
                      >
                        Congratulations, this is your first time cooking {meal.title}.

                        What were your thoughts?
                      </Text>
                    </Block>
                  </Block>
                )
              }

              {
                meal.id && (
                  // TODO = check if it is off their own menu
                  <Block>
                    <Block row middle>
                      <Avatar
                          style={styles.avatar}
                          source={{
                              uri: 'http://i.pravatar.cc/100?id=skater',
                          }}
                      />
                      <Text
                        appearance='hint'
                        style={{
                          flex: 1,
                        }}
                      >
                        Inspired by {meal.createdBy.username}.

                        What were your thoughts?
                      </Text>
                    </Block>
                  </Block>
                )
              }

              <Input
                  placeholder='It was...'
                  multiline
                  style={{
                    flex: 1,
                    marginTop: theme.SIZES.BASE,
                    minHeight: 60,
                  }}
                  labelStyle={{
                    color: 'black',
                    fontSize: 16,
                    fontWeight: 'normal'
                  }}
                  textStyle={{
                      fontSize: 20,
                      minHeight: 80,
                  }}
                  onFocus={onFocus}
                  value={description}
                  onChangeText={setDescription}
              />

            </Block>

            <Block style={styles.stats}>
                <Block row space='between' middle style={{
                  marginBottom: theme.SIZES.BASE,
                  paddingBottom: theme.SIZES.BASE,
                  borderBottomWidth: 1,
                  borderBottomColor: '#f0f0f0'
                }}>
                  <Tags tags={tags} />
                  <Button
                    appearance='ghost'
                    style={{ marginRight: -theme.SIZES.BASE }}
                    onPress={onEditTags}
                  >
                    Change tags
                  </Button>
                </Block>
                {
                  hasRecipe && (
                    <Block row space='between' middle>
                      <Block row middle>
                        <IngredientSVG
                          width={25}
                          height={25}
                          style={{
                            marginRight: theme.SIZES.BASE / 2,
                          }}

                        />
                        <Text appearance='hint'>
                          Recipe included
                        </Text>
                      </Block>
                      <Button
                        style={{ marginRight: -theme.SIZES.BASE }}
                        appearance='ghost'
                        onPress={onGoToRecipe}
                      >
                        Change the recipe
                      </Button>
                    </Block>
                  )
                }

                {
                  !hasRecipe && (
                    <Block row space='between' middle>
                      <Block row middle>
                        <CryingSVG
                          width={25}
                          height={25}
                          style={{
                            marginRight: theme.SIZES.BASE / 2,
                          }}
                        />
                        <Text appearance='hint'>
                          No recipe has been added yet
                        </Text>
                      </Block>
                      <Button
                        appearance='outline'
                        onPress={onGoToRecipe}
                      >
                        Add a recipe
                      </Button>
                    </Block>
                  )
                }
          </Block>
        </Block>
      </ScrollView>
      <Block style={styles.bottomBar}>
          <Button
            size='medium'
            status='info'
            onPress={onDone}
            disabled={!photo}
            style={{flex: 1}}
          >
            Share
          </Button>
        </Block>
    </View>
    </KeyboardAvoidingView>
  )
};

export default Cooker;
