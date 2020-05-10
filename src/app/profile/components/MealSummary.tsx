import React from 'react';
import {
  StyleSheet,
  Dimensions,
  Image,
} from 'react-native';

import { Meal as IMeal } from 'constants/dummyData'
// galio components
import {
  Block, theme
} from 'galio-framework';

import { Text, useTheme } from '@ui-kitten/components'

import LoveEyesSVG from '../../home/feed/components/assets/loveEyes.svg'
import TrophySVG from '../../home/feed/components/assets/cup.svg'
import RecipeListSVG from '../../home/feed/components/assets/recipeList.svg'

const { width } = Dimensions.get('screen');


const MealSummary = (meal: IMeal) => {
    return (
        <Block style={styles.container}>
            <Block style={styles.imageContainer}>
                <Image
                    source={{ uri: meal.image }}
                    style={styles.image}
                />
                    
            </Block>
            <Block style={styles.content}>
                <Block>
                    <Text category='h6'>
                        {meal.title}
                    </Text>
                    <Block row style={styles.stat}>
                      <TrophySVG
                        width={20}
                        height={20}
                        style={{
                          marginRight: 5,
                        }}
                      />
                      <Text>12 people have tried this recipe</Text>
                  </Block>
                  <Block row style={styles.stat}>
                      <Text
                        appearance='hint'
                        numberOfLines={2}
                      >
                        {meal.tip}
                      </Text>
                  </Block>
                </Block>
                
            </Block>
        </Block>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: theme.SIZES.BASE * 1,
    width: width - theme.SIZES.BASE * 2,

    display: 'flex',
    flexDirection: 'row',
  },
  image: {
    fontWeight: 'bold',
    height: 100,
    width: 100,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
  },
  imageContainer: {
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,

    borderWidth: 1,
    borderColor: '#ddd',

    // Offset the border
    marginLeft: -1,

    shadowOffset:{  width: 5,  height: 5 },
    shadowColor: '#202020',
    shadowOpacity: 0.2,
    shadowRadius: 10,
  },
  content: {
      marginLeft: theme.SIZES.BASE,
      justifyContent: 'space-between',
      flex: 1,
  },
  stat: {
    marginTop: 5,
    marginBottom: 5,
  },
});

export default MealSummary;
