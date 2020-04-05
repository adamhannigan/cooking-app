import React from 'react';
import {
  StyleSheet,
  Dimensions,
  Image,
} from 'react-native';

// galio components
import {
  Block, theme, Icon,
} from 'galio-framework';

import { Text, useTheme } from '@ui-kitten/components'

const { width } = Dimensions.get('screen');

interface Props {
    likeCount: number
    recipe: string
}

const Stats = (stats: Props) => {
    const kittenTheme = useTheme()

    return (
        <Block style={styles.container}>
            <Block style={styles.item}>
                <Icon
                    name='hearto'
                    color={kittenTheme['color-info-default']}
                    family={"AntDesign"}
                    size={20}
                    style={styles.icon}
                />
                <Text
                    category='s1'
                    appearance='hint'
                >
                    {stats.likeCount.toString()}
                </Text>
            </Block>
            <Block style={styles.item}>
                <Icon
                    name='user'
                    color={kittenTheme['color-info-default']}
                    family={"AntDesign"}
                    size={20}
                    style={styles.icon}
                />
                <Text
                    category='s1'
                    appearance='hint'
                >
                    {`${stats.likeCount.toString()} chefs tried this`}
                </Text>
            </Block>
        </Block>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    display: 'flex',

    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  item: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      fontSize: 30,
      marginRight: 20,
  },
  icon: {
      marginRight: 3,
  },
});

export default Stats;
