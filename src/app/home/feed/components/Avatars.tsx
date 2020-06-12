import React from 'react';
import {
  StyleSheet,
  Dimensions,
  Image,
} from 'react-native';


// galio components
import {
  Block, theme
} from 'galio-framework';

import { Avatar, Text } from '@ui-kitten/components'

const { width } = Dimensions.get('screen');

interface Props {
    avatars: string[]
}

const Avatars = ({
    avatars,
}: Props) => {
    return (
        <Block row style={styles.container}>
            <Block row>
                {
                    avatars.map(avatar => (
                        <Block style={styles.avatarCircle}>
                            <Avatar
                                style={styles.avatar}
                                source={{
                                    uri: 'http://i.pravatar.cc/100?id=skater',
                                }}
                            />
                        </Block>
                    ))
                }
            </Block>
            <Text style={styles.text} numberOfLines={2}>
                <Text style={{ fontWeight: 'bold' }}>Joe Blogg</Text> and <Text status='info'>2,100</Text> other's have cooked this
            </Text>
        </Block>
        
  )
}

const styles = StyleSheet.create({
    container: {
        marginTop: theme.SIZES.BASE,
        alignItems: 'center',
    },
  avatar: {
    width: 40,
    height: 40,
  },
  avatarCircle: { 
    borderWidth: 2,
    marginRight: -theme.SIZES.BASE / 1,
    borderRadius: 40,

    borderColor: 'white',
  },
  text: {
      marginLeft: theme.SIZES.BASE * 1.5,
  },
});

export default Avatars;
