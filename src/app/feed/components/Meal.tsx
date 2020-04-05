import React from 'react';
import {
  Image,
  StyleSheet,
} from 'react-native';

import { Text, useTheme, Avatar } from '@ui-kitten/components'

import { Meal as IMeal } from 'constants/dummyData'

import Person from './Person'
import Actions from './Actions'

// galio components
import {
  Block, theme, Icon
} from 'galio-framework';


const Meal = (meal: IMeal) => {
    const kittenTheme = useTheme()

    return (
        <Block>
            <Block style={styles.imageContainer}>
              <Image
                  source={{ uri: meal.image }}
                  style={styles.image}
              />
              <Block style={styles.avatars}>
                <Avatar
                  style={styles.avatar}
                  source={{
                        uri: 'http://i.pravatar.cc/100?id=skater',
                  }}
                />
                {
                  /**
                   * TODO- secondary cooks
                   * <Avatar
                      style={styles.avatar}
                      source={{
                            uri: 'http://i.pravatar.cc/100?id=skater',
                      }}
                    />
                   */
                }
                
              </Block>
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
    paddingBottom: theme.SIZES.BASE / 2,
    paddingHorizontal: theme.SIZES.BASE / 2,
    backgroundColor: 'white',

    borderRadius: 5,
  },
  image: {
    height: 250,
    borderRadius: 5,
  },
  imageContainer: {
    position: 'relative',
  },
  avatars: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    display: 'flex',
    flexWrap: 'wrap',
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
