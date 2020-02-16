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

import { useNavigation } from '@react-navigation/native'


import { Text, Avatar, Button as KittenButton, Icon } from '@ui-kitten/components'

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
  userTitle: string
  emojis: {
    icon: string
    count: number
  }[]
  navigation: any
}

const Card = ({ emojis, image, title, description, userName, userTitle }: Props) => {
  const navigation = useNavigation()

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
                <Text category='p1' appearance='hint' style={styles.title}>
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
                    <Text category='c2' appearance='hint' style={styles.cookTime}>
                      { userTitle }
                    </Text>
                  </Block>
                </Block>
                <KittenButton
                  onPress={() => navigation.navigate('Cook')}
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
    marginTop: theme.SIZES.BASE * -0.5,
    position: 'relative',
  },
  user: {
    width,
    marginLeft: theme.SIZES.BASE * -1.5,
    paddingRight: theme.SIZES.BASE * 3.8,
    marginTop: theme.SIZES.BASE / 2,
  },
  userText: {
    marginLeft: theme.SIZES.BASE * 0.5,
  },
  title: {
  },
  icons: {
    display: 'flex',
    // Offset where the icon was
    marginLeft: theme.SIZES.BASE * -2.5,
    position: 'relative',
    bottom: theme.SIZES.BASE,
  },
  textIcon: {
    borderColor: theme.COLORS.MUTED,
    borderWidth: 1,
    color: theme.COLORS.MUTED,
    padding: 10,
  },
  cookTime: {
    marginTop: -2,
  },
});

export default Card;