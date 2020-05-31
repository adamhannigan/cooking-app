import React from 'react';
import {
  StyleSheet,
  Dimensions,
} from 'react-native';


import { useNavigation } from '@react-navigation/native'

import { Text, useTheme, Button } from '@ui-kitten/components'

import S3Image from 'components/S3Image'

import { NavProp } from 'Navigation'

import { Meal as IMeal, MealsModel } from 'domain/meals/model';

import TrophySVG from './assets/cup.svg'
import HeartDroolSVG from 'assets/icons/likes/drool.svg'
import HeartDroolOutlineSVG from 'assets/icons/likes/outline.svg'
import HeartOutlineSVG from 'assets/icons/likes/heartOutline.svg'
import AddBookmarkOutlineSVG from 'assets/icons/bookmarks/addOutline.svg'
import BookmarkOutlineSVG from 'assets/icons/bookmarks/outline.svg'

import Actions from './Actions'

// galio components
import {
  Block, theme, Icon
} from 'galio-framework';
import { TouchableOpacity } from 'react-native-gesture-handler';

import HangingBookmarkSVG from 'assets/icons/bookmarks/hangingBookmark.svg'
import { UserModel } from 'domain/users/model';
import AvatarHeader from './AvatarHeader';

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

    const [isDrooling, setIsDrooling] = React.useState(false)

    React.useEffect(() => {
      const fetchIsDrooling = async () => {
        const user = await UserModel.getCurrentUser()

        const userLike = meal.likes.items.find(item => item.owner === user.username)
        setIsDrooling(!!userLike)
      }

      fetchIsDrooling()
    }, [])

    const onLike = () => {
      MealsModel.like(meal)

      setIsDrooling(true)
    }


    return (
        <Block>
            <Block>
                <Block row space='between'>
                  <AvatarHeader
                    avatarUrl=''
                    name={meal.createdBy.username}
                    time='10 hrs ago'
                    userId={meal.createdBy.id}
                    isSaved={isDrooling}
                    onSave={onLike}
                  />
                </Block>
                <TouchableOpacity
                  onPress={onClick} style={styles.imageContainer}
                >
                  {
                    isDrooling && (
                      <HangingBookmarkSVG
                        width={50}
                        height={50}
                        style={styles.bookmark}
                      />
                    )
                  }
                  

                  <S3Image
                    s3Key={meal.image.file.key}
                    style={{
                      width: '100%',
                      paddingHorizontal: 10,
                      height: 300,
                      borderRadius: 20,
                    }}
                  />
                </TouchableOpacity>
            </Block>


            <Block style={styles.content}>
              <Block style={{
                backgroundColor: kittenTheme['color-info-default'],
                paddingHorizontal: theme.SIZES.BASE,
                width: 200,
                borderRadius: 2,
              }}>
                <Text category='h5' numberOfLines={2} style={{
                  color: 'white',
                }}>
                  {meal.title}
                </Text>
              </Block>
              {
                meal.description && (
                  <Block row middle style={{
                    width,
                    paddingRight: 10,
                  }}>
                    <Text 
                      appearance='hint'
                      category='s1'
                      style={{ flex: 1 }}
                      numberOfLines={2}
                    >
                      {meal.description}
                    </Text>
                  </Block>
                )
              }
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
  bookmark: {
    position: 'absolute',
    top: 0,
    right: 15,
    zIndex: 9999,
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
