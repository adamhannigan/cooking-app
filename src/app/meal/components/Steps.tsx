import React from 'react';
import {
  StyleSheet,
  Image,
} from 'react-native';

import { Step } from 'constants/dummyData'

import { Text, useTheme } from '@ui-kitten/components'

// galio components
import {
  Block, Icon, theme,
} from 'galio-framework';

interface Props {
    steps: Step[]
}

const Steps = ({ 
    steps,
}: Props) => {
  const kittenTheme = useTheme()
  
  return (
    <Block style={styles.container}>
        <Text category='h6'>
            Steps
        </Text>
        {
            steps.map((step, index) => (
                <Block>
                    {
                        step.description && (
                            <Block
                                style={styles.item}
                            >
                                <Block>
                                    <Text
                                        status='info'
                                        category='label'
                                        style={styles.number}
                                    >
                                        {`${index + 1}`}
                                    </Text>
                                </Block>
                                <Text style={styles.text}>
                                    {step.description}
                                </Text>
                            </Block>
                        )
                    }
                    {
                        step.photo && (
                            <Image
                                source={{
                                    uri: step.photo.url,
                                }}
                                style={styles.image}
                            />
                        )
                    }
                </Block>
            ))
        }
    </Block>
  )
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: theme.SIZES.BASE,
        marginTop: theme.SIZES.BASE * 2,
    },
    item: {
        backgroundColor: 'white',
        padding: theme.SIZES.BASE,
        paddingTop: theme.SIZES.BASE / 2,
        marginTop: theme.SIZES.BASE,

        borderRadius: 3,

        display: 'flex',
        flexDirection: 'row',
    },
    number: {
        fontSize: 14,
    },
    text: {
        marginLeft: theme.SIZES.BASE,
    },
    image: {
        height: 200,
        marginTop: 8,
        borderRadius: 3,
    },
});

export default Steps;
