import React from 'react';
import {
  StyleSheet,
  Image,
} from 'react-native';

import { Ingredients } from 'constants/dummyData'

import { Text, useTheme } from '@ui-kitten/components'

// galio components
import {
  Block, Icon, theme,
} from 'galio-framework';

interface Props extends Ingredients {}

const IngredientList = ({ 
    items,
    photoUrl,
}: Props) => {
  const kittenTheme = useTheme()
  
  return (
    <Block style={styles.container}>
        <Text category='h6'>
            Ingredients
        </Text>
        {
            items && (
                <Block style={styles.items}>
                    {
                        items.map((item, idx) => (
                            <Block style={{
                                ...styles.item,
                                ...(
                                    idx !== items.length - 1
                                        ? styles.divider
                                        : {}
                                ),
                            }}>
                                <Text style={styles.text}>
                                    {item}
                                </Text>
                            </Block>
                        ))
                    }
                </Block>
            )
        }
        {
            photoUrl && (
                <Image
                    source={{
                        uri: photoUrl,
                    }}
                    style={styles.image}
                />
            )
        }
    </Block>
  )
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: theme.SIZES.BASE,
        marginTop: theme.SIZES.BASE * 2,
    },
    items: {
        marginTop: theme.SIZES.BASE,
        backgroundColor: 'white',
    },
    item: {
        paddingVertical: theme.SIZES.BASE * 3/4,
        marginHorizontal: theme.SIZES.BASE,
    },
    divider: {
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    },
    image: {
        height: 200,
        marginTop: 8,
        borderRadius: 3,
    },
    text: {
        fontSize: 16,
    }
});

export default IngredientList;
