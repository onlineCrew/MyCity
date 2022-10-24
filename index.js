import {AppRegistry} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';
import MainTemplate from 'templates/MainTemplate';

const Root = () => (
  <MainTemplate>
    <App />
  </MainTemplate>
);

AppRegistry.registerComponent(appName, () => Root);
