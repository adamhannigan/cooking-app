import React from 'react';
import {
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';

import { useTheme } from '@ui-kitten/components'

import { DroolModel } from 'domain/drools/model'
import { Meal as IMeal } from 'constants/dummyData'

//import droolGif from './assets/drool.gif'
//import droolFrame from './assets/droolFrame.gif'
import HeartSmileSVG from './assets/enjoy.svg'
import HeartDroolSVG from './assets/smile.svg'

// galio components
import {
  Block, theme, Icon
} from 'galio-framework';

const { width, height } = Dimensions.get('screen');

const Actions = (meal: IMeal) => {
    const [isDrooling, setIsDrooling] = React.useState(false)

    // Hack to remember drools
    React.useEffect(() => {
      const fetchIsDrooling = async () => {
        const drools = await DroolModel.getDrools()

        const drooledMeal = drools.find(droolMeal => droolMeal.id === meal.id)
        if (drooledMeal) {
          setIsDrooling(true)
        }
      }

      fetchIsDrooling()
    }, [])

    const onLike = () => {
      DroolModel.onDrool(meal)

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
