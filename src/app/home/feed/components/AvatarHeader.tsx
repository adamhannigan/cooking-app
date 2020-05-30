import React from 'react';
import {
  StyleSheet,
  Dimensions,
  Image,
} from 'react-native';

import { useNavigation } from '@react-navigation/native'

import { Meal as IMeal } from '../../../../constants/dummyData'
// galio components
import {
  Block, theme
} from 'galio-framework';

import { Text, Avatar, useTheme } from '@ui-kitten/components'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { NavProp } from 'Navigation';

import Tags from './Tags'

const { width } = Dimensions.get('screen');

interface Props {
    avatarUrl: string
    name: string
    time: string
    userId: string
}

const AvatarHeader = ({
    avatarUrl,
    name,
    time,
    userId,
}: Props) => {
    const navigation = useNavigation<NavProp>()
    const onClick = () => {
        navigation.navigate('/profile/:id', {
            id: userId,
        })
    }

    const kittenTheme = useTheme()

    return (
        <Block style={styles.container}>
            <TouchableOpacity onPress={onClick}>
                <Block row>
                    <Block style={{
                        ...styles.avatarCircle,
                        borderColor: kittenTheme['color-primary-default'],
                    }}>
                        <Avatar
                            style={styles.avatar}
                            source={{
                                uri: 'http://i.pravatar.cc/100?id=skater',
                            }}
                        />
                    </Block>
                    <Block>
                        <Text style={styles.text}>
                            { name }
                        </Text>
                        <Tags />
                    </Block>
                </Block>
            </TouchableOpacity>
            {/*
            <Block style={styles.timeContainer}>
                <Text appearance='hint'>
                    { time }
                </Text>
            </Block>
            */}
        </Block>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: theme.SIZES.BASE * 0.5,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  avatar: {
    width: 40,
    height: 40,
  },
  avatarCircle: { 
    borderWidth: 2,
    marginRight: theme.SIZES.BASE / 2,
    borderRadius: 40,
    padding: 2,
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
