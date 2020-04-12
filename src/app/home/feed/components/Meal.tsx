import React from 'react';
import {
  Image,
  StyleSheet,
} from 'react-native';

import { useNavigation } from '@react-navigation/native'

import { Text, useTheme, ViewPager } from '@ui-kitten/components'

import { SliderBox } from "react-native-image-slider-box";

import { Meal as IMeal } from 'constants/dummyData'

import { NavProp } from 'Navigation'

import Actions from './Actions'

// galio components
import {
  Block, theme, Icon
} from 'galio-framework';


const Meal = (meal: IMeal) => {
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
              {
                  /**
              <Block style={styles.avatars}>
                <Avatar
                  style={styles.avatar}
                  source={{
                        uri: 'http://i.pravatar.cc/100?id=skater',
                  }}
                />

                   * TODO- secondary cooks
                   * <Avatar
                      style={styles.avatar}
                      source={{
                            uri: 'http://i.pravatar.cc/100?id=skater',
                      }}
                    />
                   
                
              </Block>
              */
            }

            </Block>

            <Block row style={styles.content}>
              <Block>
                  <Block>
                    <Text category='h5'>
                      {meal.title}
                    </Text>
                  </Block>
                  <Block row start>
                    <Icon
                      name='heart'
                      color={kittenTheme['color-danger-default']}
                      family={"AntDesign"} size={15}
                      style={{ marginRight: 5 }}
                    />
                    <Text category='s1'>
                        44 people are now hungry
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

    borderRadius: 5,
  },
  image: {
    height: 250,
  },
  avatars: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    display: 'flex',
    flexWrap: 'wrap',
  },
  playButtonContainer: {
    position: 'absolute',
    right: 5,
    top: 5,
    backgroundColor: 'white',
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  playButton: {
    fontSize: 50,
  },
  avatar: {
    margin: 5,
    width: 50,
    height: 50,

    borderWidth: 3,
    backgroundColor: 'white',
    borderColor: 'white',
  },
});

export default Meal;
