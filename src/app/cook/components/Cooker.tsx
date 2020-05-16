import React from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Dimensions,
  Image,
} from 'react-native';

import { useNavigation, useRoute } from '@react-navigation/native'

import { Text, Input, Button, Avatar } from '@ui-kitten/components'

import { Meal } from 'constants/dummyData'
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
import { MealsModel } from 'domain/meals/model';

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
  const [title, setTitle] = React.useState<string>(meal && meal.title)
  const [photo, setPhoto] = React.useState<string>(meal && meal.image)

  const { navigate, setOptions } = useNavigation<NavProp>()

  const onTitleChange = title => {
    setOptions({ title })
    setTitle(title)
  }

  const onDone = async () => {
    await save()

    await MealsModel.addFakeMeal(meal)

    await InProgressMealModel.clear()

    // Add meal to list
    navigate('/')
  }

  const save = async () => {
    await InProgressMealModel.save({
      ...meal,
      image: photo,
      title: title,
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

  const hasRecipe = meal.recipe || meal.steps.length
  
  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <ScrollView style={{ flex: 1 }} >
          <Block style={styles.container}>
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

              <TakePhoto
                photoUrl={photo}
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
                      }}
                  />
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
                        Inspired by {meal.user.name}.

                        What were your thoughts?
                      </Text>
                    </Block>
                    <Input
                      placeholder='It was...'
                      multiline

                      style={{
                        flex: 1,
                        marginTop: theme.SIZES.BASE,
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
                  />
                  </Block>
                )
              }

            </Block>

            <Block style={styles.stats}>
                <Block row space='between' middle>
                  <Tags tags={meal.preferences} />
                  <Button
                    appearance='ghost'
                    style={{ marginRight: -theme.SIZES.BASE }}
                    onPress={onEditTags}
                  >
                    Edit
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
  )
};

export default Cooker;
