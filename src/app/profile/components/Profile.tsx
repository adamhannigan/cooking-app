import React from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Dimensions,
  TouchableOpacity,
} from 'react-native';

import { Text, Avatar, Spinner } from '@ui-kitten/components'
import { useNavigation } from '@react-navigation/native'

import { NavProp } from 'Navigation'

// galio components
import {
  Block, theme,
} from 'galio-framework';

import { UserModel, User } from 'domain/users/model';

import Menu from './Menu'
import Recents from './Recents'
import { AuthModel } from 'domain/auth/model';

const { width, height } = Dimensions.get('screen');

interface Props {
  id: string
  isCurrentUser?: boolean
}

const Profile = ({ id, isCurrentUser }: Props) => {
  const navigation = useNavigation<NavProp>()
  
  const [user, setUser] = React.useState<User>()
  const [isLoading, setIsLoading] = React.useState(true)

  React.useEffect(() => {
    const load = async () => {
      console.log('Grab user: ', id)
      let loadedUser = await UserModel.find(id)
      console.log('Got: ', loadedUser)
      setUser(loadedUser)

      setIsLoading(false)
    }

    load()
  }, [])

  // HACK to go back to start of onboarding
  const onLogOut = () => {
    /*
    // LikeModel.reset()
    // InProgressMealModel.clear()
    UserModel.clearCurrentUser()
    AuthModel.logout()

    navigation.navigate('/login')
    */
    navigation.navigate('/onboard/meals')
  }

  return (
    <View style={{ flex: 1 }}>
      <ScrollView style={{ flex: 1 }}>
        <Block style={{ marginTop: - theme.SIZES.BASE * 2 }}>
          <Block center flex style={styles.header}>
            <TouchableOpacity onPress={onLogOut}>
              <Avatar
                  style={styles.avatar}
                  source={{
                      uri: 'http://i.pravatar.cc/100?id=skater',
                  }}
              />
            </TouchableOpacity>
            {
              isLoading && (
                <Spinner />
              )
            }
            {
              user && (
                <Block center flex>
                  <Text category='h4'>
                    {user.username}
                  </Text>
                  <Text category='h4' >
                    🐔🍖🍅
                  </Text>
                  <Text category='p' >
                    Lets go, cook some meat!
                  </Text>
                  <Block style={styles.stats}>
                    <Block center>
                      <Text category='h5' >
                      222
                      </Text>
                      <Text category='s2' >
                        Followers
                      </Text>
                    </Block>
                    <Block center>
                      <Text category='h5' >
                        34
                      </Text>
                      <Text category='s2' >
                        Meals
                      </Text>
                    </Block>
                    <Block center>
                      <Text category='h5' >
                      800
                      </Text>
                      <Text category='s2' >
                        Drools
                      </Text>
                    </Block>
                  </Block>
                </Block>
              )
            }
          </Block>
        </Block>
          
        <Menu id={id} />
        <Recents id={id} />
      </ScrollView>
    </View>
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

    height: theme.SIZES.BASE * 22,
  },
  user: {
    width,
  },
  avatar: {
    width: 100,
    height: 100,
  },
  stats: {
    paddingTop: theme.SIZES.BASE * 2,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width,
  },
});

export default Profile;
