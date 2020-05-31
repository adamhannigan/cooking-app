import React from 'react';
import {
  StyleSheet,
  Dimensions,
  Image,
} from 'react-native';

import { useNavigation } from '@react-navigation/native'

import { Meal as IMeal } from '../../../../constants/dummyData'
// galio components
import {
  Block, theme
} from 'galio-framework';

import { Text, Avatar, useTheme, Button } from '@ui-kitten/components'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { NavProp } from 'Navigation';

import Tags from './Tags'

const { width } = Dimensions.get('screen');

interface Props {
    avatarUrl: string
    name: string
    time: string
    userId: string
    onSave: () => void
    isSaved: boolean
}

const AvatarHeader = ({
    avatarUrl,
    name,
    time,
    userId,
    onSave,
    isSaved,
}: Props) => {
    const navigation = useNavigation<NavProp>()
    const onClick = () => {
        navigation.navigate('/profile/:id', {
            id: userId,
        })
    }

    const kittenTheme = useTheme()

    return (
        <Block
            onPress={onClick} 
            style={styles.container}
        >
                <TouchableOpacity onPress={onClick} style={styles.user}>
                    <Block style={{
                        ...styles.avatarCircle,
                        borderColor: kittenTheme['color-primary-default'],
                    }}>
                        <Avatar
                            style={styles.avatar}
                            source={{
                                uri: 'http://i.pravatar.cc/100?id=skater',
                            }}
                        />
                    </Block>
                    <Block>
                        <Text style={styles.text}>
                            { name }
                        </Text>
                        {
                            /*<Tags />*/
                        }
                        <Text appearance='hint' style={{
                            fontSize: 14,
                            marginTop: -2,
                        }}>
                            {`${time} ago`}
                        </Text>
                    </Block>
                </TouchableOpacity>
         </Block>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: theme.SIZES.BASE * 0.5,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  user: {
      display: 'flex',
      flexDirection: 'row',
  },
  avatar: {
    width: 40,
    height: 40,
  },
  avatarCircle: { 
    borderWidth: 2,
    marginRight: theme.SIZES.BASE / 2,
    borderRadius: 40,
    padding: 2,
  },
  timeContainer: {
  },
  text: {
      fontWeight: 'bold',
      fontSize: 14,
      lineHeight: 22,
  }
});

export default AvatarHeader;
