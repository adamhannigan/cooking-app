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

import { Text, Avatar, Button } from '@ui-kitten/components'

import Constants from 'expo-constants';

const { statusBarHeight } = Constants;

console.disableYellowBox = true
// galio components
import {
  Block, Icon, NavBar, theme, Input
} from 'galio-framework';

import Meal from '../feed/components/MealCard'

const { width, height } = Dimensions.get('screen');

const people = [{
  name: 'Adam Hannigan',
  preferences: ['💪Fitness', '🍖BBQ']
}, {
    name: 'Joe Rogan',
    preferences: ['💪Fitness', '🍖BBQ']
}]

const groups = [{
    title: '💪 Fitness Lovers',
    people,
}, {
    title: '🍆 Vegans',
    people,
}]

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
  likes: 62,
}, {
  title: 'Creamy Cajun Pasta',
  action: '👨‍🍳 Just cooked...',
  image: 'https://img.buzzfeed.com/video-api-prod/assets/ec15137f921a40f49317cd75d38a961d/BFV14804_Meal-PrepGarlicChickenAndVeggiePasta-TextlessThumb.jpg?output-quality=100&resize=900:*',
  preferences: ['💪 Fitness',  '🇲🇷 Italian'],
  likes: 12,
}]

const Search = ({ navigation }) => {
  const [followed, setFollowed] = React.useState([])

  const onFollow = (name: string) => {
    const alreadyExists = followed.includes(name)

    if (alreadyExists) {
        setFollowed(followed.filter(item => item !== name))
    } else {
        setFollowed([...followed, name])
    }
  }

  return (
    <View style={{ flex: 1 }}>
      <ScrollView style={{ flex: 1 }}>
      <Block flex style={styles.header}>
        <Text category='h4' style={styles.title}>
          Search for people and meals.
        </Text>
        <Input
          placeholder="Input with Icon on right"
          right
          rounded
          icon="search1"
          family="antdesign"
          iconSize={14}
        />
      </Block>
        <Block>
            {
                groups.map(group => (
                    <Block style={styles.group}>
                        <Text category='h4' style={styles.title}>
                            {group.title}
                        </Text>
                        {
                            group.people.map(person => {
                                const isFollowing = followed.includes(person.name)

                                return (
                                    <Block row space='between' style={styles.person}>
                                        <Block row>
                                            <Avatar
                                                style={styles.avatar}
                                                source={{
                                                    uri: 'http://i.pravatar.cc/100?id=skater',
                                                }}
                                            />
                                            <Block>
                                                <Text category='s1'>
                                                    {person.name}
                                                </Text>
                                                <Block flex row style={styles.preferences}>
                                                    {
                                                        person.preferences.map(preference => (
                                                            <Text category='s1' appearance='hint'>
                                                                {preference}
                                                            </Text>
                                                        ))
                                                    }
                                                </Block>
                                            </Block>
                                        </Block>
                                        <Button
                                            appearance='outline'
                                            status='primary'
                                            onPress={() => onFollow(person.name)}
                                            style={{
                                                backgroundColor: isFollowing ? '#fe9b0040' : 'white'
                                            }}
                                        >
                                            {
                                                isFollowing
                                                    ? 'Following'
                                                    : 'Follow'
                                            }
                                        </Button>
                                    </Block>
                                )
                            })
                        }
                    </Block>
                ))
            }
        </Block>
        <Block>
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
    paddingHorizontal: theme.SIZES.BASE,
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: '#e3e3e3',
  },
  group: {
    marginVertical: theme.SIZES.BASE * 1,
    paddingLeft: theme.SIZES.BASE,
    paddingRight: theme.SIZES.BASE,

    backgroundColor: 'white',
    width,
    borderTopWidth: 1,
    borderTopColor: '#e3e3e3',
    borderBottomWidth: 1,
    borderBottomColor: '#e3e3e3',
  },
  bottomBar: {
      padding: theme.SIZES.BASE / 2,
      backgroundColor: 'white',
      borderTopWidth: 1,
      borderTopColor: '#e3e3e3',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between'
  },
  person: {
    paddingTop: theme.SIZES.BASE,
    paddingBottom: theme.SIZES.BASE,
    borderBottomColor: '#e3e3e3',
    borderBottomWidth: 1,
  },
  avatar: {
      marginRight: 5,
  },
  preferences: {
      marginTop: -3,
  },
  title: {
    paddingTop: theme.SIZES.BASE,
    paddingBottom: theme.SIZES.BASE / 2,
  },
});

export default Search;
