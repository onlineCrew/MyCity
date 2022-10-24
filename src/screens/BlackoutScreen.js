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

const BlackoutScreen = () => {
  const {navigate} = useNavigation();

  return (
    <SafeAreaView>
      <StyledWrapper>
        <StyledHeading>Wyłączenia prądu w Twoim mieście</StyledHeading>
        <StyledText>
          Znowu zaskoczył Cię brak prądu? Koniec z tym! Podaj swój adres, a powiadomimy Cię o
          planowanych wyłączeniach przez powiadomienie PUSH.
        </StyledText>
        <ComingSoonText>Już wkrótce ...</ComingSoonText>
        <Button onPress={() => navigate('Home')}>Wróć</Button>
      </StyledWrapper>
      <Hamburger />
    </SafeAreaView>
  );
};
export default BlackoutScreen;
