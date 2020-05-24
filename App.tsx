import Amplify from 'aws-amplify';
import amplify from './src/aws-exports';

import 'react-native-gesture-handler'

import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components'
import { mapping } from '@eva-design/eva'

import { theme, customMapping } from 'theme/theme'

import React from 'react';

import {
  withGalio,
} from 'galio-framework';

import 'domain'

import { useFonts } from '@use-expo/font'
import { AppLoading } from 'expo'

import Navigation from './src/Navigation'

Amplify.configure(amplify);

function App() {
  // TODO: AppLoading for auth

  return (
    <React.Fragment>
        <IconRegistry icons={EvaIconsPack} />
        <ApplicationProvider mapping={mapping} theme={theme}>
            <Navigation />
        </ApplicationProvider>
    </React.Fragment>
  );
}

export default withGalio(App)
