import 'react-native-gesture-handler'

import React from 'react';
import { StyleSheet, Animated, Easing } from 'react-native'
import { useTheme } from '@ui-kitten/components'

import {
  Block,
} from 'galio-framework';
import { useNavigation } from '@react-navigation/native'
import { TouchableOpacity } from 'react-native-gesture-handler';

import { NavProp } from 'Navigation';
import RecipeBook from 'assets/icons/bookmarks/book.svg'
import { likeEventHandler } from 'domain/likes/events';

interface SVGProps {
  width: number
  height: number
}

const HeartIcon = React.forwardRef<any, SVGProps>((props, ref) => {
  return (
      <Block ref={ref}>
          <RecipeBook
              width={props.width}
              height={props.height}
          />
      </Block>
  )
})

const AnimatedIcon = Animated.createAnimatedComponent(HeartIcon)

function BookmarkButton() {
  const theme = useTheme()
  const navigation = useNavigation<NavProp>()

  const [scale] = React.useState(new Animated.Value(35))

  const onTwirl = () => {
    scale.setValue(35)

    Animated.sequence([
      Animated.timing(
        scale,
        {
          toValue: 50,
          duration: 500,
        }
      ),
      Animated.timing(
        scale,
        {
          toValue: 35,
          duration: 300,
        }
      ),
    ]).start()
  }

  React.useEffect(() => {
    const disposer = likeEventHandler.listen({
      event: 'saved',
      handler: onTwirl,
    })

    return disposer
  })

  const onClick = () => {
    navigation.navigate('/favourites')
  }

  return (
    <TouchableOpacity
      onPress={onClick}
      style={styles.container}
    >
        <AnimatedIcon
            width={scale}
            height={scale}
        />
      </TouchableOpacity>

  );
}

const styles = StyleSheet.create({
  favouriteButton: {
    marginRight: 10,
  },
  container: {
    width: 50,
    height: 50,

    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default BookmarkButton