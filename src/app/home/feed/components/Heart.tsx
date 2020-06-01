import 'react-native-gesture-handler'

import React from 'react';
import { StyleSheet, Animated, Easing } from 'react-native'
import { useTheme, Button } from '@ui-kitten/components'

import {
  Icon,
  Block,
} from 'galio-framework';
import { useNavigation } from '@react-navigation/native'

import { NavProp } from 'Navigation';

import DroolSVG from 'assets/icons/likes/drool.svg'
import HappySVG from 'assets/icons/likes/happy.svg'
import StarSVG from 'assets/icons/likes/star.svg'
import NormalSVG from 'assets/icons/likes/normal.svg'

interface SVGProps {
    width: number
    height: number
    heart: 'happy' | 'star' | 'drool' | 'normal'
}

const HeartIcon = React.forwardRef<any, SVGProps>((props, ref) => {
    return (
        <Block ref={ref}>
            {
                props.heart === 'normal' && (
                    <NormalSVG
                        width={props.width}
                        height={props.height}
                    />
                )
            }
            {
                props.heart === 'happy' && (
                    <HappySVG
                        width={props.width}
                        height={props.height}
                    />
                )
            }
            {
                props.heart === 'star' && (
                    <StarSVG
                        width={props.width}
                        height={props.height}
                    />
                )
            }
            {
                props.heart === 'drool' && (
                    <DroolSVG
                        width={props.width}
                        height={props.height}
                    />
                )
            }
        </Block>
    )
})

const AnimatedHeart = Animated.createAnimatedComponent(HeartIcon)

interface Props {
    currentLikes: number
    totalLikes: number
    onClick: () => void
}

const BookmarkButton: React.FC<Props> = ({
    currentLikes,
    totalLikes,
    onClick,
}) => {
  const theme = useTheme()
  const navigation = useNavigation<NavProp>()

  const [scale] = React.useState(new Animated.Value(1))
  const [likes, setLikes] = React.useState(totalLikes)

  const onTwirl = () => {
    scale.setValue(1)

    Animated.sequence([
      Animated.timing(
        scale,
        {
          toValue: 70,
          duration: 300,
        }
      ),
      Animated.timing(
        scale,
        {
          toValue: 0,
          duration: 600,
        }
      ),
    ]).start()
  }

  const onLike = () => {
      if (canLikeMore) {
        onTwirl()
        setLikes(likes + 1)

        onClick()
      }
  }

  const canLikeMore = currentLikes < 3

  let heart= 'normal'
  if (currentLikes === 1) {
      heart = 'happy'
  }
  if (currentLikes === 2) {
      heart = 'star'
  } else if (currentLikes > 2) {
      heart = 'drool'
  }

  return (
      <Block>
        <Block style={styles.animationContainer}>
            <AnimatedHeart
                width={scale}
                height={scale}
                heart={heart}
            />
        </Block>
        
        <Block middle row>
            <Button
            status='basic'
            appearance='ghost'
            disabled={!canLikeMore}
            style={{
                height: 16,
                width: 70,
            }}
            onPress={onLike}
            icon={() => (
                <HeartIcon
                    width={25}
                    height={25}
                    heart={heart}
                />
            )}>
                {(likes).toString()}
            </Button>
        </Block>
    </Block>

  );
}

const styles = StyleSheet.create({
  favouriteButton: {
    marginRight: 10,
  },
  animationContainer: {
      position: 'absolute',
      top: -60,
      left: 20,
      width: 50,
      height: 50,

      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
  }
});

export default BookmarkButton