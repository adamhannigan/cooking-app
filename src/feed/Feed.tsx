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
  Block, Icon, NavBar, theme
} from 'galio-framework';

import Card, { Props as CardProps } from './components/Card'

const { width, height } = Dimensions.get('screen');

const cards: CardProps[] = [{
  title: 'Gnocci',
  image: 'https://img.buzzfeed.com/thumbnailer-prod-us-east-1/video-api/assets/125259.jpg?output-quality=100&resize=900:*',
  description: 'My monday night slammer!',
  userName: 'Joe Rogan',
  link: '',
  emojis: [{
    icon: '🤤',
    count: 22,
  }, {
    icon: '🍖',
    count: 12,
  }],
}, {
  title: 'Creamy Cajun Pasta',
  image: 'https://img.buzzfeed.com/video-api-prod/assets/ec15137f921a40f49317cd75d38a961d/BFV14804_Meal-PrepGarlicChickenAndVeggiePasta-TextlessThumb.jpg?output-quality=100&resize=900:*',
  description: 'Get in my belly',
  userName: 'Mitchell Hannigan',
  link: '',
  emojis: [{
    icon: '🍝',
    count: 7,
  }, {
    icon: '🥒',
    count: 5,
  }, {
    icon: '🐓',
    count: 2,
  }],
}, {
  title: 'Chicken and Brocoslli Stir Fry',
  image: 'https://img.buzzfeed.com/thumbnailer-prod-us-east-1/c6630a4d04074d11ab60bfa0cb4b03d1/BFV16130_Stir-Fry_4_Ways_FB.jpg?output-quality=100&resize=900:*',
  description: 'Yummmmmay',
  userName: 'Joe bloggs',
  link: '',
  emojis: [{
    icon: '🍝',
    count: 7,
  }, {
    icon: '🥒',
    count: 5,
  }, {
    icon: '🐓',
    count: 2,
  }],
}]

console.log('In')
const Article = props => (
  <View style={{ flex: 1 }}>
    <ScrollView style={{ flex: 1 }}>
      <Block center style={{ marginTop: -theme.SIZES.BASE * 2 }}>
        <Block flex style={styles.header}>
          <Text category='h3' style={styles.title}>
            What's cooking tonight.
          </Text>

          <Block center>
            {
              cards.map(Card)
            }
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
    paddingBottom: theme.SIZES.BASE * 3,
  },
  title: {
    paddingTop: theme.SIZES.BASE,
  },
});

export default Article;