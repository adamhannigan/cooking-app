import React from 'react';
import {
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';

import { useTheme } from '@ui-kitten/components'

import { Meal, MealsModel } from 'domain/meals/model';
import { LikesModel } from 'domain/likes/model'

//import droolGif from './assets/drool.gif'
//import droolFrame from './assets/droolFrame.gif'
import HeartSmileSVG from './assets/enjoy.svg'
import HeartDroolSVG from './assets/smile.svg'

// galio components
import {
  Block, theme, Icon
} from 'galio-framework';
import { UserModel } from 'domain/users/model';

const { width, height } = Dimensions.get('screen');

const Actions = (meal: Meal) => {
    const [isDrooling, setIsDrooling] = React.useState(false)

    React.useEffect(() => {
      const fetchIsDrooling = async () => {
        const user = await UserModel.getCurrentUser()

        const userLike = meal.likes.items.find(item => item.owner === user.username)
        setIsDrooling(!!userLike)
      }

      fetchIsDrooling()
    }, [])

    const onLike = () => {
      MealsModel.like(meal)

      setIsDrooling(true)
    }

    return (
        <Block style={styles.actions}>
            <TouchableOpacity onPress={onLike} disabled={isDrooling}>
                <Block row style={!isDrooling && styles.shadow}>
                    <Block style={styles.icon}>
                        {
                          isDrooling && (
                            <HeartDroolSVG
                              width={35}
                              height={35}
                            />
                          )
                        }
                        {
                          !isDrooling && (
                            <HeartSmileSVG
                              width={35}
                              height={35}
                            />
                          )
                        }
                        
                    </Block>
                </Block>
            </TouchableOpacity>
        </Block>
    )
}

const styles = StyleSheet.create({
icon: {
    marginRight: 5,
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 30,

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    borderWidth: 1,
    borderColor: '#ddd',

    overflow: 'hidden',
  },
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    
    elevation: 5,
  },
  actions: {
    position: 'absolute',
    right: 10,
    top: -20,
    display: 'flex',
    flexDirection: 'row-reverse',
    justifyContent: 'space-between',
  },
});

export default Actions;
