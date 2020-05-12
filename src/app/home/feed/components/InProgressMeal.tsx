import React from 'react';
import {
  StyleSheet,
  Dimensions,
  Image,
} from 'react-native';

import { useNavigation, useIsFocused } from '@react-navigation/native'


import { Meal as IMeal } from '../../../../constants/dummyData'
// galio components
import {
  Block, theme
} from 'galio-framework';

import { Text, Avatar, useTheme } from '@ui-kitten/components'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { NavProp } from 'Navigation';

import BakingSVG from './assets/baking.svg'
import { InProgressMealModel } from 'domain/inProgressMeals/model';

const { width } = Dimensions.get('screen');

interface Props {}

const InProgressMeal = () => {
    const navigation = useNavigation<NavProp>()
    const [meal, setMeal] = React.useState<Meal>(null)

    const isFocused = useIsFocused()

    React.useEffect(() => {
        const load = async () => {
            const inProgressMeal = await InProgressMealModel.get()
            console.log('Loaded', inProgressMeal)
            setMeal(inProgressMeal)
        }

        load()
    }, [isFocused])

    const onClick = () => {
        navigation.navigate('/cook/progress')
    }

    if (!meal) {
        return null
    }

    return (
        <TouchableOpacity
            onPress={onClick}
            style={styles.container}
        >
            <Block style={styles.triangle} />
            <Block style={styles.content}>
                <BakingSVG
                    width={40}
                    height={40}
                />
                <Text appearance='hint' style={{
                    fontSize: 20,
                }}>
                    Finish your {meal.title}...
                </Text>
            </Block>
        </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: theme.SIZES.BASE,
    marginBottom: theme.SIZES.BASE,

    shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },

  content: {
    padding: theme.SIZES.BASE * 0.5,
    backgroundColor: 'white',

    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  triangle: {
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderLeftWidth: 7,
    borderRightWidth: 7,
    borderBottomWidth: 10,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: 'white',

  }
});

export default InProgressMeal;
