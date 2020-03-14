import React from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Dimensions,
} from 'react-native';

import { Text, Tab, TabView, useTheme } from '@ui-kitten/components'
import { useNavigation } from '@react-navigation/native'

// galio components
import {
  Block, Input, theme, Icon
} from 'galio-framework';

import { meals } from '../../constants/dummyData'

import { MealBox } from './MealBox'

const { width } = Dimensions.get('screen');

const ChooseMeal = props => {
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const kittenTheme = useTheme()
  const navigation = useNavigation()

  return (
    <View style={{ flex: 1 }}>
      <ScrollView style={{ flex: 1 }}>
        <Block center style={{ marginTop: -theme.SIZES.BASE * 2 }}>
          <Block flex style={styles.header}>
            <Text category='h3' style={styles.title}>
              What did you cook?
            </Text>
            <Input
              placeholder="Input with Icon on right"
              right
              rounded
              icon="heart"
              family="antdesign"
              iconSize={14}
              iconColor="red"
            />
          </Block>
          <Block style={styles.content}>
            <TabView
              selectedIndex={selectedIndex}
              onSelect={setSelectedIndex}
              tabBarStyle={styles.tabs}
            >
              <Tab title='Your menu' icon={() => (
                <Icon
                  name='book'
                  family='AntDesign'
                  size={25}
                  color={selectedIndex === 0 ? kittenTheme['color-primary-default'] : kittenTheme['text-hint-color']}
                />
              )}>
                <Block style={styles.meals}>
                  {
                    meals.map(meal => (
                      <MealBox
                        {...meal}
                        onClick={() => navigation.navigate('Cook')}
                      />
                    ))
                  }
                </Block>
              </Tab>
              <Tab title='Saved' icon={() => (
                <Icon
                  name='staro'
                  family='AntDesign'
                  size={25}
                  color={selectedIndex === 1 ? kittenTheme['color-primary-default'] : kittenTheme['text-hint-color']}
                />
              )}>
                <Block style={styles.meals}>
                  {
                    meals.map(meal => (
                      <MealBox
                        {...meal}
                        onClick={() => navigation.navigate('Cook')}
                      />
                    ))
                  }
                </Block>
              </Tab>
            </TabView>
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

export default ChooseMeal;
