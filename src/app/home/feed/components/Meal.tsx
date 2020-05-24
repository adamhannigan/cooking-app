import React from 'react';
import {
  Image,
  StyleSheet,
  Dimensions,
} from 'react-native';

import { useNavigation } from '@react-navigation/native'

import { Text, useTheme } from '@ui-kitten/components'

import Carousel from 'react-native-snap-carousel'
import { Video } from 'expo-av'

import { NavProp } from 'Navigation'

import { Meal as IMeal } from 'domain/meals/model';

import AnnouncementSVG from './assets/announcement.svg'
import HeartDroolSVG from './assets/smile.svg'
import TrophySVG from './assets/cup.svg'

import Actions from './Actions'

// galio components
import {
  Block, theme, Icon
} from 'galio-framework';
import { TouchableOpacity } from 'react-native-gesture-handler';

const { width, height } = Dimensions.get('screen');

interface Media {
  type: 'image' | 'video'
  url: string
}

export interface Props extends IMeal {}

const Meal = (meal: Props) => {
    const kittenTheme = useTheme()
    const navigation = useNavigation<NavProp>()

    const [imageInViewIndex, setImageInViewIndex] = React.useState(0);

    const onClick = () => {
      navigation.navigate('/meal/:id', {
        id: meal.id,
      })
    }

    const onFocusedItemChange = (imageIndexInView: number) => {
      setImageInViewIndex(imageIndexInView)
    }

    /*
    const stepsWithMedia = meal.steps
      .filter(step => step.photo || step.video)
      .map(step => step.photo ? {
        type: 'image',
        url: step.photo.url
      }: {
        type: 'video',
        url: step.video.url,
      }) as Media[]
      */


    const images: Media[] = [
      {
        type: 'image' as 'image',
        url: meal.image.file.key,
      },
      /*...(meal.ingredients ? [{
        type: 'image'as 'image',
        url: meal.ingredients.photo.url
      }] : []),
      ...stepsWithMedia,*/
    ]

    // const getStepNumber = (url: string) => meal.steps.findIndex(step => step.photo.url === url) + 1

    const carouselRef = React.useRef(null)

    const CarouselItem = ( {item, index, ...reset }: { item: Media, index: number}) => {
      return (
          <TouchableOpacity
            onPress={onClick}
           
          >
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
            {
              item.type === 'image' && (
                <Image
                  source={{
                    uri: item.url,
                  }}
                  style={{
                    width: '100%',
                    height: 300,
                    borderRadius: 5,
                  }}
                />
              )
            }
            {
              item.type === 'video' && (
                <Video
                  source={{
                    uri: item.url,
                  }}
                  style={{
                    width: '100%',
                    height: 300,
                    borderRadius: 5,
                  }}
                  rate={1.0}
                  volume={1.0}
                  isMuted={false}
                  resizeMode="cover"
                  shouldPlay={imageInViewIndex === index}
                  isLooping
                />
              )
            }
            
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
                    onSnapToItem={onFocusedItemChange}
                    sliderWidth={width}
                    itemWidth={width - theme.SIZES.BASE * 4}
                    layout={'default'}
                    firstItem={0}
                  />

                </Block>
            </Block>

            <Block style={styles.content}>
              <Block>
                <Text category='h5'>
                  {meal.title}
                </Text>
              </Block>
              {
                meal.description && (
                  <Block row middle style={{
                    width,
                    paddingRight: 10,
                  }}>
                    <Block style={{
                      marginRight: 0,
                      width: 40,
                    }}>
                      <AnnouncementSVG
                        width={35}
                        height={35}
                      />
                    </Block>
                    
                    <Text style={{ flex: 1 }} numberOfLines={2}>
                      {meal.description}
                    </Text>
                  </Block>
                )
              }
             
              <Block row style={{
                padding: 5,
                paddingTop: 10,
                marginTop: 10,
                borderTopWidth: 1,
                borderTopColor: '#ddd',
              }}>
                <Block row>
                  <TrophySVG
                    width={20}
                    height={20}
                    style={{
                      marginRight: 13,
                    }}
                  />
                  <Text appearance='hint'>
                    3 people have cooked this
                  </Text>
                </Block>
                <Block row>
                  <HeartDroolSVG
                    width={20}
                    height={20}
                    style={{
                      marginRight: 13,
                      marginLeft: 15,
                    }}
                  />
                  <Text appearance='hint'>
                    25
                  </Text>
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

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    
  },
  image: {
    height: '100%',
    width: '100%',
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
