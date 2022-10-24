import {DrawerItem} from '@react-navigation/drawer';
import {Drawer} from 'react-native-paper';
import {useDispatch} from 'react-redux';
import {logoutAction} from 'actions';
import styled from 'styled-components';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Wrapper = styled(Drawer.Section)`
  margin-bottom: 15px;
  border-top-color: #f4f4f4;
  border-top-width: 1px;
`;

const DrawerLogoutSection = () => {
  const dispatch = useDispatch();

  return (
    <Wrapper>
      <DrawerItem
        icon={({color, size}) => <Icon name="exit-to-app" color={color} size={size} />}
        label="Wyloguj się"
        onPress={() => {
          dispatch(logoutAction());
        }}
      />
    </Wrapper>
  );
};

export default DrawerLogoutSection;
