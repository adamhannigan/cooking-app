import React from 'react';
import {
  Image,
  StatusBar,
  StyleSheet,
  ScrollView,
  View,
  Dimensions,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';

import { Text, Avatar, Button } from '@ui-kitten/components'
import { useNavigation } from '@react-navigation/native'

import Constants from 'expo-constants';

const { statusBarHeight } = Constants;

import Meal from '../feed/components/MealCard'

console.disableYellowBox = true
// galio components
import {
  Block, Icon, NavBar, theme, Input,
} from 'galio-framework';

const { width, height } = Dimensions.get('screen');

const cards = [{
  title: 'Sweet Potato Gnocci',
  action: '🤤 Is hungry for...',
  image: 'https://img.buzzfeed.com/thumbnailer-prod-us-east-1/video-api/assets/125259.jpg?output-quality=100&resize=900:*',
  likes: 22,
  preferences: ['🍆 Vegetarian'],
}, {
  title: 'Brazillian Carrot Cake',
  action: '👨‍🍳 Just cooked...',
  image: 'https://img.buzzfeed.com/thumbnailer-prod-us-east-1/0b3bf188572f406aa09f32890d9749f5/BFV43049_HowToMakeMesmerizingBrazilianDesserts_FINAL.jpg?output-quality=100&resize=900:*',
  preferences: [],
  likes: 62,
}, {
  title: 'Creamy Cajun Pasta',
  action: '👨‍🍳 Just cooked...',
  image: 'https://img.buzzfeed.com/video-api-prod/assets/ec15137f921a40f49317cd75d38a961d/BFV14804_Meal-PrepGarlicChickenAndVeggiePasta-TextlessThumb.jpg?output-quality=100&resize=900:*',
  preferences: ['💪 Fitness',  '🇲🇷 Italian'],
  likes: 12,
}, {
  title: 'Chicken and Brocoslli Stir Fry',
  action: '📖 Added a meal to his menu ',
  image: 'https://img.buzzfeed.com/thumbnailer-prod-us-east-1/c6630a4d04074d11ab60bfa0cb4b03d1/BFV16130_Stir-Fry_4_Ways_FB.jpg?output-quality=100&resize=900:*',
  preferences: ['🍚 Stir Fry',  '🐔 Chicken'],
  likes: 10,
}]

const Menu = () => {
  const [selected, setSelected] = React.useState([])
  const navigation = useNavigation()
  
  const onSelect = (name: string) => {
    const alreadyExists = selected.includes(name)

    if (alreadyExists) {
      setSelected(selected.filter(item => item !== name))
    } else {
      setSelected([...selected, name])
    }
  }

  return (
    <View style={{ flex: 1 }}>
      <ScrollView style={{ flex: 1 }}>
        <Block style={{ marginTop: - theme.SIZES.BASE * 2 }}>
          <Block center flex style={styles.header}>
            <TouchableOpacity onPress={() => navigation.navigate('Preferences')}>
              <Avatar
                  style={styles.avatar}
                  source={{
                      uri: 'http://i.pravatar.cc/100?id=skater',
                  }}
              />
            </TouchableOpacity>
            <Text category='h4'>
              Adam Hannigan
            </Text>
            <Text category='p' >
              Lets go, cook some meat!
            </Text>
          </Block>
        </Block>
          
        <Block>
          <Text category='h4' style={styles.menuTitle}>
            Adam's Menu
          </Text>
          <Block center>
            {
              cards.map(card => <Meal {...card}/>)
            }
          </Block>
          <Block right>
            <Button appearance='ghost'>See more ></Button>
          </Block>
        </Block>

        <Block>
            <Text category='h4' style={styles.menuTitle}>
              Recent Activity
            </Text>
            <Block center>
              {
                cards.map(card => <Meal {...card}/>)
              }
            </Block>
          </Block>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    paddingTop: theme.SIZES.BASE * 4,
    paddingBottom: theme.SIZES.BASE * 1,
    paddingHorizontal: theme.SIZES.BASE,

    backgroundColor: 'white',
    width,
    borderBottomWidth: 1,
    borderBottomColor: '#e3e3e3',
  },
  avatar: {
    width: 100,
    height: 100,
  },
  title: {
    paddingTop: theme.SIZES.BASE,
    paddingBottom: theme.SIZES.BASE,
  },
  meal: {
      backgroundColor: 'white',
      marginBottom: theme.SIZES.BASE,
  },
  mealTitle: {
      flex: 0,
      width: width - theme.SIZES.BASE * 12,
      overflow: 'hidden',
  },
  menuTitle: {
    margin: theme.SIZES.BASE,
  },
  mealContent: {
      padding: theme.SIZES.BASE / 2,
  },
  image: {
    width: theme.SIZES.BASE * 5,
    height: theme.SIZES.BASE * 5,
  },
});

export default Menu;
