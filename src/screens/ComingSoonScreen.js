import {View, Text, SafeAreaView} from 'react-native';
import styled from 'styled-components';
import {useNavigation} from '@react-navigation/native';
import Button from 'components/atoms/Button';

const StyledWrapper = styled(View)`
  height: 100%;
  width: 85%;
  justify-content: center;
  margin: 0 auto;
`;
const StyledText = styled(Text)`
  font-size: 25px;
  font-weight: bold;
  margin-bottom: 20px;
`;

const ComingSoonScreen = props => {
  const {navigate, goBack} = useNavigation();
  const mustGoBack = props?.route?.params?.mustGoBack;

  return (
    <SafeAreaView>
      <StyledWrapper>
        <StyledText>Już wkrótce ...</StyledText>
        <Button
          onPress={() => {
            mustGoBack ? goBack() : navigate('Home');
          }}>
          Wróć
        </Button>
      </StyledWrapper>
    </SafeAreaView>
  );
};
export default ComingSoonScreen;
