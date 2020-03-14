import Amplify from 'aws-amplify';
import amplify from './src/aws-exports';

import 'react-native-gesture-handler'

import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components'
import { mapping, light as lightTheme } from '@eva-design/eva'

import React from 'react';

import {
  withGalio,
} from 'galio-framework';

import Navigation from './src/Navigation'

Amplify.configure(amplify);

function App() {
  return (
    <React.Fragment>
        <IconRegistry icons={EvaIconsPack} />
        <ApplicationProvider  mapping={mapping} theme={lightTheme}>
            <Navigation />
        </ApplicationProvider>
    </React.Fragment>
  );
}

export default withGalio(App)
