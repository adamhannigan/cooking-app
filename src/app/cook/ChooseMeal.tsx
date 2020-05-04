import React from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Dimensions,
} from 'react-native';

import { Text, Input, Icon, useTheme, Button } from '@ui-kitten/components'
import { useNavigation } from '@react-navigation/native'

// galio components
import {
  Block, theme
} from 'galio-framework';

import { meals, Meal } from '../../constants/dummyData'

import { prepareMeal } from './NewMeal'
import YourMenu from './YourMenu'
import { NavProp } from 'Navigation';
import OrDivider from './components/OrDivider';

const { width } = Dimensions.get('screen');

const ChooseMeal = props => {
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const kittenTheme = useTheme()
  const navigation = useNavigation<NavProp>()

  const onSelect = (meal: Meal) => {
    navigation.navigate('/cook/:id?', {
      id: meal.id,
    })
  }

  const onStartNewMeal = () => {
    navigation.navigate('/cook/:id?', {
      id: 22,
    })
  }

  return (
    <View style={{ flex: 1 }}>
      <ScrollView style={{ flex: 1 }}>
        <Block style={{ marginTop: -theme.SIZES.BASE * 2 }}>
          <Block flex style={styles.header}>
            <Text category='h3'>
              What did you cook?
            </Text>
            <Text category='p'>
              Start a meal from scratch or pick a meal from your menu.
            </Text>
          </Block>
          <Block style={styles.container}>
            <Button
              status='info'
              onPress={onStartNewMeal}
            >
              Start a new meal
            </Button>
            <OrDivider />
          </Block>
          <YourMenu onSelect={onSelect} />
        </Block>
      </ScrollView>
    </View>
  )
};

const styles = StyleSheet.create({
  header: {
    borderTopLeftRadius: theme.SIZES.BASE * 2,
    borderTopRightRadius: theme.SIZES.BASE * 2,
    paddingTop: theme.SIZES.BASE * 3,
    paddingBottom: theme.SIZES.BASE * 2,
    padding: theme.SIZES.BASE * 1,
    marginBottom: theme.SIZES.BASE * 2,

    width,
    backgroundColor: 'white',

    borderBottomWidth: 1,
    borderColor: '#ddd',
  },
  container: {
    paddingHorizontal: theme.SIZES.BASE,
  },
});

export default ChooseMeal;
