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

import { Text } from '@ui-kitten/components'

import Constants from 'expo-constants';

const { statusBarHeight } = Constants;

// galio components
import {
  Block, Input, theme
} from 'galio-framework';

const { width, height } = Dimensions.get('screen');

console.log('In')
const Article = props => (
  <View style={{ flex: 1 }}>
    <ScrollView style={{ flex: 1 }}>
      <Block center style={{ marginTop: -theme.SIZES.BASE * 2 }}>
        <Block flex style={styles.header}>
          <Text category='h3' style={styles.title}>
            Search Recipes
          </Text>
          <Input
            placeholder="Input with Icon on right"
            right
            rounded
            icon="heart"
            family="antdesign"
            iconSize={14}
            iconColor="red"
          />

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
    paddingBottom: theme.SIZES.BASE * 3,
  },
  title: {
    paddingTop: theme.SIZES.BASE,
  },
});

export default Article;