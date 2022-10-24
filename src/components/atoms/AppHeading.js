import React from 'react';
import {Text} from 'react-native';
import styled from 'styled-components';

const StyledText = styled(Text)`
  font-family: 'Inter-Bold';
  font-size: 30px;
  color: #20315f;
`;

const AppHeading = ({children, ...props}) => <StyledText {...props}>{children}</StyledText>;

export default AppHeading;
