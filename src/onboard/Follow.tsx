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
  Block, Icon, NavBar, theme
} from 'galio-framework';

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

const Follow = ({ navigation }) => {
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
        <Block center style={{ marginTop: - theme.SIZES.BASE * 2 }}>
          <Block flex style={styles.header}>
            <Text category='h4' style={styles.title}>
              Suggestions for you to follow.
            </Text>
            <Text category='p' style={styles.title}>
              When you follow someone you will see their favourite recipes and what they are cooking tonight!
            </Text>
          </Block>
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
      </ScrollView>
      <Block style={styles.bottomBar}>
          <Button
            size='medium'
            appearance='ghost'
            status='primary'
            onPress={() => navigation.navigate('Menu')}
          >
            Skip for now
          </Button>
          <Button
            size='medium'
            status='primary'
            disabled={followed.length === 0}
            onPress={() => navigation.navigate('Menu')}
          >
            Next
          </Button>
      </Block>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    paddingTop: theme.SIZES.BASE * 2,
    paddingHorizontal: theme.SIZES.BASE,
    backgroundColor: 'white',
    width,
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

export default Follow;
