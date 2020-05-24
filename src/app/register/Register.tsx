import React from 'react';
import {
  Alert,
  Dimensions,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';

// galio component
import {
  Block, Button, Input, Text, NavBar, theme,
} from 'galio-framework';

import { useNavigation } from '@react-navigation/native';
import { NavProp } from 'Navigation';
import { AuthModel } from 'domain/auth/model';
import 'domain/users/model';

const { height, width } = Dimensions.get('window');

const Register = () => {
  const [username, setUsername] = React.useState<string>('')
  const [password, setPassword] = React.useState<string>('')
  const [email, setEmail] = React.useState<string>('')
  const [isLoading, setIsLoading] = React.useState<boolean>(false)
  const [error, setError] = React.useState<string>('')

  const navigation = useNavigation<NavProp>()

  const onSignUp = async () => {
    console.log('Load it up!')

    setIsLoading(true)

    try {
      await AuthModel.register({
        username,
        password,
        email,
      })

      navigation.navigate('/login')
    } catch (error) {
      console.log('Uh oh', error)
      setError(error.code || error)
    }

    setIsLoading(false)
  }

  return (
    <Block safe flex style={{ backgroundColor: theme.COLORS.WHITE }}>
        <NavBar
          title="Sign Up"
          style={Platform.OS === 'android' ? { marginTop: theme.SIZES.BASE } : null}
        />
        <KeyboardAvoidingView style={styles.container} behavior="height" enabled>
          <Block flex center >
            <Text muted center>
              { error }
            </Text>
          </Block>  
          <Block flex={2} center space="between">
            <Block flex={2}>
              <Input
                rounded
                placeholder="Username"
                autoCapitalize="none"
                style={{ width: width * 0.9 }}
                onChangeText={setUsername}
              />
              <Input
                rounded
                type="email-address"
                placeholder="Email"
                autoCapitalize="none"
                style={{ width: width * 0.9 }}
                onChangeText={setEmail}
              />
              <Input
                rounded
                password
                viewPass
                placeholder="Password"
                style={{ width: width * 0.9 }}
                onChangeText={setPassword}
              />
            </Block>
            <Block flex middle>
              <Button
                round
                color="error"
                onPress={onSignUp}
                loading={isLoading}>
                Sign up
              </Button>
              <Button color="transparent" shadowless onPress={() => navigation.navigate('/login')}>
                <Text center color={theme.COLORS.ERROR} size={theme.SIZES.FONT * 0.75}>
                  Already have an account? Sign In
                </Text>
              </Button>
            </Block>
          </Block>
        </KeyboardAvoidingView>
      </Block>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingTop: theme.SIZES.BASE * 0.3,
    paddingHorizontal: theme.SIZES.BASE,
    backgroundColor: theme.COLORS.WHITE,
  },
  social: {
    width: theme.SIZES.BASE * 3.5,
    height: theme.SIZES.BASE * 3.5,
    borderRadius: theme.SIZES.BASE * 1.75,
    justifyContent: 'center',
  },
});

export default Register;