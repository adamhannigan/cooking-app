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

import { Text, List, Avatar, Button } from '@ui-kitten/components'

import Constants from 'expo-constants';

const { statusBarHeight } = Constants;

import PersonItem, { Person } from 'components/PersonItem'

// galio components
import {
  Block, Icon, NavBar, theme, Input
} from 'galio-framework';

import MealSummary from 'app/home/myMenu/components/MealSummary'

import { groups, meals } from 'constants/dummyData'

const { width, height } = Dimensions.get('screen');

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
                groups.map(group => {
                  console.log('Got group', group)
                    const list: Person = group.people.map(person => ({
                      primary: person.name,
                      secondary: person.preferences.map(p => p.name),
                      action: {
                          primary: followed.includes(person.name) ? 'Following' : 'Follow',
                          onClick: () => onFollow(person.name),
                      },
                      isSelected: followed.includes(person.name)
                    }))

                    return (
                      <Block style={styles.group}>
                          <Text category='h4' style={styles.title}>
                              {group.preference.name}
                          </Text>
                          <List
                            data={list}
                            renderItem={PersonItem}
                          />
                      </Block>
                    )
                  })
            }
        </Block>
        <Block>
            <Block center>
              {
                meals.map(meal => <MealSummary {...meal}/>)
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
    borderBottomWidth: 1,
    borderTopColor: '#e3e3e3',
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
