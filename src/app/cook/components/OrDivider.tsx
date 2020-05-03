import React from 'react';
import {
  StyleSheet,
  Dimensions,
} from 'react-native';

import { Text } from '@ui-kitten/components'

// galio components
import {
  Block, theme
} from 'galio-framework';

const { width } = Dimensions.get('screen');

interface Props {
    backgroundColor?: string
}

const OrDivider: React.FC<Props> = (props) => (
    <Block style={styles.orDivider}>
        <Text
            style={{
                ...styles.or,
                backgroundColor: props.backgroundColor || styles.or.backgroundColor,
            }}
            appearance='hint'
        >
            OR
        </Text>
    </Block>
)

const styles = StyleSheet.create({
  orDivider: {
    width: width - theme.SIZES.BASE * 2,
    borderBottomWidth: 1,
    borderColor: '#ddd',

    marginTop: theme.SIZES.BASE ,
    marginBottom: theme.SIZES.BASE * 2,

    display: 'flex',
    alignItems: 'center',
  },
  or: {
    backgroundColor: '#f0f0f0',
    textAlign: 'center',

    position: 'relative',
    width: 50,
    top: 10,
  },
});

export default OrDivider;
