import {View} from 'react-native';
import styled from 'styled-components';
import ButtonIcon from 'components/atoms/ButtonIcon';
import GoogleSVG from 'assets/icons/google.svg';
import FacebookSVG from 'assets/icons/facebook.svg';
import TwitterSVG from 'assets/icons/twitter.svg';

const Wrappers = styled(View)`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
`;

const Socials = props => (
  <Wrappers {...props}>
    <ButtonIcon>
      <GoogleSVG width={24} height={24} />
    </ButtonIcon>
    <ButtonIcon>
      <FacebookSVG width={24} height={24} />
    </ButtonIcon>
    <ButtonIcon>
      <TwitterSVG width={24} height={24} />
    </ButtonIcon>
  </Wrappers>
);

export default Socials;
