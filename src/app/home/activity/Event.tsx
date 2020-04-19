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

import { Text, Avatar } from '@ui-kitten/components'

import { Activity } from 'constants/dummyData'

// galio components
import {
  Block, theme
} from 'galio-framework';

import drool from 'app/home/feed/components/assets/droolFrame.gif'
import Chef from './assets/chef.svg'
import Menu from './assets/menu-board.svg'
import { useNavigation } from '@react-navigation/native';
import { NavProp } from 'Navigation';

const { width } = Dimensions.get('screen');

const Event = ({ event, meal, user }: Activity) => {
    const DroolEvent = () => (
        <Block styles={styles.content}>
            <Text numberOfLines={2}>
                <Text style={styles.bold}>
                    {user.name}
                </Text>
                {' '}drooled over your
                <Text style={styles.bold} status='info'>
                {' '}{meal.title}
                </Text>
            </Text>
            <Block row>
                <Image
                    source={drool}
                    style={styles.icon}
                />
                <Text appearance='hint'>14h</Text>
            </Block>
        </Block>
    )

    const MenuEvent = () => (
        <Block style={styles.text}>
            <Text numberOfLines={2}>
                <Text style={styles.bold}>
                    {user.name}
                </Text>
                {' '}added your
                <Text style={styles.bold} status='info'>
                {' '}{meal.title}
                </Text>
                {' '}to their menu
            </Text>
            <Block row>
                <Menu width={20} height={24} style={styles.icon}/>
                <Text appearance='hint'>14h</Text>
            </Block>
        </Block>
    )

    const CookedEvent = () => (
        <React.Fragment>
            <Block style={styles.text} key='1'>
                <Text numberOfLines={2}>
                    <Text style={styles.bold}>
                        {user.name}
                    </Text>
                    {' '}cooked your
                    <Text style={styles.bold} status='info'>
                        {' '}{meal.title}
                    </Text>
                </Text>
                <Block row>
                    <Chef width={20} style={styles.icon}/>
                    <Text appearance='hint'>14h</Text>
                </Block>
            </Block>
            <Image
                key='2'
                source={{
                    uri: meal.image
                }}
                style={styles.previewMeal}
            />
        </React.Fragment>
    )

    const navigation = useNavigation<NavProp>()
    const onClick = () => {
        if (event === 'menu') {
            // Take them to the user's menu
            navigation.navigate('/profile/:id', {
                id: user.id,
            })
        } else {
            // Take them to their meal
            navigation.navigate('/meal/:id', {
                id: meal.id,
            })
        }

        // TODO - if the user of the meal is not the same as current user, take them to cooked meal
    }

    return (
        <TouchableOpacity onPress={onClick}>
            <Block style={styles.container}>
                <Avatar
                    style={styles.avatar}
                    source={{
                        uri: 'http://i.pravatar.cc/100?id=skater',
                    }}
                />
                {
                    event === 'drooled' && <DroolEvent />
                }
                {
                    event === 'menu' && <MenuEvent />
                }
                {
                    event === 'cooked' && <CookedEvent />
                }
            </Block>
        </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderColor: '#e3e3e3',

    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    width,

    marginVertical: 5,

    padding: theme.SIZES.BASE / 2,
  },
  avatar: {
    marginRight: theme.SIZES.BASE / 2,
    width: 60,
    height: 60,

    borderWidth: 1,
    borderColor: '#ddd',
  },
  text: {
    flex: 1,
    marginRight: 2,
  },
  bold: {
    fontWeight: 'bold',
  },
  icon: {
    width: 20,
    height: 20,
    marginRight: 5,
  },
  content: {
    flex: 1,
  },
  previewMeal: {
    width: 60,
    height: 60,
    borderRadius: 5,
  }
});

export default Event;
