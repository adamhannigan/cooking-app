import React from 'react';
import {
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';

import { Text, Button, Spinner } from '@ui-kitten/components'
import { useNavigation } from '@react-navigation/native'

import { NavProp } from 'Navigation'

import MealBoardIcon from 'app/home/assets/menu.svg'

import MealSummary from './MealSummary'

// galio components
import {
  Block, theme,
} from 'galio-framework';

import { UserModel, MenuItem } from 'domain/users/model';
const { width, height } = Dimensions.get('screen');

interface Props {
  id: string
  isCurrentUser?: boolean
}

const Menu = ({ id, isCurrentUser }: Props) => {
  const navigation = useNavigation<NavProp>()
  
  const [menuItems, setMenuItems] = React.useState([])
  const [isLoading, setIsLoading] = React.useState(true)

  React.useEffect(() => {
    const load = async () => {
      let menuItems = await UserModel.getMenuItems(id)
      setMenuItems(menuItems)
      setIsLoading(false)
    }

    load()
  }, [])

  const onClick = (id: string) => {
    navigation.navigate('/meal/:id', {
      id,
    })
  }

  if (isLoading) {
      return (
          <Spinner />
      )
  }

  return (
    <Block>
        <Block row middle space='between'  style={styles.menuTitle}>
        <Block row middle>
            <MealBoardIcon
            width={35}
            height={35}
            style={{
                marginRight: theme.SIZES.BASE,
            }}
            />
            <Text category='h4'>
            Menu
            </Text>
        </Block>
        <Text appearance='hint' >
            {`${menuItems.length} menu items`}
        </Text>
        </Block>
        <Block>
        {
            menuItems.map(card => (
                <TouchableOpacity
                onPress={() => onClick(card.id)}
                style={styles.item}
                key={card.id}
                >
                    <MealSummary {...card}/>
                </TouchableOpacity>
            ))
        }
        </Block>
        {
        isCurrentUser && (
            <Button
            size='medium'
            status='primary'
            style={styles.addMenuButton}
            >
            Edit your menu
            </Button>
        )
        }
    </Block>
  )
}

const styles = StyleSheet.create({
  header: {
    paddingTop: theme.SIZES.BASE * 4,
    paddingBottom: theme.SIZES.BASE * 1,

    backgroundColor: 'white',
    width,
    borderBottomWidth: 1,
    borderBottomColor: '#e3e3e3',
  },
  avatar: {
    width: 100,
    height: 100,
  },
  title: {
    paddingTop: theme.SIZES.BASE,
    paddingBottom: theme.SIZES.BASE,
  },
  stats: {
    paddingTop: theme.SIZES.BASE * 2,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width,
  },
  meal: {
      backgroundColor: 'white',
      marginBottom: theme.SIZES.BASE,
  },
  addMenuButton: {
    margin: theme.SIZES.BASE,
  },
  mealTitle: {
      flex: 0,
      width: width - theme.SIZES.BASE * 12,
      overflow: 'hidden',
  },
  menuTitle: {
    margin: theme.SIZES.BASE,
  },
  image: {
    width: theme.SIZES.BASE * 5,
    height: theme.SIZES.BASE * 5,
  },
  item: {
    backgroundColor: 'white',
    marginBottom: theme.SIZES.BASE,

    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderColor: '#e3e3e3',
  }
});

export default Menu;
