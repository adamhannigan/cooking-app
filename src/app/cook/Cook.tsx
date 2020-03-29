import React from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Dimensions,
  Image,
} from 'react-native';

import { useNavigation } from '@react-navigation/native'

import { Text, List, useTheme, Input, Icon, Button, ButtonGroup } from '@ui-kitten/components'

import { people } from 'constants/dummyData'

// galio components
import {
  Block, theme,
} from 'galio-framework';

import PersonItem, { Person } from 'components/PersonItem'

const { width } = Dimensions.get('screen');

const styles = StyleSheet.create({
  header: {
    paddingTop: theme.SIZES.BASE,
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
    height: 200,
    width: width - 40,

    borderWidth: 2,
    borderRadius: 5,
    borderStyle: 'dashed',
    borderColor: 'grey',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    backgroundColor: 'white',
  },
  cameraButton: {
    borderRadius: 50,
  },
  addButton: {
    marginVertical: theme.SIZES.BASE,
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

  const [chefs, setChefs] = React.useState<Person[]>([{
    primary: people[0].name,
    secondary: people[0].preferences.join(''),
  }])

  return (
    <View style={{ flex: 1 }}>
      <ScrollView style={{ flex: 1 }}>
        <Block style={{ marginTop: -theme.SIZES.BASE * 2 }}>
          <Block flex style={styles.header}>
            <Text category='h3' style={styles.title}>
              Sweet potato gnocci.
            </Text>
          </Block>
          <Block style={styles.content}>
            <Block style={styles.imageContainer}>
              <Button
                status='primary'
                style={styles.cameraButton}
                onPress={() => navigation.navigate('Camera')}
              >
                TAKE A PHOTO
              </Button>
            </Block>
          </Block>
          <Block flex style={styles.header}>
            <Text category='h5' style={styles.title}>
                Who cooked this?
            </Text>
            <List
              data={chefs}
              renderItem={PersonItem}
            />
            <Block center>
              <Button
                  status='info'
                  style={styles.addButton}
                >
                  ADD MORE CHEFS +
              </Button>
            </Block>
          </Block>
          <Block flex style={styles.header}>
            <Text category='h5' style={styles.title}>
                Who is eating?
            </Text>
            <Block center>
              <Button
                  status='info'
                  style={styles.addButton}
                >
                  ADD PEOPLE +
              </Button>
            </Block>
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
