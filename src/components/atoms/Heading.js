import React from 'react';
import {Text} from 'react-native';
import styled from 'styled-components';

const StyledText = styled(Text)`
  font-family: 'Roboto-Medium';
  font-size: 28px;
  color: #333;
`;

const Heading = ({children, ...props}) => <StyledText {...props}>{children}</StyledText>;

export default Heading;
