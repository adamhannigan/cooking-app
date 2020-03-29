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
  buttonGroup: {
    width: '100%',
  },
  buttonOption: {
    width: '33%',
  },
  bottomBar: {
    margin: 15,
    marginBottom: 25,
  },
});

type Difficulty = 'easy' | 'medium' | 'hard'

const Cook = props => {
  const kittenTheme = useTheme()
  const navigation = useNavigation()

  const [difficulty, setDifficulty] = React.useState<Difficulty>(null)

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
