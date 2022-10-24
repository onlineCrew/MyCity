import {TouchableOpacity, View, StyleSheet} from 'react-native';
import styled from 'styled-components';
import {useNavigation} from '@react-navigation/native';

const Wrapper = styled(TouchableOpacity)`
  position: absolute;
  bottom: 35px;
  right: 25px;
  width: 48px;
  height: 47px;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  elevation: 5;
  background: ${({theme}) => theme.primary};
`;
const Line = styled(View)`
  margin: 4.5px 0;
  width: 55%;
  height: 1.2px;
  background-color: white;
`;

const Hamburger = () => {
  const {toggleDrawer} = useNavigation();

  return (
    <View style={{flex: 1}}>
      <Wrapper style={style.boxShadow} onPress={() => toggleDrawer()}>
        <Line></Line>
        <Line></Line>
        <Line></Line>
      </Wrapper>
    </View>
  );
};

export default Hamburger;

const style = StyleSheet.create({
  boxShadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.3,
    shadowRadius: 10.19,

    elevation: 8,
  },
});
