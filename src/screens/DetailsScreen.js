import {View, Text, SafeAreaView, Image} from 'react-native';
import styled from 'styled-components';
import {useNavigation} from '@react-navigation/native';
import Button from 'components/atoms/Button';
import images from 'utils/images';
import OtherImage from 'assets/icons/other.png';

const OuterWrapper = styled(SafeAreaView)`
  height: 100%;
  width: 85%;
  justify-content: center;
  margin: 0 auto;
`;
const StyledText = styled(Text)`
  font-size: 25px;
  color: #333;
  font-weight: bold;
  margin-bottom: 20px;
  margin-left: 10px;
`;
const StyledButton = styled(Button)`
  margin-bottom: 30px;
`;
const ButtonsWrapper = styled(View)`
  margin: auto 0 10px;
`;
const StyledImage = styled(Image)`
  width: 45px;
  height: 45px;
`;
const Header = styled(View)`
  flex-direction: row;
  margin-top: 40%;
  align-items: center;
`;
const DescriptionText = styled(Text)`
  margin-top: 40px;
  font-size: 15px;
`;
const LocationText = styled(Text)`
  margin-top: 15px;
`;
const Bold = styled(Text)`
  font-weight: bold;
  font-size: 16px;
`;
const DateInfo = styled(Text)`
  margin-top: 25px;
`;

const NewEventScreen = props => {
  const {goBack} = useNavigation();
  const item = props.route.params.item;
  const {title, description, location, address, type, time} = item;
  const image = images.filter(obj => obj.name === type)[0]?.image || OtherImage;

  return (
    <OuterWrapper>
      <Header>
        <StyledImage source={image} />
        <StyledText>{title}</StyledText>
      </Header>
      <DescriptionText>
        <Bold>Opis:{'\n'}</Bold>
        {description}
      </DescriptionText>
      <LocationText>
        <Bold>Miejsce: {'\n'}</Bold>
        {address || location}
      </LocationText>
      <DateInfo>
        <Bold>Godzina: {time}</Bold>
      </DateInfo>
      <ButtonsWrapper>
        <StyledButton onPress={() => goBack()}>Wróć</StyledButton>
      </ButtonsWrapper>
    </OuterWrapper>
  );
};
export default NewEventScreen;
