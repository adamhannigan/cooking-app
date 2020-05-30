import React from 'react';
import {
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity
} from 'react-native';

import { Meal as IMeal } from 'constants/dummyData'
// galio components
import {
  Block, theme
} from 'galio-framework';

import { Text, useTheme } from '@ui-kitten/components'

import { useNavigation } from '@react-navigation/native';

import { NavProp } from 'Navigation';

import { Meal } from 'domain/meals/model';

import TrophySVG from '../../home/feed/components/assets/cup.svg'
import S3Image from 'components/S3Image';

const { width } = Dimensions.get('screen');

const MealSummary = (meal: Meal) => {
  const navigation = useNavigation<NavProp>()
  const onClick = () => {
    navigation.navigate('/meal/:id', {
      id: meal.id
    })
  }
    return (
        <TouchableOpacity
          style={styles.container}
          onPress={onClick}
        >
            <Block style={styles.imageContainer}>
                <S3Image
                    s3Key={meal.image.file.key}
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
                        {meal.description}
                      </Text>
                  </Block>
                </Block>
                
            </Block>
        </TouchableOpacity>
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
    borderRadius: 10,
  },
  imageContainer: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,

    // Offset the border
    marginLeft: theme.SIZES.BASE,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    
    elevation: 5,
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
