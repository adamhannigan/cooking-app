import React from 'react';
import {
  Image,
  StatusBar,
  StyleSheet,
  ScrollView,
  View,
  Dimensions,
  TouchableOpacity
} from 'react-native';

import { Avatar, Button, ListItem } from '@ui-kitten/components'

import Constants from 'expo-constants';

// galio components
import {
  Block,
} from 'galio-framework';

export interface Person {
    primary: string
    secondary: string
    avatar?: string
    action?: {
        primary: string
        onClick: () => void
    }
    isSelected?: boolean
}

// List component takes an item
interface Props {
    item: Person
}

const PersonItem = ({ item }: Props) => {
    return (
        <ListItem
        title={item.primary}
        description={item.secondary}
        icon={() => (
            <Block>
                <Avatar
                    source={{
                        uri: 'http://i.pravatar.cc/100?id=skater',
                    }}
                    style={styles.avatar}
                />
                </Block>
            )
        }
        accessory={item.action && (() => (
            <Button
                appearance='outline'
                status='primary'
                onPress={() => item.action.onClick()}
                style={{
                    backgroundColor: item.isSelected ? '#fe9b0040' : 'white'
                }}
            >
                {
                    item.action.primary
                }
            </Button>
        ))}
        />
    )
}

const styles = StyleSheet.create({
  avatar: {
    width: 35,
    height: 35,
    position: 'relative',
    top: -4,
    left: -5,
  },
});

export default PersonItem;
