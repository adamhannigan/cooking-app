import React from 'react';
import {
  Image,
  StatusBar,
  StyleSheet,
  ScrollView,
  View,
  Dimensions,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';

import { Text, Avatar, Button } from '@ui-kitten/components'
import { useNavigation } from '@react-navigation/native'

import { NavProp } from 'Navigation'

import Constants from 'expo-constants';

const { statusBarHeight } = Constants;

import MealSummary from './components/MealSummary'


// galio components
import {
  Block, Icon, NavBar, theme, Input,
} from 'galio-framework';

import { meals } from 'constants/dummyData'
const { width, height } = Dimensions.get('screen');

const Menu = () => {
  const [selected, setSelected] = React.useState([])
  const navigation = useNavigation<NavProp>()
  
  const onClick = (id: number) => {
    navigation.navigate('/meal/:id', {
      id,
    })
  }

  return (
    <View style={{ flex: 1 }}>
      <ScrollView style={{ flex: 1 }}>
        <Block style={{ marginTop: - theme.SIZES.BASE * 2 }}>
          <Block center flex style={styles.header}>
            <TouchableOpacity onPress={() => navigation.navigate('Preferences')}>
              <Avatar
                  style={styles.avatar}
                  source={{
                      uri: 'http://i.pravatar.cc/100?id=skater',
                  }}
              />
            </TouchableOpacity>
            <Text category='h4'>
              Adam Hannigan
            </Text>
            <Text category='h4' >
              🐔🍖🍅
            </Text>
            <Text category='p' >
              Lets go, cook some meat!
            </Text>
          </Block>
        </Block>
          
        <Block>
          <Text category='h4' style={styles.menuTitle}>
            On the menu
          </Text>
          <Block center>
            {
              meals.map(card => (
                <TouchableOpacity onPress={() => onClick(card.id)}>
                  <MealSummary {...card}/>
                </TouchableOpacity>
              ))
            }
          </Block>
        </Block>

        <Block>
            <Text category='h4' style={styles.menuTitle}>
              Recents
            </Text>
            <Block center>
              {
                meals.map(card => (
                  <TouchableOpacity onPress={() => onClick(card.id)}>
                    <MealSummary {...card}/>
                  </TouchableOpacity>
                ))
              }
            </Block>
          </Block>
          <Block right>
            <Button appearance='ghost'>See more ></Button>
          </Block>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    paddingTop: theme.SIZES.BASE * 4,
    paddingBottom: theme.SIZES.BASE * 1,
    paddingHorizontal: theme.SIZES.BASE,

    backgroundColor: 'white',
    width,
    borderBottomWidth: 1,
    borderBottomColor: '#e3e3e3',
  },
  avatar: {
    width: 100,
    height: 100,
  },
  title: {
    paddingTop: theme.SIZES.BASE,
    paddingBottom: theme.SIZES.BASE,
  },
  meal: {
      backgroundColor: 'white',
      marginBottom: theme.SIZES.BASE,
  },
  mealTitle: {
      flex: 0,
      width: width - theme.SIZES.BASE * 12,
      overflow: 'hidden',
  },
  menuTitle: {
    margin: theme.SIZES.BASE,
  },
  mealContent: {
      padding: theme.SIZES.BASE / 2,
  },
  image: {
    width: theme.SIZES.BASE * 5,
    height: theme.SIZES.BASE * 5,
  },
});

export default Menu;
