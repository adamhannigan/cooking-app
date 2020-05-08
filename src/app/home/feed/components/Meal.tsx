import React from 'react';
import {
  Image,
  StyleSheet,
  Dimensions,
} from 'react-native';

import { useNavigation } from '@react-navigation/native'

import { Text, useTheme, ViewPager } from '@ui-kitten/components'

import { SliderBox } from "react-native-image-slider-box";
import Carousel from 'react-native-snap-carousel'

import { Meal as IMeal } from 'constants/dummyData'

import { NavProp } from 'Navigation'

import ColorDrool from '../../assets/colorDrool.svg'
import Friends from '../../assets/friends.svg'

import Actions from './Actions'

// galio components
import {
  Block, theme, Icon
} from 'galio-framework';
import { TouchableOpacity } from 'react-native-gesture-handler';

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
    }

    const stepsWithImages = meal.steps
      .filter(step => step.photo)
      .map(step => step.photo.url)

    const images: string[] = [
      meal.image,
      ...(meal.ingredients ? [meal.ingredients.photo.url] : []),
      ...stepsWithImages,
    ]

    const getStepNumber = (url: string) => meal.steps.findIndex(step => step.photo.url === url) + 1

    const carouselRef = React.useRef(null)

    const CarouselItem = ( {item, index} ) => {
      console.log("rendering,", index, item)

      return (
          <TouchableOpacity onPress={onClick}>
            {
              /*
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
                        */}
            <Image
              source={{
                uri: item,
              }}
              style={{
                width: '100%',
                height: 300,
                borderRadius: 5,
              }}
            />
          </TouchableOpacity>
      );
    }

    return (
        <Block>
            <Block>
                <Block style={styles.imageContainer}>
                  


                  {/*
                  <SliderBox
                    images={images}
                    onCurrentImagePressed={onClick}
                    currentImageEmitter={onImageSlide}
                    dotColor={kittenTheme['color-info-default']}
                    imageLoadingColor={kittenTheme['color-primary-default']}
                  />
                  */}

                  <Carousel
                    style={styles.image}
                    ref={(c) => { carouselRef.current = c; }}
                    data={images}
                    renderItem={CarouselItem}
                    onSnapToItem={console.log}
                    sliderWidth={width}
                    itemWidth={width - theme.SIZES.BASE * 4}
                    layout={'default'}
                    firstItem={0}
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
    height: 350,
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
