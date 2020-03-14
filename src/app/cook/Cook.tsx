import React from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Dimensions,
} from 'react-native';

import { Text, useTheme, Input } from '@ui-kitten/components'

// galio components
import {
  Block, theme,
} from 'galio-framework';

const { width } = Dimensions.get('screen');

const Cook = props => {
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const kittenTheme = useTheme()
  const [value, setValue] = React.useState('')

  return (
    <View style={{ flex: 1 }}>
      <ScrollView style={{ flex: 1 }}>
        <Block center style={{ marginTop: -theme.SIZES.BASE * 2 }}>
          <Block flex style={styles.header}>
            <Text category='h3' style={styles.title}>
              Tell us about it.
            </Text>
            <Input
                placeholder='Place your Text'
                value={value}
                onChangeText={setValue}
                numberOfLines={3}
            />
          </Block>
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
    paddingHorizontal: theme.SIZES.BASE * 1.5,
    width,
  },
  content: {
    width,
  },
  title: {
    paddingTop: theme.SIZES.BASE,
  },
  tabs: {
    backgroundColor: '#f0f0f0',
  },
  meals: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    width,
  },
});

export default Cook;
