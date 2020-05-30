import 'react-native-gesture-handler'

import React from 'react';
import { StyleSheet, Animated, Easing } from 'react-native'
import { useTheme } from '@ui-kitten/components'

import {
  Icon,
} from 'galio-framework';
import { useNavigation } from '@react-navigation/native'
import { TouchableOpacity } from 'react-native-gesture-handler';

import { NavProp } from 'Navigation';
import RecipeBook from '../feed/components/assets/smile.svg'

const AnimatedIcon = Animated.createAnimatedComponent(Icon)

function BookmarkButton() {
  const theme = useTheme()
  const navigation = useNavigation<NavProp>()

  const [scale] = React.useState(new Animated.Value(1))

  const onTwirl = () => {
    scale.setValue(1)

    Animated.sequence([
      Animated.timing(
        scale,
        {
          toValue: 1.2,
          duration: 200,
        }
      ),
      Animated.timing(
        scale,
        {
          toValue: 1,
          duration: 100,
        }
      ),
    ]).start()
  }

  const onSave = () => {
    onTwirl()
  }

  const onClick = () => {
    navigation.navigate('/favourites')
  }

  return (
    <TouchableOpacity onPress={onClick}>
        {
          /*
          <AnimatedIcon
            name='staro'
            color='white'
            family={"AntDesign"}
            size={30}
            style={{
              ...styles.favouriteButton,
              transform: [{
                scale,
              }],
            }}
        />
          */
        }
        <RecipeBook
          width={35}
          height={40}
          fill='white'
          style={styles.favouriteButton}
        />

      </TouchableOpacity>

  );
}

const styles = StyleSheet.create({
  favouriteButton: {
    marginRight: 10,
  },
});

export default BookmarkButton