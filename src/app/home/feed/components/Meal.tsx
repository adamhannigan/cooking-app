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

    const [selectedIndex, setSelectedIndex] = React.useState(0);

    const onClick = () => {
      navigation.navigate('/meal/:id', {
        id: meal.id,
      })
    }

    return (
        <Block>
            <Block>
                <Block style={styles.imageContainer}>
                  {
                    meal.secondaryTag && (
                      <Block style={{
                        ...styles.tag,
                        backgroundColor: kittenTheme['color-info-default']
                      }}>
                        <Text style={styles.tagText}>{meal.secondaryTag}</Text>
                      </Block>
                    )
                  }
                  <SliderBox
                    images={[
                      meal.image,
                      meal.image
                    ]}
                    style={styles.image}
                    onCurrentImagePressed={onClick}
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
