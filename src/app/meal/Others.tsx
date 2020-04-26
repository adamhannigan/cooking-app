import React from 'react';
import {
  Image,
  StatusBar,
  StyleSheet,
  ScrollView,
  View,
  Linking,
  Dimensions,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';

import { Text, useTheme } from '@ui-kitten/components'
import {
    useNavigation,
    useRoute,
    RouteProp,
    NavigationProp
} from '@react-navigation/native'

import Constants from 'expo-constants';

import { Route } from 'Navigation'

const { statusBarHeight } = Constants;

// galio components
import {
  Block, Icon, NavBar, theme, Input,
} from 'galio-framework';

import { meals } from 'constants/dummyData'
import Meal from 'app/home/feed/components/Meal';

import InfoBlock from './components/InfoBlock'
import AvatarHeader from 'app/home/feed/components/AvatarHeader';
import MealSummary from 'app/profile/components/MealSummary'

const { width, height } = Dimensions.get('screen');

const Others = () => {
  const navigation = useNavigation()
  const route = useRoute<Route<'/meal/:id'>>()

  const meal = meals.find(meal => meal.id === route.params.id)

  const kittenTheme = useTheme()

  return (
    <Block style={styles.container}>
        <Text style={styles.title} category='h4'>Who else cooked this?</Text>
        <Block style={styles.item}>
            <AvatarHeader
                name='John Smith'
                time='12 days ago'
                avatarUrl=''
                userId={meal.user.id}
            />
            <MealSummary {...meal} />
        </Block>
        <Block style={styles.item}>
            <AvatarHeader
                name='John Smith'
                time='12 days ago'
                avatarUrl=''
                userId={meal.user.id}
            />
            <MealSummary {...meal} />
        </Block>
    </Block>
  )
}

const styles = StyleSheet.create({
    container: {
        marginTop: theme.SIZES.BASE,
    },
    title: {
        padding: theme.SIZES.BASE,
    },
    item: {
        marginBottom: theme.SIZES.BASE,
        borderBottomWidth: 1,
        borderTopWidth: 1,
        borderColor: '#e3e3e3',
        backgroundColor: 'white',
    }
});

export default Others;
