import Amplify from 'aws-amplify';
import amplify from './src/aws-exports';

import 'react-native-gesture-handler'

import { ApplicationProvider } from '@ui-kitten/components'
import { mapping, light as lightTheme } from '@eva-design/eva'

import React from 'react';
import { StyleSheet } from 'react-native'

import {
  withGalio,
} from 'galio-framework';

import Navigation from './src/Navigation'

Amplify.configure(amplify);

function App() {
  return (
    <React.Fragment>
        <ApplicationProvider  mapping={mapping} theme={lightTheme}>
            <Navigation />
        </ApplicationProvider>
    </React.Fragment>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default withGalio(App)
