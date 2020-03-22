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

const { width, height } = Dimensions.get('screen');

const data = activity.map(item => ({
  title: item.name,
  description: item.action,
}))

const Activity = ({ navigation }) => {
  const renderItem = ({ item, index }) => (
    <ListItem
      title={item.title}
      description={item.description}
      icon={() => (
        <Avatar
          source={{
              uri: 'http://i.pravatar.cc/30?id=skater',
          }}
      />)
    }
    />
  );

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
              renderItem={renderItem}
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
