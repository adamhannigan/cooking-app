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

import { useNavigation } from '@react-navigation/native'
import { useTheme } from '@ui-kitten/components'

import FAB from 'react-native-fab'

// galio components
import {
  Block, Icon, NavBar, theme, Text,
} from 'galio-framework';

import { useRoute, useIsFocused } from '@react-navigation/native'

import { meals } from '../../constants/dummyData'

import MealCard from './components/MealCard'

const { width, height } = Dimensions.get('screen');

const Feed = props => {
  const navigation = useNavigation()
  const [isFocused, setIsFocused ] = React.useState<boolean>(false)
  const kittenTheme = useTheme()

  React.useEffect(() => {
    const focus = async () => {
      await new Promise(r => setTimeout(r, 500))

      setIsFocused(true)
    }

    focus()
  }, [])

  return (
    <View style={{ flex: 1 }}>
      <ScrollView style={{ flex: 1 }}>
        <Text>{isFocused ? 'focused' : 'not'}</Text>
        <Block center style={{ marginTop: - theme.SIZES.BASE * 2 }}>
          <Block flex style={styles.header}>
            <Block center>
              {
                meals.map(meal => <MealCard {...meal}/>)
              }
            </Block>
          </Block>
        </Block>
      </ScrollView>
      <FAB buttonColor={kittenTheme['color-primary-400']} iconTextColor="#FFFFFF" onClickAction={() => navigation.navigate('ChooseMeal')} visible={isFocused} iconTextComponent={
          (
            <Icon name='plus' family='AntDesign' size={30} />
          )
        }
      />
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    borderTopLeftRadius: theme.SIZES.BASE * 2,
    borderTopRightRadius: theme.SIZES.BASE * 2,
    paddingVertical: theme.SIZES.BASE * 2,
    paddingHorizontal: theme.SIZES.BASE * 1.5,
    width,
    paddingBottom: theme.SIZES.BASE * 3,
  },
  title: {
    paddingTop: theme.SIZES.BASE,
    paddingBottom: theme.SIZES.BASE,
  },
  fab: {
    position: 'absolute',
  },
});

export default Feed;
