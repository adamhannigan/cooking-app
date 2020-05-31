import React from 'react';
import {
  StyleSheet,
  Dimensions,
} from 'react-native';

import { format, formatDistance, formatRelative, subDays } from 'date-fns'

import { useNavigation } from '@react-navigation/native'

import { Text, useTheme, Button } from '@ui-kitten/components'

import S3Image from 'components/S3Image'

import { NavProp } from 'Navigation'

import { Meal as IMeal, MealsModel } from 'domain/meals/model';

import BookmarkOutlineSVG from 'assets/icons/bookmarks/outline.svg'
import BookmarkFilledSVG from 'assets/icons/bookmarks/filled.svg'
import CommentSVG from 'assets/icons/comment/comment.svg'

import Heart from './Heart'

// galio components
import {
  Block, theme, Icon
} from 'galio-framework';
import { TouchableOpacity } from 'react-native-gesture-handler';

import HangingBookmarkSVG from 'assets/icons/bookmarks/hangingBookmark.svg'
import { UserModel } from 'domain/users/model';
import AvatarHeader from './AvatarHeader';
import Avatars from './Avatars';

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

    const [isSaved, setIsSaved] = React.useState(false)
    const [currentLikes, setCurrentLikes] = React.useState(0)

    React.useEffect(() => {
      const fetchIsDrooling = async () => {
        const user = await UserModel.getCurrentUser()

        const userLike = meal.likes.items.find(item => item.owner === user.username)
        
        setIsSaved(!!userLike)
      }

      fetchIsDrooling()
    }, [])

    const onSave = () => {
      setIsSaved(true)
      MealsModel.like(meal)
    }

    const onLike = () => {
      setCurrentLikes(currentLikes + 1)
    }

    const dateTime = formatDistance(new Date(meal.createdAt), new Date())

    return (
        <Block>
            <Block>
                <Block row space='between'>
                  <AvatarHeader
                    avatarUrl=''
                    name={meal.createdBy.username}
                    time={dateTime}
                    userId={meal.createdBy.id}
                    isSaved={isSaved}
                    onSave={onLike}
                  />
                </Block>
                <TouchableOpacity
                  onPress={onClick} style={styles.imageContainer}
                >
                  {
                    isSaved && (
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
              <Block row space='between'>
                <Block style={{
                  ...styles.title,
                }}>
                  <Text category='h5' numberOfLines={2} style={{
                    lineHeight: 26,
                  }}>
                    {meal.title}
                  </Text>
                  <Text category='label' style={{ 
                    paddingBottom: 4,
                  }}>
                    tasty.com
                  </Text>
                </Block>
                <Block row middle style={styles.actions}>
                  {
                    (isSaved || currentLikes >= 3) && (
                      <Button
                          status='info'
                          appearance='ghost'
                          style={{
                            height: 16,
                          }}
                          onPress={onSave}
                          icon={() => (
                            isSaved
                              ? (
                                <BookmarkFilledSVG
                                  width={30}
                                  height={30}
                                  fill={kittenTheme['color-primary-default']}
                              />
                              )
                              : (
                                <BookmarkOutlineSVG
                                  width={30}
                                  height={30}
                                  fill={'#ddd'}
                              />
                              )
                            
                          )} />
                      )
                    }
                  
                  <Heart
                    currentLikes={currentLikes}
                    totalLikes={meal.likes.items.length + currentLikes}
                    onClick={onLike}
                  />
                  
                </Block>
                </Block>
              {
                meal.description && (
                  <Block row middle style={{
                    marginTop: theme.SIZES.BASE / 2,
                    display: 'flex',
                    alignItems: 'center',
                  }}>
                    <CommentSVG
                      width={25}
                      height={25}
                      fill='#babbbb'
                      style={{
                        marginRight: theme.SIZES.BASE / 2,
                      }}
                    />
                    <Text 
                      appearance='hint'
                      style={{
                        fontSize: 16,
                        flex: 1,
                      }}
                      numberOfLines={2}
                    >
                      {meal.description}
                    </Text>

                  </Block>
                )
              }
              <Avatars avatars={['', '', '']} />
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
  title: {
      paddingHorizontal: theme.SIZES.BASE,
      maxWidth: width - 120,
      borderRadius: 2,
  },
  actions: {
    width: 130,
    alignSelf: 'flex-start',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  bookmark: {
    position: 'absolute',
    top: 0,
    right: 15,
    zIndex: 9999,

    shadowOffset:{  width: 3,  height: 5,  },
    shadowColor: '#777',
    shadowOpacity: 0.7,
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
