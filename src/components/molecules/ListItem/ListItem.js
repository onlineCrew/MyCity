import {View, Image, TouchableOpacity, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import styled from 'styled-components';
import Heading from 'components/atoms/Heading';
import images from 'utils/images';
import OtherImage from 'assets/icons/other.png';

const StyledTouchableOpacity = styled(TouchableOpacity)`
  width: 90%;
  margin: 0 auto;
  border-top-color: lightgrey;
  border-top-width: 1px;
`;
const InnerWrapper = styled(View)`
  width: 80px;
  padding: 10px 25px 10px 10px;
  align-items: center;
`;
const StyledHeading = styled(Heading)`
  text-transform: uppercase;
  font-family: 'Robot-Regular';
  font-size: ${({theme}) => theme.fontSize.m};
  color: rgb(56, 55, 99);
`;
const StyledImage = styled(Image)`
  width: 45px;
  height: 45px;
`;
const Time = styled(Text)`
  margin-top: 10px;
  font-weight: 500;
`;
const Date = styled(Text)`
  font-size: 8.5px;
`;
const StyledLocation = styled(Text)`
  font-weight: bold;
`;
const StyledContent = styled(View)`
  width: 70%;
  padding: 15px 0;
`;
const OuterWrapper = styled(View)`
  flex-direction: row;
  align-items: center;
  height: 150px;
`;

const ListItem = ({title, description, location, address, type, time, date}) => {
  const {navigate} = useNavigation();
  const image = images.filter(obj => obj.name === type)[0]?.image || OtherImage;

  const item = {
    title,
    description,
    location,
    address,
    type,
    time,
    date,
  };

  return (
    <StyledTouchableOpacity onPress={() => navigate('Details', {item})}>
      <OuterWrapper>
        <InnerWrapper>
          <StyledImage source={image}></StyledImage>
          <Time>{time}</Time>
          <Date>{date}</Date>
        </InnerWrapper>

        <StyledContent>
          <StyledHeading>{title}</StyledHeading>
          <Text numberOfLines={3}>{description}</Text>
          <StyledLocation>Miejsce: {address || location}</StyledLocation>
        </StyledContent>
      </OuterWrapper>
    </StyledTouchableOpacity>
  );
};

export default ListItem;
