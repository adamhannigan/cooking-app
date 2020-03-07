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

console.disableYellowBox = true
// galio components
import {
  Block, Icon, NavBar, theme, Input,
} from 'galio-framework';

const { width, height } = Dimensions.get('screen');

const meals = [{
    title: 'Sweet Potato Gnocci',
    image: 'https://img.buzzfeed.com/thumbnailer-prod-us-east-1/video-api/assets/125259.jpg?output-quality=100&resize=900:*',
  }, {
    title: 'Creamy Cajun Pasta',
    image: 'https://img.buzzfeed.com/video-api-prod/assets/ec15137f921a40f49317cd75d38a961d/BFV14804_Meal-PrepGarlicChickenAndVeggiePasta-TextlessThumb.jpg?output-quality=100&resize=900:*',
    description: 'Get in my belly',
  }, {
    title: 'Chicken and Brocoslli Stir Fry',
    image: 'https://img.buzzfeed.com/thumbnailer-prod-us-east-1/c6630a4d04074d11ab60bfa0cb4b03d1/BFV16130_Stir-Fry_4_Ways_FB.jpg?output-quality=100&resize=900:*',
  }]

const Menu = ({ navigation }) => {
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
