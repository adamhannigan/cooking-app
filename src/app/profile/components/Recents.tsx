import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import { Text, Spinner } from '@ui-kitten/components'
import { useNavigation } from '@react-navigation/native'

import { NavProp } from 'Navigation'

import MealSummary from './MealSummary'

// galio components
import {
  Block, theme,
} from 'galio-framework';

import { MealsModel, Meal } from 'domain/meals/model';

interface Props {
  id: string
}

const Recents = ({ id }: Props) => {
  const navigation = useNavigation<NavProp>()
  
  const [meals, setMeals] = React.useState<Meal[]>()
  const [isLoading, setIsLoading] = React.useState(true)

  React.useEffect(() => {
    const load = async () => {
      let loadedUser =  await MealsModel.getAll()
      setMeals(loadedUser)

      setIsLoading(false)
    }

    load()
  }, [])

  const onClick = (id: string) => {
    navigation.navigate('/meal/:id', {
      id,
    })
  }

  if (isLoading) {
    return (
        <Spinner />
    )
  }

  return (
    <Block>
        <Block row middle space='between'  style={styles.menuTitle}>
            <Text category='h4'>
            Recent Activity
            </Text>
        </Block>
        <Block>
            {
                meals.map(card => (
                    <TouchableOpacity onPress={() => onClick(card.id)} style={styles.item}>
                        <MealSummary {...card}/>
                    </TouchableOpacity>
                ))
            }
        </Block>
    </Block>
  )
}

const styles = StyleSheet.create({
  menuTitle: {
    margin: theme.SIZES.BASE,
  },
  item: {
    backgroundColor: 'white',
    marginBottom: theme.SIZES.BASE,

    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderColor: '#e3e3e3',
  }
});

export default Recents;
