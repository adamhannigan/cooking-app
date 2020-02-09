import React from 'react';
import {
  Image,
  StatusBar,
  StyleSheet,
  ScrollView,
  View,
  Dimensions,
  TouchableOpacity
} from 'react-native';

import { BottomNavigation } from 'react-native-paper'

import Constants from 'expo-constants';

const { statusBarHeight } = Constants;

// galio components
import {
  Block, Text, Icon, NavBar, theme
} from 'galio-framework';

import Card from './components/Card'

const { width, height } = Dimensions.get('screen');

const bgImage = 'https://images.unsplash.com/photo-1516651029879-bcd191e7d33b?fit=crop&w=900&q=80';

const Article = props => (
  <View style={{ flex: 1 }}>
    <ScrollView style={{ flex: 1 }}>
      <Block center style={{ marginTop: -theme.SIZES.BASE * 2 }}>
        <Block flex style={styles.header}>
          <Block center>
            <Card />
            <Card />
            <Card />
            <Card />
          </Block>
        </Block>
      </Block>
    </ScrollView>
  </View>
);

const styles = StyleSheet.create({
  header: {
    borderTopLeftRadius: theme.SIZES.BASE * 2,
    borderTopRightRadius: theme.SIZES.BASE * 2,
    paddingVertical: theme.SIZES.BASE * 2,
    paddingHorizontal: theme.SIZES.BASE * 1.5,
    width,
  },
  navbar: {
    top: statusBarHeight,
    left: 0,
    right: 0,
    zIndex: 9999,
    position: 'absolute',
  },
  stats: {
    width: width - theme.SIZES.BASE * 2,
    marginVertical: theme.SIZES.BASE * 0.875,
    backgroundColor: '#fff',
  },
  title: {
    justifyContent: 'center',
    paddingLeft: theme.SIZES.BASE / 2,
  },
  avatar: {
    width: theme.SIZES.BASE * 2.5,
    height: theme.SIZES.BASE * 2.5,
    borderRadius: theme.SIZES.BASE * 1.25,
  },
  middle: {
    justifyContent: 'center',
  },
  text: {
    fontSize: theme.SIZES.FONT * 0.875,
    lineHeight: theme.SIZES.FONT * 1.25,
  },
});

export default Article;