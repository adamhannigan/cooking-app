import React from 'react';
import {
  StyleSheet,
} from 'react-native';

import { Button } from '@ui-kitten/components'

import {
  theme
} from 'galio-framework';


const Tag = ({ text, onClick, isSelected }) => (
    <Button
        style={{
            ...styles.tag,
            backgroundColor: isSelected ? '#fe9b0040' : 'white'
        }}
        appearance={'outline' }
        status='primary'
        onPress={onClick}
    >
        {text}
    </Button>
)

const styles = StyleSheet.create({
  tag: {
    marginRight: theme.SIZES.BASE / 2,
    marginBottom: theme.SIZES.BASE / 2,
    borderRadius: 50,
  },
})

export default Tag;
