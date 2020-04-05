import React from 'react';
import {
  StyleSheet,
} from 'react-native';

import { Button, ListItem } from '@ui-kitten/components'

export interface Tag {
    name: string
    onRemove: () => void
}

// List component takes an item
interface Props {
    item: Tag
}

const TagItem = ({ item }: Props) => (
    <ListItem
        title={item.name}
    />
)

const styles = StyleSheet.create({
});

export default TagItem