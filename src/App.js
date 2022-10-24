import {useEffect} from 'react';
import {Alert} from 'react-native';
import {useSelector} from 'react-redux';
import RNAndroidLocationEnabler from 'react-native-android-location-enabler';
import AuthStack from 'navigators/AuthStack';
import AppStack from 'navigators/AppStack';
import {sleep} from 'utils';

const App = () => {
  useEffect(() => {
    (async () => {
      try {
        await RNAndroidLocationEnabler.promptForEnableLocationIfNeeded({
          interval: 10000,
          fastInterval: 5000,
        });
      } catch (err) {
        Alert.alert('Włącz GPS / usługę lokalizacji aby korzystać z aplikacji');
        await sleep(4000);
        RNAndroidLocationEnabler.promptForEnableLocationIfNeeded({
          interval: 10000,
          fastInterval: 5000,
        });
      }
    })();
  }, []);

  const {token} = useSelector(({authReducer}) => authReducer);
  return token ? <AppStack /> : <AuthStack />;
};

export default App;
