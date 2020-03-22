import React from 'react';
import {
  Image,
  StatusBar,
  StyleSheet,
  ScrollView,
  View,
  Dimensions,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';

import { Text, Avatar, Button } from '@ui-kitten/components'

import Constants from 'expo-constants';

const { statusBarHeight } = Constants;


// galio components
import {
  Block, Icon, NavBar, theme, Input,
} from 'galio-framework';

import { meals } from '../../constants/dummyData'
import { useNavigation } from '@react-navigation/native';

const { width, height } = Dimensions.get('screen');

const Menu = ({ }) => {
  const navigation = useNavigation()
  const [selected, setSelected] = React.useState([])

  const onSelect = (name: string) => {
    const alreadyExists = selected.includes(name)

    if (alreadyExists) {
      setSelected(selected.filter(item => item !== name))
    } else {
      setSelected([...selected, name])
    }
  }

  return (
    <View style={{ flex: 1 }}>
      <ScrollView style={{ flex: 1 }}>
        <Block style={{ marginTop: - theme.SIZES.BASE * 2 }}>
          <Block flex style={styles.header}>
            <Text category='h4' style={styles.title}>
              What are your favourite meals?
            </Text>
            <Text category='p' style={styles.title}>
              Select your favourite meals to showcase in your personal menu. Others will be able to see your favourite meals.
            </Text>
          </Block>
        </Block>
        <Input
            placeholder="Input with Icon on right"
            right
            rounded
            icon="search1"
            family="antdesign"
            iconSize={14}
            iconColor="orange"
            style={styles.search}
          />
          <Block>
            {
              meals.map(meal => {
                  const isSelected = selected.includes(meal.title)

                  return (
                      <Block row style={styles.meal}>
                        <Image
                            source={{ uri: meal.image }}
                            style={styles.image}
                        />
                        <Block style={styles.mealContent} flex row space='between'>
                            <Text category='h5' style={styles.mealTitle} numberOfLines={2}>
                                {meal.title}
                            </Text>
                            <Block center>
                                <Button
                                    appearance='outline'
                                    status='primary'
                                    onPress={() => onSelect(meal.title)}
                                    style={{
                                        backgroundColor: isSelected ? '#fe9b0040' : 'white'
                                    }}
                                >
                                    {
                                        isSelected
                                            ? 'Added'
                                            : 'Add'
                                    }
                                </Button>
                            </Block>
                        </Block>
                      </Block>
                  )
              })
            }
          </Block>
      </ScrollView>
      <Block style={styles.bottomBar}>
          <Button
            size='medium'
            appearance='ghost'
            status='primary'
            onPress={() => navigation.navigate('Home')}
          >
            Skip for now
          </Button>
          <Button
            size='medium'
            status='primary'
            onPress={() => navigation.navigate('Home')}
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
  bottomBar: {
      padding: theme.SIZES.BASE / 2,
      backgroundColor: 'white',
      borderTopWidth: 1,
      borderTopColor: '#e3e3e3',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between'
  },
  title: {
    paddingTop: theme.SIZES.BASE,
    paddingBottom: theme.SIZES.BASE,
  },
  meal: {
      backgroundColor: 'white',
      marginBottom: theme.SIZES.BASE,
  },
  mealTitle: {
      flex: 0,
      width: width - theme.SIZES.BASE * 12,
      overflow: 'hidden',
  },
  mealContent: {
      padding: theme.SIZES.BASE / 2,
  },
  image: {
    width: theme.SIZES.BASE * 5,
    height: theme.SIZES.BASE * 5,
  },
  search: {
    margin: theme.SIZES.BASE / 2,
    width: width - theme.SIZES.BASE,
  },
});

export default Menu;
