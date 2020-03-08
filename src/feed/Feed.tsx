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

import { useNavigation } from '@react-navigation/native'


import FAB from 'react-native-fab'

import Constants from 'expo-constants';

// galio components
import {
  Block, Icon, NavBar, theme, Text,
} from 'galio-framework';

import { useRoute, useIsFocused } from '@react-navigation/native'


import MealCard from './components/MealCard'

const { width, height } = Dimensions.get('screen');

const Feed = props => {
  const isFocused = useIsFocused()
  const navigation = useNavigation()
  console.log('Is focused', isFocused)

  const cards = [{
    title: 'Sweet Potato Gnocci',
    action: '🤤 Is hungry for...',
    image: 'https://img.buzzfeed.com/thumbnailer-prod-us-east-1/video-api/assets/125259.jpg?output-quality=100&resize=900:*',
    user: {
      name: 'Adam Hannigan'
    },
    likes: 22,
    preferences: ['🍆 Vegetarian', '🍠 Sweet Potato'],
  }, {
    title: 'Brazillian Carrot Cake',
    action: '👨‍🍳 Just cooked...',
    image: 'https://img.buzzfeed.com/thumbnailer-prod-us-east-1/0b3bf188572f406aa09f32890d9749f5/BFV43049_HowToMakeMesmerizingBrazilianDesserts_FINAL.jpg?output-quality=100&resize=900:*',
    navigation: props.navigation,
    user: {
      name: 'Jess Lobster',
    },
    preferences: ['🇧🇷 Brazil', '🍰 Cake'],
    likes: 62,
  }, {
    title: 'Creamy Cajun Pasta',
    action: '👨‍🍳 Just cooked...',
    image: 'https://img.buzzfeed.com/video-api-prod/assets/ec15137f921a40f49317cd75d38a961d/BFV14804_Meal-PrepGarlicChickenAndVeggiePasta-TextlessThumb.jpg?output-quality=100&resize=900:*',
    user: {
      name: 'Joe Rogan',
    },
    preferences: ['💪 Fitness',  '🇲🇷 Italian'],
    likes: 12,
  }, {
    title: 'Chicken and Brocoslli Stir Fry',
    action: '📖 Added a meal to his menu ',
    image: 'https://img.buzzfeed.com/thumbnailer-prod-us-east-1/c6630a4d04074d11ab60bfa0cb4b03d1/BFV16130_Stir-Fry_4_Ways_FB.jpg?output-quality=100&resize=900:*',
    user: {
      name: 'Mitchell Hannigan',
    },
    preferences: ['🍚 Stir Fry',  '🐔 Chicken'],
    likes: 10,
  }]

  return (
    <View style={{ flex: 1 }}>
      <ScrollView style={{ flex: 1 }}>
        <Text>{isFocused ? 'focused' : 'not'}</Text>
        <Block center style={{ marginTop: - theme.SIZES.BASE * 2 }}>
          <Block flex style={styles.header}>
            <Block center>
              {
                cards.map(card => <MealCard {...card}/>)
              }
            </Block>
          </Block>
        </Block>
      </ScrollView>
      <FAB buttonColor="red"  iconTextColor="#FFFFFF" onClickAction={() => navigation.navigate('Cook')} visible={isFocused} iconTextComponent={
          (
            <Icon name='plus' color={theme.COLORS.MUTED} family='AntDesign' size={30} />
          )
        } />
    </View>
  )
}

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
    paddingBottom: theme.SIZES.BASE,
  },
  fab: {
    position: 'absolute',
  },
});

export default Feed;
