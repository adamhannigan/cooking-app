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

import { Text, Button, List } from '@ui-kitten/components'

import Constants from 'expo-constants';

const { statusBarHeight } = Constants;


// galio components
import {
  Block, Icon, NavBar, theme
} from 'galio-framework';

import PersonItem, { Person } from 'components/PersonItem'
import { groups } from 'constants/dummyData'

const { width, height } = Dimensions.get('screen');

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
                groups.map(group => {

                const data = group.people.map(person => ({
                  primary: person.name,
                  secondary: person.preferences.join(''),
                  action: {
                    primary: followed.includes(person.name) ? 'Following' : 'Follow',
                    onClick: () => onFollow(person.name),
                  },
                  isSelected: followed.includes(person.name)
                }))

                return (
                  <Block>
                      <Text category='h4' style={styles.title}>
                          {group.title}
                      </Text>
                      <List
                        data={data}
                        renderItem={PersonItem}
                        style={styles.group}
                      />
                  </Block>
                )
              })
            }
        </Block>
      </ScrollView>
      <Block style={styles.bottomBar}>
          <Button
            size='medium'
            appearance='ghost'
            status='primary'
            onPress={() => navigation.navigate('/onboard/meals')}
          >
            Skip for now
          </Button>
          <Button
            size='medium'
            status='primary'
            disabled={followed.length === 0}
            onPress={() => navigation.navigate('/onboard/meals')}
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
  title: {
    paddingTop: theme.SIZES.BASE,
    paddingBottom: theme.SIZES.BASE / 2,
    paddingLeft: theme.SIZES.BASE,
  },
});

export default Follow;
