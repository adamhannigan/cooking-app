import React from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Dimensions,
} from 'react-native';

import { Text } from '@ui-kitten/components'

import { activities } from 'constants/dummyData'

// galio components
import {
  Block, theme
} from 'galio-framework';

import Event from './Event'

const { width } = Dimensions.get('screen');

const Activity = ({ navigation }) => {
  return (
    <View style={{ flex: 1 }}>
      <ScrollView style={{ flex: 1 }}>
        <Block>
          <Block flex style={styles.header}>
            <Text category='h4' style={styles.title}>
              What's been happening.
            </Text>
          </Block>
        </Block>
        {
          activities.map(activity => <Event {...activity} />)
        }
        <Block center>
          <Text appearance='hint'>No more activity, start cooking!</Text>
        </Block>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: theme.SIZES.BASE,
    backgroundColor: 'white',
    width,
    borderBottomWidth: 1,
    borderBottomColor: '#e3e3e3',

    marginBottom: theme.SIZES.BASE,
  },
  title: {
    paddingTop: theme.SIZES.BASE,
    paddingBottom: theme.SIZES.BASE / 2,
    paddingLeft: theme.SIZES.BASE,
  },
});

export default Activity;
