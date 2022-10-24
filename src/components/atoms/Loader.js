import {ActivityIndicator} from 'react-native';
import {useTheme} from 'styled-components';

const Loader = ({color}) => {
  const {primary} = useTheme(useTheme);

  return <ActivityIndicator size="large" color={color || primary} />;
};

export default Loader;
