import React from 'react';
import {
  Image,
  StatusBar,
  StyleSheet,
  ScrollView,
  View,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import { Text, Avatar, Button as KittenButton } from '@ui-kitten/components'

import Emoji from 'react-native-emoji'

import Constants from 'expo-constants';

import Emojis from './Emoji'

// galio components
import {
  Block, Card as GalioCard, theme,
} from 'galio-framework';

const { width } = Dimensions.get('screen');

export interface Props {
  title: string
  image: string
  description: string
  link: string
  userName: string
  emojis: {
    icon: string
    count: number
  }[]
}

const Card = ({ emojis, image, title, description, userName }: Props) => {
  return (
    <GalioCard
        flex
        style={styles.stats}
        borderless
        image={image}
        location={(
          <Block style={styles.content}>
            <Block row style={styles.icons}>
              <Emojis emojis={emojis} />
            </Block>
            <Block row>
              <Block style={styles.content}>
                <Text category='h3' style={styles.title}>
                  {title}
                </Text>
                <Text category='p1' appearance='hint'>
                  {description}
                </Text>
              </Block>
            </Block>
            <Block>
              <Block style={styles.user} row space='between'>
                <Block row>
                  <Avatar source={{
                    uri: 'http://i.pravatar.cc/100?id=skater',
                  }}/>
                  <Block style={styles.userText}>
                    <Text category='s1'>
                      {userName}
                    </Text>
                    <Text category='c2' appearance='hint'>
                      Cooked 5 times before
                    </Text>
                  </Block>
                </Block>
                <KittenButton
                  appearance='outline'
                  status='warning'
                >
                  Cook
                </KittenButton>
              </Block>
            </Block>
          </Block>
        )}
    />
  )
};

const styles = StyleSheet.create({
  stats: {
    width: width - theme.SIZES.BASE * 2,
    marginVertical: theme.SIZES.BASE * 0.875,
    backgroundColor: '#fff',
  },
  content: {
    width,
    // Offset where the icon was
    marginLeft: theme.SIZES.BASE * -1.5,
    paddingRight: theme.SIZES.BASE * 3,
    position: 'relative',
  },
  user: {
    width,
    marginLeft: theme.SIZES.BASE * -1.5,
    paddingRight: theme.SIZES.BASE * 3.8,
    marginTop: theme.SIZES.BASE,
  },
  userText: {
    marginLeft: theme.SIZES.BASE * 0.5,
  },
  title: {
  },
  icons: {
    position: 'absolute',
    display: 'flex',
    left: theme.SIZES.BASE * -2.5,
    top: theme.SIZES.BASE * -3,
  },
  iconButton: {
    width: 60,
    color: theme.COLORS.MUTED,
    backgroundColor: 'white',
    marginRight: theme.SIZES.BASE / 2,
    paddingLeft: 3,
  },
  textIcon: {
    borderColor: theme.COLORS.MUTED,
    borderWidth: 1,
    color: theme.COLORS.MUTED,
    padding: 10,
  },
});

export default Card;