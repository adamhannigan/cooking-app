import 'react-native-gesture-handler'

import React from 'react';
import { StyleSheet } from 'react-native'

import {
  Icon,
} from 'galio-framework';
import { useNavigation } from '@react-navigation/native'
import { TouchableOpacity } from 'react-native-gesture-handler';

import { NavProp } from 'Navigation';
import { InProgressMealModel } from 'domain/inProgressMeals/model';

export function CookHeaderButton() {
  const navigation = useNavigation<NavProp>()


  const onClick = async () => {
    await InProgressMealModel.clear()
    
    navigation.navigate('/')
  }

  return (
    <TouchableOpacity onPress={onClick}>
        <Icon
            name='close'
            color='white'
            family={"AntDesign"}
            style={styles.icon}
        />
        
      </TouchableOpacity>
    
  );
}

const styles = StyleSheet.create({
  icon: {
    marginRight: 10,
    fontSize: 25,
  },
});

export default CookHeaderButton
