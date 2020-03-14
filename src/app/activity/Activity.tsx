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

import { Text, Avatar, useTheme, withStyles, ThemedComponentProps } from '@ui-kitten/components'

import Constants from 'expo-constants';

const { statusBarHeight } = Constants;

console.disableYellowBox = true
// galio components
import {
  Block, Icon, NavBar, theme
} from 'galio-framework';

const { width, height } = Dimensions.get('screen');

const activity = [{
  name: 'Adam Hannigan',
  meal: 'Prawn Rissoto',
  action: 'Is craving your',
  icon: 'hearto',
}, {
    name: 'Joe Rogan',
    meal: 'Chicken Teriyaki & rice',
    action: 'Is cooking your',
    icon: 'rocket1',
}, {
    name: 'Victoria Mota',
    meal: 'Chicken Teriyaki & rice',
    action: 'Is planning to cook your',
    icon: 'book',

},{
    name: 'Victoria Mota',
    meal: 'Chicken Teriyaki & rice',
    action: 'Is hungry for your',
    icon: 'hearto',
}, {
    name: 'Adam Hannigan',
    meal: 'Chicken Teriyaki & rice',
    action: 'Added to their menu:',
    icon: 'book',
}]


const styles = (kittenTheme) => StyleSheet.create({
  header: {
    paddingTop: theme.SIZES.BASE * 2,
    paddingHorizontal: theme.SIZES.BASE,
    backgroundColor: 'white',
    width,
    borderBottomWidth: 1,
    borderBottomColor: '#e3e3e3',
  },
  group: {
    marginVertical: theme.SIZES.BASE * 1,
    paddingLeft: theme.SIZES.BASE,
    paddingRight: theme.SIZES.BASE,

    backgroundColor: 'white',
    width,
    borderTopWidth: 1,
    borderTopColor: '#e3e3e3',
    borderBottomWidth: 1,
    borderBottomColor: '#e3e3e3',
  },
  person: {
    paddingTop: theme.SIZES.BASE,
    paddingBottom: theme.SIZES.BASE,
    borderBottomColor: '#e3e3e3',
    borderBottomWidth: 1,
  },
  avatar: {
      marginRight: 5,
  },
  preferences: {
      marginTop: -3,
      width: width - 120,
  },
  title: {
    paddingTop: theme.SIZES.BASE,
    paddingBottom: theme.SIZES.BASE / 2,
  },
  mealText: {
      color: kittenTheme['color-primary-default'],
      paddingLeft: 3,
      fontWeight: 'bold',
  },
});

type ThemeStyles = ThemedComponentProps<ReturnType<typeof styles>>

const Activity = ({ navigation, themedStyle }: ThemeStyles) => {
  const [followed, setFollowed] = React.useState([])

  const kittenTheme = useTheme()

  return (
    <View style={{ flex: 1 }}>
      <ScrollView style={{ flex: 1 }}>
        <Block center style={{ marginTop: - theme.SIZES.BASE * 2 }}>
          <Block flex style={themedStyle.header}>
            <Text category='h4' style={themedStyle.title}>
              What's been happening?
            </Text>
          </Block>
          <Block style={themedStyle.group}>
            {
                activity.map(person => (
                    <Block row space='between' style={themedStyle.person}>
                        <Block row center space='between'>
                            <Block row>
                                <Avatar
                                    style={themedStyle.avatar}
                                    source={{
                                        uri: 'http://i.pravatar.cc/100?id=skater',
                                    }}
                                />

                                <Block>
                                    <Text category='s1' numberOfLines={1}>
                                        {person.name}
                                    </Text>
                                    <Block flex row style={themedStyle.preferences}>
                                        <Text category='s1' appearance='hint' numberOfLines={2}>
                                            {`${person.action} `}
                                            <Text category='s1' style={themedStyle.mealText} numberOfLines={1}>
                                                {person.meal}
                                            </Text>
                                        </Text>

                                    </Block>
                                </Block>
                            </Block>
                        </Block>
                        <Icon name={person.icon} color={kittenTheme['color-primary-default']} family={person.family || "AntDesign"} size={30} />
                    </Block>
                ))
            }
            </Block>
        </Block>
      </ScrollView>
    </View>
  )
}

export default withStyles(Activity, styles);

