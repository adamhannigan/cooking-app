import 'react-native-gesture-handler'

import React from 'react';
import { StyleSheet, Animated, Easing } from 'react-native'

import { useNavigation } from '@react-navigation/native'
import { TouchableOpacity } from 'react-native-gesture-handler';

import { NavProp } from 'Navigation';

// galio components
import {
  Block,
} from 'galio-framework';

import PaperIcon from '../assets/paper.svg'

function CookNowButton() {
  const navigation = useNavigation<NavProp>()


  const onClick = () => {
    navigation.navigate('ChooseMeal')
  }

  return (
    <TouchableOpacity onPress={onClick}>
        <Block styles={styles.container}>
          <Block styles={styles.badge} />
          <PaperIcon
            width={35}
            height={40}
            style={styles.button}
          />
        </Block>
      </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'relative',
  },
    button: {
      marginLeft: 10,
    },
    badge: {
      width: 50,
      height: 50,
      backgroundColor: 'green',
      position: 'relative',
      top: 0,
      left: 0,
      zIndex: 22,
    }
});

export default CookNowButton
