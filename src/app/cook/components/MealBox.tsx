import React from 'react';
import {
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';

import { Text, Avatar } from '@ui-kitten/components'

import Constants from 'expo-constants';

// galio components
import {
  Block, theme,
} from 'galio-framework';

import HeartSVG from 'app/home/feed/components/assets/smile.svg'
import MenuSVG from 'app/home/assets/menu.svg'
import { Meal } from 'domain/meals/model';

const { width, height } = Dimensions.get('screen');

interface Props extends Meal {
  onClick: () => void
  size?: 'medium' | 'large'
  isFromMenu?: boolean
}

const PADDING = 10

export const MealBox = ({
  onClick,
  size = 'medium',
  isFromMenu,
  ...meal
}: Props) => {
  const mealWidth = size === 'medium'
    ? (width / 2.5) - PADDING * 2
    : (width / 2) - PADDING * 2

  return (
    <TouchableOpacity onPress={onClick}>
        <Block row style={styles.user}>
          <Avatar
              style={styles.avatar}
              source={{
                  uri: 'http://i.pravatar.cc/100?id=skater',
              }}
          />
          <Text
            appearance='hint'
            category='label'
          >
            {meal.createdBy.username}
          </Text>
        </Block>
        <Block style={{
          ...styles.container,
          meal: mealWidth,
        }}>
          <Block
            style={{
              position: 'absolute',
              backgroundColor: 'white',
              zIndex: 10000,
              borderBottomLeftRadius: 50,
              right: 0,
              padding: 10,
            }}>
            {
              isFromMenu && (
                <MenuSVG
                  width={30}
                  height={30}
                />
              )
            }
            {
              !isFromMenu && (
                <HeartSVG
                  width={30}
                  height={30}
                />
              )
            }
            
            
          </Block>
            <Image
                source={{ uri: meal.image.file.key }}
                style={{
                  ...styles.image,
                  height: mealWidth,
                  width: mealWidth,
                }}
            />
            <Text
              category='s1'
              style={{
                ...styles.text,
                width: mealWidth,
              }}
              numberOfLines={2}
            >
                {meal.title}
            </Text>
        </Block>
    </TouchableOpacity>
  )
}

// Want the meal to intersect with screen edge so they know to scroll
const styles = StyleSheet.create({
  container: {
    display: 'flex',
    padding: PADDING,
  },
  image: {
    borderRadius: 5,
  },
  user: {
    display: 'flex',
    alignItems: 'center',
    marginTop: theme.SIZES.BASE,
    marginLeft: theme.SIZES.BASE / 2,

    marginBottom: -theme.SIZES.BASE / 2,
  },
  avatar: {
    marginRight: theme.SIZES.BASE / 2,
    width: 40,
    height: 40,

    borderWidth: 1,
    borderColor: '#ddd',
  },
  text: {
    fontWeight: 'bold',
    lineHeight: 17,
    paddingTop: 2,
    overflow: 'hidden',
    width: '100%',
  }
});
