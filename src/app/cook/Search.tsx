import React from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Dimensions,
} from 'react-native';

import { Text } from '@ui-kitten/components'
import { useNavigation } from '@react-navigation/native'

// galio components
import {
  Block, theme
} from 'galio-framework';

import { meals } from '../../constants/dummyData'

import { MealBox } from './MealBox'

const { width } = Dimensions.get('screen');

export const Search = props => {
  return (
    <Block>
        <Text>
            Coming Soon
        </Text>
    </Block>
  )
};

const styles = StyleSheet.create({
});
