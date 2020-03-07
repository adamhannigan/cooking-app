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
  Block, Card as GalioCard, theme, Button as GalioButton,
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
    <Block style={styles.container}>
      <Block>
        <Block>
          <Block row space='between'>
            <Block row>
              <Avatar source={{
                uri: 'http://i.pravatar.cc/100?id=skater',
              }}/>
              <Block style={styles.userText}>
                <Text category='s1'>
                  {userName}
                </Text>
              </Block>
            </Block>
          </Block>
        </Block>

        <Block row>
          <Block>
            <Text category='h6' style={styles.hungryFor}>
              I'm hungry for..
            </Text>
            <Text category='h3'>
              {title}
            </Text>
          </Block>
        </Block>
      </Block>
      <Image source={{ uri: image }} style={styles.image}/>
      <Block style={styles.content}>
          <Block row style={styles.icons}>
            <Emojis emojis={emojis} />
          </Block>
          <GalioButton round style={styles.button}  color="warning">
            🇧🇷7
          </GalioButton>
      </Block>
    </Block>
  )
};

const styles = StyleSheet.create({
  container: {
    marginVertical: theme.SIZES.BASE * 0.875,
    width: width - theme.SIZES.BASE * 2,
    backgroundColor: 'white',
  },
  image: {
    width: width - theme.SIZES.BASE * 2,
    height: theme.SIZES.BASE * 10,
    borderRadius: 5,
    marginTop: theme.SIZES.BASE * 0.5,
  },
  hungryFor: {
    paddingTop: theme.SIZES.BASE * 0.5,
    marginBottom: theme.SIZES.BASE * -0.5,
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: 'white',
    width: theme.SIZES.BASE * 3,
    color: 'black',
  },
  content: {
    width,
    // Offset where the icon was
    marginLeft: theme.SIZES.BASE * -1.5,
    paddingRight: theme.SIZES.BASE * 3,
    marginTop: theme.SIZES.BASE * 2,
    position: 'relative',
  },
  userText: {
    marginLeft: theme.SIZES.BASE * 0.5,
  },
  icons: {
    display: 'flex',
    // Offset where the icon was
    position: 'relative',
    bottom: theme.SIZES.BASE,
  },
  cookTime: {
    marginTop: -2,
  },
});

export default Card;
