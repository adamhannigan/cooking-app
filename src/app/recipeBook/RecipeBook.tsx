import React from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
} from 'react-native';

import { Text, Input } from '@ui-kitten/components'

// galio components
import {
  Block, theme,
} from 'galio-framework';

import MealList from './MealList';


interface Props {
  id: number
}

const RecipeBook = ({ id }: Props) => {
  const [search, setSearch] = React.useState('')
  
  return (
    <View style={{ flex: 1 }}>
      <ScrollView style={{ flex: 1 }}>
        <Block style={styles.container}>
            <MealList />
        </Block>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: theme.SIZES.BASE / 2,
  }
});

export default RecipeBook;
