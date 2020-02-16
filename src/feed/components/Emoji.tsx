import React from 'react';
import {
  StyleSheet,
} from 'react-native';

// galio components
import {
  Block, Button, theme,
} from 'galio-framework';


export interface Props {
  emojis: {
    icon: string
    count: number
  }[]
}

const Emojis = ({ emojis }: Props) => {
  const [counts, setCounts] = React.useState(emojis.map(emoji => emoji.count))

  return (
    <Block row middle style={{ marginHorizontal: theme.SIZES.BASE }}>
    {
        emojis.map((emoji, index) => {
            const text = `${emoji.icon} ${counts[index]}`

            return (
                <Button
                    key={index}
                    onPress={() => { 
                        setCounts(prev => 
                        prev.map((count, i) => i === index ? count + 1 : count))
                        }
                    }
                    style={styles.iconButton}
                    round
                    color='warning'
                    shadowColor='grey'
                >
                {text}
                
                </Button>
            )
        })
    }
    </Block>
  )
};

const styles = StyleSheet.create({
  iconButton: {
    width: 60,
    color: theme.COLORS.MUTED,
    marginRight: theme.SIZES.BASE / 2,
    paddingLeft: 3,
  },
});

export default Emojis;