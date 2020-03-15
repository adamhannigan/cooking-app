import 'react-native-gesture-handler'

import React from 'react';
import { StyleSheet } from 'react-native'
import { useTheme } from '@ui-kitten/components'

import { bookmarkEventHandler } from 'domain/bookmarks/events'

import {
  Icon,
} from 'galio-framework';
import { useNavigation } from '@react-navigation/native'
import { TouchableOpacity } from 'react-native-gesture-handler';


function BookmarkButton() {
  const theme = useTheme()
  const navigation = useNavigation()

  const [isSaved, setIsSaved] = React.useState(false)

  const onSave = () => {
    setIsSaved(true)
  }

  React.useEffect(() => {
    bookmarkEventHandler.listen({
        event: 'mealSaved',
        handler: onSave,
    })
  }, [])

  const onClick = () => {
      navigation.navigate('Bookmarks')
  }

  // Todo - on destroy stop listening

  return (
    <TouchableOpacity onPress={onClick}>
        <Icon
            name={isSaved ? 'star' : 'staro'}
            color={theme['color-primary-default']}
            family={"AntDesign"}
            size={30}
            style={styles.favouriteButton}
            
        />
      </TouchableOpacity>
    
  );
}

const styles = StyleSheet.create({
  favouriteButton: {
    marginRight: 10,
  },
});

export default BookmarkButton
