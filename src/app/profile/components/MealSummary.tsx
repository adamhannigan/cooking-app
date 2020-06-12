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
import Avatars from 'app/home/feed/components/Avatars';

import MealSVG from 'assets/icons/rewards/medal.svg'

const { width } = Dimensions.get('screen');

interface Props extends Meal {
  onClick: () => void,
}

const MealSummary: React.FC<Props> = ({
  onClick,
  ...meal
}) => {
  const navigation = useNavigation<NavProp>()

    return (
        <TouchableOpacity
          onPress={onClick}
          key={meal.id}
          style={styles.container}
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
                </Block>
                <Block row style={styles.rating}>
                  <MealSVG width={25} height={25} />
                  <Text appearance='hint'>
                        97%
                  </Text>
                </Block>
                <Avatars avatars={['s']} />
            </Block>
        </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: theme.SIZES.BASE * 0.5,
    width: width - theme.SIZES.BASE * 2,
    marginLeft: theme.SIZES.BASE,
    marginBottom: theme.SIZES.BASE,

    borderRadius: 10,

    display: 'flex',
    flexDirection: 'row',

    shadowColor: "#ddd",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.4,
    shadowRadius: 5,
    
    elevation: 4,

    backgroundColor: 'white'
  },
  image: {
    fontWeight: 'bold',
    height: 100,
    width: 100,
    borderRadius: 10,
  },
  rating: {
    marginTop: 5,
    marginBottom: -10,
  },
  imageContainer: {
    display: 'flex',
    justifyContent: 'center',
  },
  content: {
      marginLeft: theme.SIZES.BASE,
      display: 'flex',
      justifyContent: 'space-around',
      flex: 1,
  },
});

export default MealSummary;
