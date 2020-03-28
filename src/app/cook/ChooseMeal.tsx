import React from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Dimensions,
} from 'react-native';

import { Text, Input, Icon, useTheme } from '@ui-kitten/components'
import { useNavigation } from '@react-navigation/native'

// galio components
import {
  Block, theme
} from 'galio-framework';

import { meals } from '../../constants/dummyData'

import { MealBox } from './MealBox'
import { Recommendations } from './Recommendations'
import { Search } from './Search'

const { width } = Dimensions.get('screen');

const ChooseMeal = props => {
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const kittenTheme = useTheme()
  const navigation = useNavigation()

  const [search, setSearch] = React.useState('')
  const [isSearching, setIsSearching] = React.useState(false)

  return (
    <View style={{ flex: 1 }}>
      <ScrollView style={{ flex: 1 }}>
        <Block center style={{ marginTop: -theme.SIZES.BASE * 2 }}>
          <Block flex style={styles.header}>
            <Text category='h3'>
              What did you cook?
            </Text>
            <Text category='p'>
              Pick a meal from your menu, one of your saved items or search for a new meal.
            </Text>
            <Input
              placeholder="Search for recipes"
              style={styles.search}
              value={search}
              onChange={e => setSearch(e.target)}
              onFocus={() => setIsSearching(true)}
              onBlur={() => setIsSearching(false)}
            />
          </Block>
          {
            !isSearching && <Recommendations />
          }
          {
            isSearching && <Search />
          }

        </Block>
      </ScrollView>
    </View>
  )
};

const styles = StyleSheet.create({
  header: {
    borderTopLeftRadius: theme.SIZES.BASE * 2,
    borderTopRightRadius: theme.SIZES.BASE * 2,
    paddingTop: theme.SIZES.BASE * 2,
    paddingHorizontal: theme.SIZES.BASE * 1,
    width,
    backgroundColor: 'white',
  },
  content: {
    width,
    marginBottom: theme.SIZES.BASE * 2,
  },
  search: {
    marginTop: theme.SIZES.BASE,
    marginBottom: theme.SIZES.BASE / 2,
  },
  heading: {
    paddingHorizontal: theme.SIZES.BASE / 2,
    paddingTop: theme.SIZES.BASE / 2,
  },
  meals: {
    display: 'flex',
    flexDirection: 'row',
    width,
    overflow: 'scroll',
  },
});

export default ChooseMeal;
