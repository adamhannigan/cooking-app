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

import { Text, Avatar, Button, List, ListItem } from '@ui-kitten/components'

import { activity } from 'constants/dummyData'

// galio components
import {
  Block, Icon, NavBar, theme
} from 'galio-framework';

import PersonItem, { Person } from 'components/PersonItem'

const { width, height } = Dimensions.get('screen');

const data: Person[] = activity.map(item => ({
  primary: item.name,
  secondary: item.action,
}))

const Activity = ({ navigation }) => {
  return (
    <View style={{ flex: 1 }}>
      <ScrollView style={{ flex: 1 }}>
        <Block style={{ marginTop: - theme.SIZES.BASE * 2 }}>
          <Block flex style={styles.header}>
            <Text category='h4' style={styles.title}>
              What's been happening.
            </Text>
          </Block>
          <Block>
            <List
              data={data}
              renderItem={PersonItem}
            />
          </Block>
        </Block>
      </ScrollView>
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
  title: {
    paddingTop: theme.SIZES.BASE,
    paddingBottom: theme.SIZES.BASE / 2,
    paddingLeft: theme.SIZES.BASE,
  },
  row: {
    width: '100%',
    display: 'flex',
    flex: 1,
  },
  avatar: {
    width: 20,
    height: 20,
  }
});

export default Activity;
