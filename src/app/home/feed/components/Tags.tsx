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
        <ExerciseSVG
            width={25}
            height={25}
            style={{
                marginRight: 5,
            }}
        />
        <Text appearance='hint'>
            {tags[0].name}
        </Text>
        <BakingSVG
            width={25}
            height={25}
            style={{
                marginRight: 5,
                marginLeft: 10,
            }}
        />
        <Text appearance='hint'>
            {tags.length > 1 && tags[1].name}
        </Text>
    </Block>
)


const styles = StyleSheet.create({
  container: {
   
  }
});

export default Tags;
