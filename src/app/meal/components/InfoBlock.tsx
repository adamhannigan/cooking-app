import React from 'react';
import {
  StyleSheet,
} from 'react-native';

import { Text, useTheme } from '@ui-kitten/components'

// galio components
import {
  Block, Icon, theme,
} from 'galio-framework';

interface Props {
    title: string
    text: string
    icon: string
    status?: 'info' | 'basic'
}

const InfoBlock = ({ 
    title,
    text,
    icon,
    status = 'basic'
}: Props) => {
  const kittenTheme = useTheme()
  
  return (
    <Block
        style={styles.container}
    >
        <Block row>
            <Icon
                name={icon}
                family={"AntDesign"}
                style={styles.icon}
                color={status === 'info' && kittenTheme['color-info-default']}
            />
            <Text status={status} category='label'>
                {title}
            </Text>
            </Block>
        <Text status={status} style={styles.text}>
            {text}
        </Text>
    </Block>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: theme.SIZES.BASE,
    paddingRight: theme.SIZES.BASE * 2,
    marginTop: theme.SIZES.BASE,
  },
  icon: {
    marginRight: theme.SIZES.BASE,
  },
  text: {
    marginLeft: theme.SIZES.BASE * 2,
    marginTop: theme.SIZES.BASE/2,
  }
});

export default InfoBlock;
