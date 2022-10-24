import React from 'react';
import {TouchableOpacity} from 'react-native';
import styled from 'styled-components';
import {useNavigation} from '@react-navigation/native';

const StyledWrapper = styled(TouchableOpacity)`
  border-color: #ddd;
  border-width: 2px;
  border-radius: 10px;
  padding: 10px 30px;
`;

const ButtonIcon = ({children}) => {
  const {navigate} = useNavigation();

  return <StyledWrapper onPress={() => navigate('ComingSoon', {mustGoBack: true})}>{children}</StyledWrapper>;
};

export default ButtonIcon;
