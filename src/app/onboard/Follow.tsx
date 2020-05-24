import React, { useEffect } from 'react';
import {
  Image,
  StatusBar,
  StyleSheet,
  ScrollView,
  View,
  Dimensions,
  TouchableOpacity
} from 'react-native';

import {
  Text,
  Button, 
  List,
  Spinner,
} from '@ui-kitten/components'

import Constants from 'expo-constants';

const { statusBarHeight } = Constants;


// galio components
import {
  Block, Icon, NavBar, theme
} from 'galio-framework';

import PersonItem, { Person } from 'components/PersonItem'
import { User, UserModel } from 'domain/users/model';

const { width, height } = Dimensions.get('screen');

const Follow = ({ navigation }) => {
  const [isLoading, setIsLoading] = React.useState(true)
  const [users, setUsers] = React.useState<User[]>([])
  const [followed, setFollowed] = React.useState<User[]>([])

  useEffect(() => {
    const load = async () => {
      const suggestedUsers = await UserModel.listUsers()
      setUsers(suggestedUsers)

      setIsLoading(false)
    }

    load()
  })


  const onFollow = (user: User) => {
    const alreadyExists = followed.find(follow => follow.id === user.id)

    if (alreadyExists) {
        setFollowed(followed.filter(item => item.id !== user.id))
    } else {
        setFollowed([...followed, user])
    }
  }

  const onNext = async () => {
    const followPromises = followed.map(UserModel.follow)

    await Promise.all(followPromises)

    // TODO save followers
    navigation.navigate('/onboard/meals')
  }

  const listItems = users.map(person => ({
    primary: person.username,
    action: {
      primary: followed.find(user => user.id === person.id) ? 'Following' : 'Follow',
      onClick: () => onFollow(person),
    },
    isSelected: followed.find(user => user.id === person.id),
  }))

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
            isLoading && (
              <Spinner size='large' />
            )
          }
          <Block style={styles.group}>
              <List
                data={listItems}
                renderItem={PersonItem}
                style={styles.group}
              />
          </Block>
        </Block>
      </ScrollView>
      <Block style={styles.bottomBar}>
          <Button
            size='medium'
            appearance='ghost'
            status='primary'
            onPress={onNext}
          >
            Skip for now
          </Button>
          <Button
            size='medium'
            status='primary'
            disabled={followed.length === 0}
            onPress={onNext}
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

    backgroundColor: 'white',
    width,
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
  title: {
    paddingTop: theme.SIZES.BASE,
    paddingBottom: theme.SIZES.BASE / 2,
    paddingLeft: theme.SIZES.BASE,

    borderBottomWidth: 1,
    borderBottomColor: '#e3e3e3',
  },
});

export default Follow;
