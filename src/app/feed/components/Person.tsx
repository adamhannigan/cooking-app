import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import { useNavigation } from '@react-navigation/native'

import { Text, Avatar, Button } from '@ui-kitten/components'

import { Meal as IMeal } from '../../../constants/dummyData'

// galio components
import {
  Block, theme
} from 'galio-framework';


const Person = (meal: IMeal) => {
  const navigation = useNavigation()
    
    return (
      <React.Fragment>
        <TouchableOpacity onPress={() => navigation.navigate('Menu')}>
            <Block style={styles.person}>
                <Block row>
                    <Avatar
                        style={styles.avatar}
                        source={{
                            uri: 'http://i.pravatar.cc/100?id=skater',
                        }}
                    />
                    <Block>
                      <Text
                        category='h6'
                        style={styles.name}
                      >
                        {meal.user.name}
                      </Text>
                    </Block>
                </Block>
            </Block>
        </TouchableOpacity>
      </React.Fragment>
  )
}

const styles = StyleSheet.create({
  person: {
    paddingTop: theme.SIZES.BASE,
    paddingRight: theme.SIZES.BASE / 2,
    position: 'relative',
    top: -40,
    height: 22,
  },
  name: {
    marginTop: 22,
    fontSize: 14,
  },
  avatar: {
    marginRight: 5,
    width: 50,
    height: 50,

    borderWidth: 3,
    backgroundColor: 'white',
    borderColor: 'white',
  },
});

export default Person;
