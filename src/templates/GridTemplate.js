import {View} from 'react-native';
import styled from 'styled-components';

const StyledGrid = styled(View)`
  width: 100%;
  height: 100%;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  margin: 20px 0;
`;

const GridTemplate = ({children}) => {
  return <StyledGrid>{children}</StyledGrid>;
};

export default GridTemplate;
