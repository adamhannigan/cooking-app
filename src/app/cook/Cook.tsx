import React from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Dimensions,
  Image,
} from 'react-native';

import { useNavigation } from '@react-navigation/native'

import { Text, useTheme, Input, Icon, Button, ButtonGroup } from '@ui-kitten/components'
import FAB from 'react-native-fab'

// galio components
import {
  Block, theme,
} from 'galio-framework';

import { meals } from '../../constants/dummyData'

const { width } = Dimensions.get('screen');

const styles = StyleSheet.create({
  header: {
    paddingTop: theme.SIZES.BASE * 2,
    paddingHorizontal: theme.SIZES.BASE * 1.5,
    width,
  },
  title: {
    paddingTop: theme.SIZES.BASE,
  },
  content: {
    width,
    padding: 20,
  },
  imageContainer: {
    position: 'relative',
    display: 'flex',
    height: 300,
    width: width - 40,
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 5,
    position: 'absolute',
    zIndex: 0,
  },
  cameraButton: {
    bottom: 5,
    right: 5,
    position: 'absolute',
    borderRadius: 50,
    shadowOffset:{  width: 3,  height: 3,  },
    shadowColor: '#777',
    shadowOpacity: 0.7,
  },
  buttonGroup: {
    width: '100%',
  },
  buttonOption: {
    width: '33%',
  },
  tipsContainer: {
    display: 'flex',
    flexDirection: 'row',
    height: 45,
  },
  tipsInput: {
    flex: 1,
    marginRight: 10,
  },
  bottomBar: {
    margin: 15,
    marginBottom: 25,
  },
});

type Difficulty = 'easy' | 'medium' | 'hard'
type Price = 'cheap' | 'average' | 'expensive'

const Cook = props => {
  const kittenTheme = useTheme()
  const navigation = useNavigation()

  const [value, setValue] = React.useState('')
  const [difficulty, setDifficulty] = React.useState<Difficulty>(null)
  const [price, setPrice] = React.useState<Price>(null)

  return (
    <View style={{ flex: 1 }}>
      <ScrollView style={{ flex: 1 }}>
        <Block center style={{ marginTop: -theme.SIZES.BASE * 2 }}>
          <Block flex style={styles.header}>
            <Text category='h3' style={styles.title}>
              Sweet potato gnocci.
            </Text>
          </Block>
          <Block style={styles.content}>
            <Block style={styles.imageContainer}>
              <Image
                source={{
                  uri: meals[0].image
                }}
                style={styles.image}
              />
              <Button status='primary' style={styles.cameraButton}>
                TAKE A PHOTO
              </Button>
            </Block>

            <Text category='s1' style={styles.title}>
                How difficult was this to cook?
              </Text>
            <ButtonGroup style={styles.buttonGroup} status='control'>
              <Button
                style={styles.buttonOption}
                onPress={() => setDifficulty('easy')}
                disabled={difficulty === 'easy'}
              >
                Easy 
              </Button>
              <Button
                style={styles.buttonOption}
                onPress={() => setDifficulty('medium')}
                disabled={difficulty === 'medium'}
              >
                Medium
              </Button>
              <Button
                style={styles.buttonOption}
                onPress={() => setDifficulty('hard')}
                disabled={difficulty === 'hard'}
              >
                Hard
              </Button>
            </ButtonGroup>

            <Text category='s1' style={styles.title}>
                How much did it cost?
              </Text>
            <ButtonGroup style={styles.buttonGroup} status='control' >
              <Button
                  style={styles.buttonOption}
                  onPress={() => setPrice('cheap')}
                  disabled={price === 'cheap'}
              >
                Cheap
              </Button>
              <Button
                style={styles.buttonOption}
                onPress={() => setPrice('average')}
                disabled={price === 'average'}
              >
                Average
              </Button>
              <Button
                style={styles.buttonOption}
                onPress={() => setPrice('expensive')}
                disabled={price === 'expensive'}
              >
                Expensive
              </Button>
            </ButtonGroup>
          </Block>
        </Block>
      </ScrollView>
      <Block style={styles.bottomBar}>
          <Button
            size='medium'
            status='primary'
            onPress={() => navigation.navigate('Tags')}
          >
            Next
          </Button>
        </Block>
    </View>
  )
};


export default Cook;
