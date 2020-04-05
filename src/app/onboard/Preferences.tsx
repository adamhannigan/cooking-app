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


// galio components
import {
  Block, Icon, NavBar, theme
} from 'galio-framework';

const { width, height } = Dimensions.get('screen');

import { tagGroups } from 'constants/dummyData'

const Preferences = ({ navigation }) => {
  const [selected, setSelected] = React.useState([])

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
        <Block center style={{ marginTop: - theme.SIZES.BASE * 2 }}>
          <Block flex style={styles.header}>
            <Text category='h4' style={styles.title}>
              What are you interested in?
            </Text>
            <Text category='p' style={styles.title}>
              Select some foods and lifestyles you are interested in to help personalize your menu experience and find similar people to follow.
            </Text>
          </Block>
          {
            tagGroups.map(group => (
              <Block style={styles.group}>
                  <Block>
                      <Text category='h5' style={styles.title}>
                        {group.name}
                      </Text>
                  </Block>
                  <Block style={styles.tags}>
                      {
                        group.items.map(item => {
                          const isSelected = selected.includes(item)

                          return (
                            <Button
                              style={{
                                ...styles.tag,
                                backgroundColor: isSelected ? '#fe9b0040' : 'white'
                              }}
                              appearance={'outline' }
                              status='primary'
                              onPress={() => onSelect(item)}
                            >
                                {item}
                              </Button>
                          )
                        })
                      }
                  </Block>
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
            onPress={() => navigation.navigate('Follow')}
          >
            Skip for now
          </Button>
          <Button
            size='medium'
            status='primary'
            onPress={() => navigation.navigate('Follow')}
            disabled={selected.length === 0}
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
    paddingHorizontal: theme.SIZES.BASE,
    backgroundColor: 'white',
    width,
    paddingBottom: theme.SIZES.BASE,
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
  tags: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  tag: {
    marginRight: theme.SIZES.BASE / 2,
    marginBottom: theme.SIZES.BASE / 2,
    borderRadius: 50,
  },
  title: {
    paddingTop: theme.SIZES.BASE,
    paddingBottom: theme.SIZES.BASE,
  },
});

export default Preferences;
