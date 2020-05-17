import React from 'react';
import {
  StyleSheet,
} from 'react-native';

import {
  Block,
} from 'galio-framework';

import { Text } from '@ui-kitten/components'

import ExerciseSVG from './assets/excercise.svg'
import BakingSVG from './assets/baking.svg'
import { Meal } from 'constants/dummyData';

interface Props {
    tags: Meal['preferences']
}

const Tags = ({
    tags = [{
        name: 'Fitness'
    }, {
        name: 'Baking'
    }]
}: Props) => (
    <Block row>
        {
            tags.length > 0 && (
                <>
                    <ExerciseSVG
                        width={25}
                        height={25}
                        style={{
                            marginRight: 5,
                        }}
                    />
                    <Text
                        appearance='hint'
                        style={{
                            fontFamily: 'Open Sans',
                        }}
                    >
                        {tags[0].name}
                    </Text>
                </>
            )
        }
        {
            tags.length > 1 && (
                <>
                    <BakingSVG
                        width={25}
                        height={25}
                        style={{
                            marginRight: 5,
                            marginLeft: 10,
                        }}
                    />
                    <Text appearance='hint'>
                        {tags[1].name}
                    </Text>
                </>
            )
        }
    </Block>
)


const styles = StyleSheet.create({
  container: {
   
  }
});

export default Tags;
