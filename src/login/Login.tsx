import React from 'react';
import {
  Alert, Dimensions, KeyboardAvoidingView, StyleSheet, Platform,
} from 'react-native';
import { Auth } from 'aws-amplify'

// galio component
import {
  Block, Button, Input, NavBar, Text, theme,
} from 'galio-framework';

const { height, width } = Dimensions.get('window');

const Login = ({ navigation }: any) => {
    const [username, setUsername] = React.useState<string>('')
    const [password, setPassword] = React.useState<string>('')
    const [isLoading, setIsLoading] = React.useState<boolean>(false)
    const [error, setError] = React.useState<string>('')

    const onLogin = async () => {
      setIsLoading(true)

      try {
        await Auth.signIn({
          username,
          password,
        })

        navigation.navigate('Home')
      } catch (error) {
        setError(error.code)
      }

      setIsLoading(false)
    }

    return (
      <Block safe flex>
        <NavBar
          title="Sign In"
          style={Platform.OS === 'android' ? { marginTop: theme.SIZES.BASE } : null}
        />
        <KeyboardAvoidingView style={styles.container} behavior="height" enabled>
          <Block flex center style={{ marginTop: theme.SIZES.BASE * 1.875, marginBottom: height * 0.1 }}>
            <Text muted center size={theme.SIZES.FONT * 0.875} style={{ paddingHorizontal: theme.SIZES.BASE * 2.3 }}>
              This is the perfect place to write a short description
              of this step and even the next steps ahead
            </Text>
          </Block>

          <Block flex={2}>
            <Block>
              <Input
                rounded
                type="email-address"
                placeholder="Username"
                autoCapitalize="none"
                style={{ width: width * 0.9 }}
                onChangeText={text => setUsername(text)}
              />
              <Input
                rounded
                password
                viewPass
                placeholder="Password"
                style={{ width: width * 0.9 }}
                onChangeText={text => setPassword(text)}
              />
              <Text
                color={theme.COLORS.ERROR}
                size={theme.SIZES.FONT * 0.75}
                onPress={() => Alert.alert('Not implemented')}
                style={{ alignSelf: 'flex-end', lineHeight: theme.SIZES.FONT * 2 }}
              >
                Forgot your password?
              </Text>
            </Block>
            <Block flex middle>
              <Button
                round
                color="error"
                onPress={onLogin}
                loading={isLoading}
              >
                Sign in
              </Button>
              <Button color="transparent" shadowless onPress={() => navigation.navigate('Register')}>
                <Text center color={theme.COLORS.ERROR} size={theme.SIZES.FONT * 0.75}>
                  {"Don't have an account? Sign Up"}
                </Text>
              </Button>
            </Block>
          </Block>

          <Block flex center >
            <Text muted center>
              { error }
            </Text>
          </Block>
        </KeyboardAvoidingView>
      </Block>
    );
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

export default Login