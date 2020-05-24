import React, { useEffect } from 'react';
import {
  Image,
  StatusBar,
  StyleSheet,
  ScrollView,
  View,
  Dimensions,
  TouchableOpacity
} from 'react-native';

import { Text, Spinner, Button } from '@ui-kitten/components'

// galio components
import {
  Block, theme
} from 'galio-framework';

const { width, height } = Dimensions.get('screen');

import { useNavigation } from '@react-navigation/native';
import { NavProp } from 'Navigation';
import { TagsModel, Tag } from 'domain/tags/model';
import { UserModel } from 'domain/users/model';


const Preferences = () => {
  const [tags, setTags] = React.useState<Tag[]>([])
  const [selected, setSelected] = React.useState<Tag[]>([])
  const [isLoading, setIsLoading] = React.useState(true)
  const [error, setError] = React.useState(null)

  const navigation = useNavigation<NavProp>()

  useEffect(() => {
    const load = async () => {
      try {
        await UserModel.createNewUser()
    
        const availableTags = await TagsModel.getAll()

        setTags(availableTags)
        setIsLoading(false)
      } catch(e) {
        console.log('Caught', e)
        setError(e.toString())
        setIsLoading(false)
      }
    }

    load()
  })

  const onNext = async () => {
    await TagsModel.setPreferences(selected)

    navigation.navigate('/onboard/follow')
  }

  const onSelect = (tag: Tag) => {
    const alreadyExists = selected.find(item => item.name === tag.name)

    if (alreadyExists) {
      setSelected(selected.filter(item => item.name !== name))
    } else {
      setSelected([...selected, tag])
    }
  }
  
  console.log('Use tags', tags)

  return (
    <View style={{ flex: 1 }}>
      <ScrollView style={{ flex: 1 }}>
        <Block center style={{ marginTop: - theme.SIZES.BASE * 2 }}>
          <Block flex style={styles.header}>
            <Text category='h4' style={styles.title}>
              What are you interested in?
            </Text>
            <Text category='p' style={styles.title}>
              Select some foods and lifestyles you are interested in to help personalize your menu experience and find similar people to follow.
            </Text>
          </Block>
          {
            isLoading && (
              <Spinner />
            )
          }
          {
            error && (
              <Text>
                {`Error: ${error}`}
              </Text>
            )
          }
          <Block style={styles.tags}>
              {
                tags.map(tag => {
                  const isSelected = selected.find(item => item.name === tag.name)

                  return (
                    <Button
                      style={{
                        ...styles.tag,
                        backgroundColor: isSelected ? '#fe9b0040' : 'white'
                      }}
                      appearance={'outline' }
                      status='primary'
                      onPress={() => onSelect(tag)}
                    >
                        {tag.name}
                      </Button>
                  )
                })
              }
          </Block>
        </Block>
      </ScrollView>
      <Block style={styles.bottomBar}>
          <Button
            size='medium'
            appearance='ghost'
            status='primary'
            onPress={onNext}
          >
            Skip for now
          </Button>
          <Button
            size='medium'
            status='primary'
            onPress={onNext}
            disabled={selected.length === 0}
          >
            Next
          </Button>
      </Block>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    paddingTop: theme.SIZES.BASE * 2,
    paddingHorizontal: theme.SIZES.BASE,
    backgroundColor: 'white',
    width,
    borderBottomWidth: 1,
    borderBottomColor: '#e3e3e3',
  },
  group: {
    marginVertical: theme.SIZES.BASE * 1,
    paddingHorizontal: theme.SIZES.BASE,
    backgroundColor: 'white',
    width,
    paddingBottom: theme.SIZES.BASE,
    borderTopWidth: 1,
    borderTopColor: '#e3e3e3',
    borderBottomWidth: 1,
    borderBottomColor: '#e3e3e3',
  },
  bottomBar: {
      padding: theme.SIZES.BASE / 2,
      backgroundColor: 'white',
      borderTopWidth: 1,
      borderTopColor: '#e3e3e3',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between'
  },
  tags: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  tag: {
    marginRight: theme.SIZES.BASE / 2,
    marginBottom: theme.SIZES.BASE / 2,
    borderRadius: 50,
  },
  title: {
    paddingTop: theme.SIZES.BASE,
    paddingBottom: theme.SIZES.BASE,
  },
});

export default Preferences;
