import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import styled from 'styled-components';
import Icon from 'react-native-vector-icons/MaterialIcons';

const StyledTouchableOpacity = styled(TouchableOpacity)`
  background-color: ${({theme}) => theme.primary};
  padding: 20px;
  width: 90%;
  border-radius: 5px;
  flex-direction: row;
  justify-content: space-between;
`;
const StyledText = styled(Text)`
  font-size: 18px;
  color: #fff;
  font-family: Roboto-MediumItalic;
`;

const Button = ({children, ...props}) => (
  <StyledTouchableOpacity {...props}>
    <StyledText>{children}</StyledText>
    <Icon name="arrow-forward-ios" size={22} color="#fff" />
  </StyledTouchableOpacity>
);

export default Button;
