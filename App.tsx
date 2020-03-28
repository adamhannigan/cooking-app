import Amplify from 'aws-amplify';
import amplify from './src/aws-exports';

import 'react-native-gesture-handler'

import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components'
import { mapping, light as lightTheme } from '@eva-design/eva'

import customTheme from 'theme/custom-theme.json'

import React from 'react';

import {
  withGalio,
} from 'galio-framework';

import Navigation from './src/Navigation'

Amplify.configure(amplify);

const appTheme = { ...lightTheme, ...customTheme }

function App() {
  return (
    <React.Fragment>
        <IconRegistry icons={EvaIconsPack} />
        <ApplicationProvider  mapping={mapping} theme={appTheme}>
            <Navigation />
        </ApplicationProvider>
    </React.Fragment>
  );
}

export default withGalio(App)
