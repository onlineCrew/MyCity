import {View, Text, SafeAreaView} from 'react-native';
import styled from 'styled-components';
import {useNavigation} from '@react-navigation/native';
import Button from 'components/atoms/Button';
import Heading from 'components/atoms/Heading';
import Hamburger from 'components/atoms/Hamburger';

const StyledWrapper = styled(View)`
  height: 100%;
  width: 85%;
  justify-content: center;
  margin: 0 auto;
`;
const StyledHeading = styled(Heading)`
  font-size: 26px;
  font-weight: bold;
  margin-bottom: 20px;
  text-align: center;
`;
const StyledText = styled(Text)`
  font-size: 15px;
  font-weight: 400;
  margin-bottom: 20px;
`;

const ComingSoonText = styled(Text)`
  text-align: center;
  font-size: 18px;
  font-weight: 400;
  margin-bottom: 20px;
`;

const WasteDisposalScreen = () => {
  const {navigate} = useNavigation();

  return (
    <SafeAreaView>
      <StyledWrapper>
        <StyledHeading>Harmonogram odbioru odpadów</StyledHeading>
        <StyledText>
          Znowu przegapiłeś termin odbioru śmieci? Już nigdy o tym nie zapomnisz! Podaj mi tylko
          swój adres, a dzień przed dostaniesz powiadomienie PUSH o odbiorze odpadów.
        </StyledText>
        <ComingSoonText>Już wkrótce ...</ComingSoonText>
        <Button onPress={() => navigate('Home')}>Wróć</Button>
      </StyledWrapper>
      <Hamburger />
    </SafeAreaView>
  );
};
export default WasteDisposalScreen;
