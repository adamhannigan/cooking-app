import React from 'react';
import {
  StyleSheet,
  Dimensions,
  Image,
} from 'react-native';

import { Meal as IMeal } from '../../../../constants/dummyData'
// galio components
import {
  Block, theme
} from 'galio-framework';

import { Text, Avatar, useTheme } from '@ui-kitten/components'

const { width } = Dimensions.get('screen');

interface Props {
    avatarUrl: string
    name: string
    time: string
}

const AvatarHeader = ({
    avatarUrl,
    name,
    time,
}: Props) => {
    return (
        <Block style={styles.container}>
            <Block row>
                <Avatar
                    style={styles.avatar}
                    source={{
                        uri: 'http://i.pravatar.cc/100?id=skater',
                    }}
                />
                <Block>
                    <Text style={styles.text}>
                        { name }
                    </Text>
                    <Text appearance='hint' style={styles.text}>
                        Sydney, Australia
                    </Text>
                </Block>
            </Block>
            <Block style={styles.timeContainer}>
                <Text appearance='hint' style={styles.text}>
                    { time }
                </Text>
            </Block>
        </Block>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: theme.SIZES.BASE * 0.5,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width,
  },
  avatar: {
    marginRight: theme.SIZES.BASE / 2,
    width: 50,
    height: 50,

    borderWidth: 1,
    borderColor: '#ddd',
  },
  timeContainer: {
  },
  text: {
      fontWeight: 'bold',
      fontSize: 14,
      lineHeight: 22,
  }
});

export default AvatarHeader;
