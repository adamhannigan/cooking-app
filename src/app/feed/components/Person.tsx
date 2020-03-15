import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import { useNavigation } from '@react-navigation/native'

import { Text, Avatar, Button } from '@ui-kitten/components'

import { Meal as IMeal } from '../../../constants/dummyData'


console.disableYellowBox = true
// galio components
import {
  Block, theme
} from 'galio-framework';


const Person = (meal: IMeal) => {
  const navigation = useNavigation()
    
    return (
        <TouchableOpacity onPress={() => navigation.navigate('Menu')}>
            <Block row middle space='between' style={styles.person}>
                <Block row>
                    <Avatar
                        style={styles.avatar}
                        source={{
                            uri: 'http://i.pravatar.cc/100?id=skater',
                        }}
                    />
                    <Block>
                      <Text
                        category='s1'
                        style={styles.name}
                        status='disabled'
                      >
                        {meal.user.name}
                      </Text>
                    </Block>
                </Block>
            </Block>
        </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  person: {
    paddingTop: theme.SIZES.BASE,
    paddingBottom: theme.SIZES.BASE / 2,
    paddingRight: theme.SIZES.BASE / 2,
    position: 'relative',
    top: -40,
  },
  name: {
    marginTop: 15,
    fontWeight: 'bold',
  },
  avatar: {
      marginRight: 5,


    borderWidth: 3,
    borderColor: 'white',
  },
});

export default Person;
