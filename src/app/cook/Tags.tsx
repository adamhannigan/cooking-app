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

const preferences = [{
  group: 'Lifestyle',
  items: ['Vegetarian 🥒', 'Vegan 🍆', 'Fitness 💪']
}, {
  group: 'Meals',
  items: ['Stir Fries 🍚', 'BBQ 🍖', 'Pasta 🥘']
}, {
  group: 'Countries',
  items: ['Indian 🇮🇳', 'Thai 🇹🇭', 'Japan 🇯🇵 ']
}]

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
          {
            preferences.map(preference => (
              <Block style={styles.group}>
                  <Block>
                      <Text category='h5' style={styles.title}>
                        {preference.group}
                      </Text>
                  </Block>
                  <Block style={styles.tags}>
                      {
                        preference.items.map(item => {
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
            status='primary'
            onPress={() => navigation.navigate('Home')}
          >
            Next
          </Button>
      </Block>
    </View>
  )
}

const styles = StyleSheet.create({
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
      paddingBottom: 20,
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
