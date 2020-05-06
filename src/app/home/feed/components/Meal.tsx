import React from 'react';
import {
  Image,
  StyleSheet,
  Dimensions,
} from 'react-native';

import { useNavigation } from '@react-navigation/native'

import { Text, useTheme, ViewPager } from '@ui-kitten/components'

import { SliderBox } from "react-native-image-slider-box";

import { Meal as IMeal } from 'constants/dummyData'

import { NavProp } from 'Navigation'

import ColorDrool from '../../assets/colorDrool.svg'
import Friends from '../../assets/friends.svg'

import Actions from './Actions'

// galio components
import {
  Block, theme, Icon
} from 'galio-framework';

const { width, height } = Dimensions.get('screen');

export interface Props extends IMeal {
  secondaryTag?: string
}

const Meal = (meal: Props) => {
    const kittenTheme = useTheme()
    const navigation = useNavigation<NavProp>()

    const [imageInViewIndex, setImageInViewIndex] = React.useState(0);

    const onClick = () => {
      navigation.navigate('/meal/:id', {
        id: meal.id,
      })
    }

    const onImageSlide = (imageIndexInView: number) => {
      setImageInViewIndex(imageIndexInView)
      console.log()
    }

    const stepsWithImages = meal.steps
      .filter(step => step.photoUrl)
      .map(step => step.photoUrl)

    const images: string[] = [
      meal.image,
      ...(meal.ingredients ? [meal.ingredients.photoUrl] : []),
      ...stepsWithImages,
    ]

    const getStepNumber = (photoUrl: string) => meal.steps.findIndex(step => step.photoUrl === photoUrl) + 1

    return (
        <Block>
            <Block>
                <Block style={styles.imageContainer}>
                  {
                    meal.steps.length > 0 && (
                      <Block style={{
                        ...styles.tag,
                        backgroundColor: kittenTheme['color-info-default'],
                        left: imageInViewIndex * (width / images.length),
                      }}>
                        <Text style={styles.tagText}>
                          {
                            imageInViewIndex === 0 && `${meal.steps.length} steps`
                          }
                          {
                            imageInViewIndex === 1 && meal.ingredients && 'Ingredients'
                          }
                          {
                            imageInViewIndex > 1 && meal.ingredients
                              && `Step ${getStepNumber(images[imageInViewIndex])}`
                          }
                          {
                            imageInViewIndex > 0 && !meal.ingredients
                              && `Step ${getStepNumber(images[imageInViewIndex])}`
                          }
                        </Text>
                      </Block>
                    )
                  }

                  <SliderBox
                    images={images}
                    style={styles.image}
                    onCurrentImagePressed={onClick}
                    currentImageEmitter={onImageSlide}
                    dotColor={kittenTheme['color-info-default']}
                    imageLoadingColor={kittenTheme['color-primary-default']}
                  />
                </Block>
            </Block>

            <Block row style={styles.content}>
              <Block>
                  <Block>
                    <Text category='h5'>
                      {meal.title}
                    </Text>
                  </Block>
                  <Text category='p1' appearance='hint'>
                      Tip: {meal.tip}
                  </Text>
                  <Block row style={{
                      marginTop: theme.SIZES.BASE,
                    }}>
                    <Block row middle style={{
                      marginRight: theme.SIZES.BASE,
                    }}>
                      {/*
                      <Icon
                        name='heart'
                        color={kittenTheme['color-danger-default']}
                        family={"AntDesign"} size={15}
                        style={{ marginRight: 5 }}
                      />
                      */}
                      <ColorDrool
                        style={styles.icon}
                        width={25}
                        height={25}
                      />
                      <Text category='s1'>
                          44
                      </Text>
                    </Block>
                    <Block row middle start>
                      <Friends
                        style={styles.icon}
                        width={25}
                        height={25}
                      />
                      <Text category='s1'>
                          22 friends have cooked this
                      </Text>
                    </Block>
                  </Block>

              </Block>
              <Actions {...meal} />
            </Block>
          </Block>
  )
}

const styles = StyleSheet.create({
  content: {
    padding: theme.SIZES.BASE / 2,
    width,

    borderRadius: 5,
  },
  imageContainer: {
    width,
    height: 250,
  },
  image: {
    height: '100%',
    width: '100%'
  },
  icon: {
    width: 20,
    height: 25,
    marginRight: 5,
  },
  tag: {
    position: 'absolute',
    top: 0,
    left: 5,

    zIndex: 1,

    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    paddingVertical: 4,
    paddingHorizontal: 8,
  },
  tagText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 14,
    fontStyle: 'italic',
    lineHeight: 22,
  },
});

export default Meal;
