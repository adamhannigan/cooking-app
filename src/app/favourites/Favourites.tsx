import React from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
} from 'react-native';

import { Text } from '@ui-kitten/components'

// galio components
import {
  Block, theme,
} from 'galio-framework';


interface Props {
  id: number
}

const Favourites = ({ id }: Props) => {
  return (
    <View style={{ flex: 1 }}>
      <ScrollView style={{ flex: 1 }}>
        <Block style={{ marginTop: - theme.SIZES.BASE * 2 }}>
            <Text>What is the purpose of this view. What are users trying to acheive</Text>
        </Block>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  item: {

  }
});

export default Favourites;
