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

import { Recommendations } from 'app/recipeBook/components/Recommendations'
import { Search } from 'app/cook/components/Search'
import { Meal } from 'constants/dummyData'
import { Routes, NavProp } from 'Navigation'

const { width } = Dimensions.get('screen')

interface Props {
  hideCooked?: boolean
}

const MealList: React.FC<Props> = ({ hideCooked }) => {
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
      <Recommendations
        hideCooked={hideCooked}
        onSelect={onSelect}
      />
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
