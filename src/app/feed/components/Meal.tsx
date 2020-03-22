import React from 'react';
import {
  Image,
  StyleSheet,
} from 'react-native';

import { Text, useTheme } from '@ui-kitten/components'

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
            <Image
                source={{ uri: meal.image }}
                style={styles.image}
            />
            <Block row style={styles.content}>
              <Block space='between'>
                <Block>
                  {
                    meal.user && (
                      <Person {...meal} />
                    )
                  }

                  <Block>
                    <Text category='h4'>
                        {meal.title}
                      </Text>
                  </Block>

                  <Block row end>
                    <Icon
                      name='clockcircleo'
                      color={kittenTheme['text-hint-color']}
                      family={"AntDesign"} size={20}
                      style={{ marginRight: 5 }}
                    />
                    <Text category='s1' appearance='hint'>
                        Under 30 min.
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
    paddingBottom: theme.SIZES.BASE / 2,
    paddingHorizontal: theme.SIZES.BASE / 2,
    backgroundColor: 'white',

    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  image: {
    height: theme.SIZES.BASE * 10,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
});

export default Meal;
