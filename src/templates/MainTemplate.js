import React from 'react';
import {AppRegistry, StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {ThemeProvider} from 'styled-components';
import {typography} from 'utils/typography';
import {name as appName} from '../../app.json';
import {theme} from 'theme/mainTheme';
import store, {persistor} from 'store';

const MainTemplate = ({children}) => {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <NavigationContainer>
            <>
              <StatusBar backgroundColor="#F0F2F5" barStyle="dark-content" />
              {children}
            </>
          </NavigationContainer>
        </PersistGate>
      </Provider>
    </ThemeProvider>
  );
};

typography();
AppRegistry.registerComponent(appName, () => MainTemplate);

export default MainTemplate;
