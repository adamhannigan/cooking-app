import React from 'react';
import {
  StyleSheet,
  Dimensions,
} from 'react-native';

import { Input } from '@ui-kitten/components'

import { useNavigation } from '@react-navigation/native';

import {
  Block, theme
} from 'galio-framework';

import { Recommendations } from 'app/cook/Recommendations'
import { Search } from 'app/cook/Search'
import { Meal } from 'constants/dummyData'
import { Routes, NavProp } from 'Navigation'

const { width } = Dimensions.get('screen')

const MealList = props => {
  const [search, setSearch] = React.useState('')
  const [isSearching, setIsSearching] = React.useState(false)

  const navigation = useNavigation<NavProp>()

  const onSelect = (meal: Meal) => {
    navigation.navigate('/meal/:id', {
      id: meal.id,
    })
  }

  return (
    <Block center>
        <Input
            placeholder="Search for recipes"
            style={styles.search}
            value={search}
            onChange={e => setSearch(e.target as unknown as string)}
            onFocus={() => setIsSearching(true)}
            onBlur={() => setIsSearching(false)}
        />
        {
          !isSearching && <Recommendations onSelect={onSelect} />
        }
        {
          isSearching && <Search />
        }
    </Block>
  )
};

const styles = StyleSheet.create({
  search: {
    marginTop: theme.SIZES.BASE,
    marginBottom: theme.SIZES.BASE / 2,
  },
});

export default MealList;
