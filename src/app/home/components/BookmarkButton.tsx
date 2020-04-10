import 'react-native-gesture-handler'

import React from 'react';
import { StyleSheet, Animated, Easing } from 'react-native'
import { useTheme } from '@ui-kitten/components'

import { bookmarkEventHandler } from 'domain/bookmarks/events'

import {
  Icon,
} from 'galio-framework';
import { useNavigation } from '@react-navigation/native'
import { TouchableOpacity } from 'react-native-gesture-handler';

const AnimatedIcon = Animated.createAnimatedComponent(Icon)

function BookmarkButton() {
  const theme = useTheme()
  const navigation = useNavigation()

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

  React.useEffect(() => {
    bookmarkEventHandler.listen({
        event: 'mealSaved',
        handler: onSave,
    })
  }, [])

  const onClick = () => {
    onTwirl()
  }

  return (
    <TouchableOpacity onPress={onClick}>
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
      </TouchableOpacity>
    
  );
}

const styles = StyleSheet.create({
  favouriteButton: {
    marginRight: 10,
  },
});

export default BookmarkButton
