import {View, Text} from 'react-native';
import {Avatar, Title, Caption, Paragraph} from 'react-native-paper';
import {useSelector} from 'react-redux';
import styled from 'styled-components';
import AvatarImage from 'assets/avatar.png';

const StyledView = styled(View)`
  padding-left: 20px;
`;
const OuterWrapper = styled(View)`
  flex-direction: row;
  margin-top: 15px;
`;
const InnerWrapper = styled(View)`
  flex-direction: column;
  margin-left: 15px;
`;
const StyledName = styled(Title)`
  font-size: 16px;
  margin-top: 3.5px;
  font-weight: bold;
`;
const StyledParagraph = styled(Caption)`
  font-size: 14px;
  line-height: 14px;
`;
const CityInfo = styled(View)`
  margin-bottom: -10px;
  margin-top: 15px;
`;
const Bold = styled(Paragraph)`
  font-weight: bold;
`;

const DrawerHeader = () => {
  const {email, firstname, lastname, city} = useSelector(({authReducer}) => authReducer);

  return (
    <StyledView>
      <OuterWrapper>
        <Avatar.Image source={AvatarImage} size={50} />
        <InnerWrapper>
          <StyledName>
            {firstname} {lastname}
          </StyledName>
          <StyledParagraph>{email}</StyledParagraph>
        </InnerWrapper>
      </OuterWrapper>

      <CityInfo>
        <Text>
          Twoje miasto: <Bold>{city}</Bold>
        </Text>
      </CityInfo>
    </StyledView>
  );
};

export default DrawerHeader;
