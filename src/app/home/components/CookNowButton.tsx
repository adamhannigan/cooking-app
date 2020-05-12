import 'react-native-gesture-handler'

import React from 'react';
import { StyleSheet, Animated, Easing } from 'react-native'

import { useNavigation, useIsFocused } from '@react-navigation/native'
import { TouchableOpacity } from 'react-native-gesture-handler';

import { NavProp } from 'Navigation';

// galio components
import {
  Block,
} from 'galio-framework';

import {
  useTheme,
} from '@ui-kitten/components'

import PaperIcon from '../assets/penAndPaper.svg'
import { InProgressMealModel } from 'domain/inProgressMeals/model';

function CookNowButton() {
  const theme = useTheme()

  const navigation = useNavigation<NavProp>()
  const [isInProgress, setIsInProgress] = React.useState(false)

  const isFocused = useIsFocused()

  const onClick = () => {
    if (isInProgress) {
      navigation.navigate('/cook/progress')
    } else {
      navigation.navigate('/cook/pick')
    }
  }

  React.useEffect(() => {
    const load = async () => {
      const inProgressMeal = await InProgressMealModel.get()

      setIsInProgress(!!inProgressMeal)
    }

    load()
  }, [isFocused])

  return (
    <TouchableOpacity onPress={onClick}>
        <Block styles={styles.container}>
          <PaperIcon
            width={35}
            height={40}
            style={styles.button}
            fill='white'
          />
          {
            isInProgress && (
              <Block 
                style={{
                  ...styles.badge,
                  backgroundColor: theme['color-danger-default'],
                }}
              />
            )
          }
        </Block>
      </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    width: 50,
    height: 50,
  },
    button: {
      marginLeft: 10,
    },
    badge: {
      width: 10,
      height: 10,
      borderRadius: 10,
      top: 0,
      right: 3,

      position: 'absolute',
    }
});

export default CookNowButton
