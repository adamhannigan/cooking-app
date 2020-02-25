import React from 'react';
import {
  StyleSheet,
} from 'react-native';

// galio components
import {
  Block, Button, theme,
} from 'galio-framework';

import { Text, Avatar, Button as KittenButton } from '@ui-kitten/components'


export interface Props {
  emojis: {
    icon: string
    count: number
  }[]
}

const Emojis = ({ emojis }: Props) => {
  const [counts, setCounts] = React.useState(emojis.map(emoji => emoji.count))
  
  return (
    <Block row middle style={{ marginHorizontal: theme.SIZES.BASE * 1.5 }}>
    {
        emojis.map((emoji, index) => {
            const text = `${emoji.icon} ${counts[index]}`

            return (
              <KittenButton
                  appearance='outline'
                  status='warning'
                  style={styles.iconButton}
                  size='small'
                  textStyle={styles.text}
                  activeOpacity={0.3}
                  key={index}
                    onPress={() => { 
                        setCounts(prev => 
                        prev.map((count, i) => i === index ? count + 1 : count))
                        }
                    }
                >
                {text}

                </KittenButton>
            )
        })
    }
    </Block>
  )
};

const styles = StyleSheet.create({
  iconButton: {
    color: theme.COLORS.MUTED,
    marginRight: theme.SIZES.BASE / 2,
    paddingLeft: 3,
    backgroundColor: 'white',
  },
  text: {
    fontSize: 16,
    position: 'relative',
    paddingTop: 2,
  },
});

export default Emojis;