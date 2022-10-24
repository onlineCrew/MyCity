import {SafeAreaView, ScrollView, Text} from 'react-native';
import styled from 'styled-components';
import GridTemplate from 'templates/GridTemplate';
import EventBox from 'components/atoms/EventBox';
import Hamburger from 'components/atoms/Hamburger';
import Heading from 'components/atoms/Heading';
import images from 'utils/images';

const StyledHeading = styled(Heading)`
  text-align: center;
  margin: 30px 0 20px;
`;
const StyledInfo = styled(Text)`
  text-align: center;
  font-weight: 500;
  font-size: ${({theme}) => theme.fontSize.s};
  color: ${({theme}) => theme.primaryVivid};
`;

const HomeScreen = props => {
  const createdInfo = props?.route?.params?.createdInfo;

  return (
    <SafeAreaView>
      <ScrollView>
        <StyledHeading>Dodaj nowe zgłoszenie</StyledHeading>
        <StyledInfo>{createdInfo}</StyledInfo>
        <GridTemplate>
          {images.map((item, index) => (
            <EventBox key={index} type={item.name} image={item.image} title={item.title} />
          ))}
        </GridTemplate>
      </ScrollView>
      <Hamburger />
    </SafeAreaView>
  );
};

export default HomeScreen;
