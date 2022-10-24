import {Text, View, TouchableOpacity, StyleSheet, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import styled from 'styled-components';

const Box = styled(View)`
  width: 170px;
  height: 170px;
  align-items: center;
  justify-content: space-evenly;
  margin: 8px;
  padding: 8px;
  border-color: ${({theme}) => theme.lightgrey};
  border-width: 1px;
  background-color: ${({theme}) => theme.white};
`;
const StyledText = styled(Text)`
  color: rgb(56, 55, 99);
  font-size: ${({theme}) => theme.fontSize.s};
  text-align: center;
`;
const StyledImage = styled(Image)`
  width: 60px;
  height: 60px;
`;

const EventBox = ({type, image, title}) => {
  const {navigate} = useNavigation();

  return (
    <TouchableOpacity onPress={() => navigate('EventDetails', {title, type})}>
      <Box style={styles.boxShadow}>
        <StyledImage source={image} />
        <StyledText>{title}</StyledText>
      </Box>
    </TouchableOpacity>
  );
};

export default EventBox;

const styles = StyleSheet.create({
  boxShadow: {
    shadowColor: '#bbb',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,

    elevation: 11,
  },
});
