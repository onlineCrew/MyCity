import {View, SafeAreaView} from 'react-native';
import styled from 'styled-components';
import {useNavigation} from '@react-navigation/native';
import EnterButton from 'components/atoms/EnterButton';
import AppHeading from 'components/atoms/AppHeading';

import CityImage from 'assets/city.svg';

const StyleWrapper = styled(SafeAreaView)`
  height: 100%;
  justify-content: center;
  align-items: center;
`;
const StyledHeading = styled(AppHeading)`
  margin-top: 25px;
`;
const StyledEnterButton = styled(EnterButton)`
  margin-bottom: 50px;
`;
const ImageWrapper = styled(View)`
  justify-content: center;
  align-items: center;
  flex: 1;
`;

const OnboardingScreen = () => {
  const {navigate} = useNavigation();

  return (
    <StyleWrapper>
      <StyledHeading>MY CITY</StyledHeading>
      <ImageWrapper>
        <CityImage width={300} height={300} />
      </ImageWrapper>
      <StyledEnterButton onPress={() => navigate('Login')}>Zaczynajmy</StyledEnterButton>
    </StyleWrapper>
  );
};

export default OnboardingScreen;
