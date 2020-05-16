import React from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Dimensions,
} from 'react-native';

import { Text, Input, Icon, useTheme, Button } from '@ui-kitten/components'
import {
  useNavigation,
  useIsFocused,
} from '@react-navigation/native'

// galio components
import {
  Block, theme
} from 'galio-framework';

import { meals, Meal } from '../../constants/dummyData'

import SearchSVG from 'app/home/assets/search.svg'
import YourMenu from './components/YourMenu'
import { NavProp } from 'Navigation';
import TakePhoto from './components/TakePhoto'
import { InProgressMealModel } from 'domain/inProgressMeals/model';

const { width } = Dimensions.get('screen');

const ChooseMeal = props => {
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const kittenTheme = useTheme()
  const navigation = useNavigation<NavProp>()
  const [search, setSearch] = React.useState<string>('')
  const [photo, setPhoto] = React.useState(null)

  const isFocused = useIsFocused()

  React.useEffect(() => {
    setSearch('')
    setPhoto(null)
  }, [isFocused])

  const onSelect = async (meal: Meal) => {
    let inspiredMeal = meal

    if (photo) {
      inspiredMeal = {
        ...meal,
        image: photo,
      }
    }

    console.log('inspired', inspiredMeal)

    await InProgressMealModel.save(inspiredMeal)

    navigation.navigate('/cook/progress')
  }

  const onAddNewMeal = async () => {
    await InProgressMealModel.save({
      title: search,
      image: photo,
    } as Meal)

    navigation.navigate('/cook/progress')
  }


  const scrollViewRef = React.useRef<ScrollView>(null)
  
  const onFocus = () => {
    scrollViewRef.current.scrollTo(theme.SIZES.BASE * 14)
  }
  
  return (
    <View style={{ flex: 1 }}>
      <ScrollView style={{ flex: 1 }} ref={ref => scrollViewRef.current = ref}>
        <Block style={{ marginTop: -theme.SIZES.BASE * 2 }}>
          <Block flex style={styles.header}>
            <TakePhoto
              photoUrl={photo}
              onPhoto={setPhoto}
            />
            <Text category='h5'>
              What did you cook?
            </Text>
            <Block row center style={{ marginTop: theme.SIZES.BASE }}>
              <Input
                  placeholder='Creamy...'
                  onChangeText={setSearch}
                  value={search}
                  onFocus={onFocus}
                  style={{
                    flex: 1,
                    marginRight: theme.SIZES.BASE,
                  }}
                  labelStyle={{
                    color: 'black',
                    fontSize: 16,
                    fontWeight: 'normal'
                  }}
                  textStyle={{
                      fontSize: 20,
                  }}
              />
              <SearchSVG
                width={30}
                height={30}
              />
            </Block>
          </Block>
          {
            search.length > 0 && (
            <Button
              status='info'
              style={{
                marginHorizontal: theme.SIZES.BASE / 2,
                marginBottom: theme.SIZES.BASE / 2,
              }}
              onPress={onAddNewMeal}
            >
              {`Add "${search}" +`}
            </Button>
            )
          }
          <YourMenu
            onSelect={onSelect}
            search={search}
          />
        </Block>
      </ScrollView>
    </View>
  )
};

const styles = StyleSheet.create({
  header: {
    borderTopLeftRadius: theme.SIZES.BASE * 2,
    borderTopRightRadius: theme.SIZES.BASE * 2,
    paddingTop: theme.SIZES.BASE * 3,
    paddingBottom: theme.SIZES.BASE * 2,
    padding: theme.SIZES.BASE * 1,
    marginBottom: theme.SIZES.BASE ,

    width,
    backgroundColor: 'white',

    borderBottomWidth: 1,
    borderColor: '#ddd',
  },
  container: {
    paddingHorizontal: theme.SIZES.BASE / 2,
  },
});

export default ChooseMeal;
