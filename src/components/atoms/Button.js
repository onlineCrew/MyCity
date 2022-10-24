import React from 'react';
import {TouchableOpacity, Text, View} from 'react-native';
import styled, {css} from 'styled-components';

const StyledTouchableOpacity = styled(TouchableOpacity)`
  background-color: ${({theme}) => theme.primary};
  height: 65px;
  justify-content: center;
  border-radius: 10px;

  ${({secondary}) =>
    secondary &&
    css`
      background-color: transparent;
      width: auto;
      height: auto;
      padding: 3px 5px 3px 5px;
    `}
`;
const StyledText = styled(Text)`
  font-size: 18px;
  color: #fff;
  font-family: 'Roboto-Medium';
  text-align: center;

  ${({secondary}) =>
    secondary &&
    css`
      color: ${({theme}) => theme.primary};
      font-size: 14px;
      font-weight: 700;
    `}
`;

const Button = ({children, secondary, ...props}) => (
  <StyledTouchableOpacity secondary={secondary} {...props}>
    <StyledText secondary={secondary}>{children}</StyledText>
  </StyledTouchableOpacity>
);

export default Button;
