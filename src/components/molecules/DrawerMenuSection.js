import {DrawerItem} from '@react-navigation/drawer';
import {useNavigation} from '@react-navigation/native';
import {Drawer} from 'react-native-paper';
import styled from 'styled-components';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import IoniconIcon from 'react-native-vector-icons/Ionicons';

const Wrapper = styled(Drawer.Section)`
  margin-top: 15px;
`;

const DrawerMenuSection = () => {
  const {navigate} = useNavigation();
  return (
    <Wrapper>
      <DrawerItem
        icon={({color, size}) => <Icon name="plus-box-multiple" color={color} size={size - 2} />}
        label="Dodaj zgłoszenie"
        onPress={() => navigate('Home')}
      />
      <DrawerItem
        icon={({color, size}) => <Icon name="format-list-bulleted" color={color} size={size - 2} />}
        label="Lista zgłoszeń"
        onPress={() => navigate('List')}
      />
      <DrawerItem
        icon={({color, size}) => <Icon name="map-marker" color={color} size={size - 2} />}
        label="Mapa zgłoszeń"
        onPress={() => navigate('Map')}
      />
      <DrawerItem
        icon={({color, size}) => (
          <IoniconIcon name="newspaper-outline" color={color} size={size - 2} />
        )}
        label="Aktualności"
        onPress={() => navigate('News')}
      />
      <DrawerItem
        icon={({color, size}) => <Icon name="flash" color={color} size={size - 2} />}
        label="Planowane wył. prądu"
        onPress={() => navigate('Blackout')}
      />

      <DrawerItem
        icon={({color, size}) => <IoniconIcon name="trash-outline" size={size - 2} color={color} />}
        label="Plan odbioru odpadów"
        onPress={() => navigate('WasteDisposal')}
      />
      <DrawerItem
        icon={({color, size}) => (
          <Icon name="account-check-outline" color={color} size={size - 2} />
        )}
        label="Zgłoś problem"
        onPress={() => navigate('ComingSoon')}
      />
      <DrawerItem
        icon={({color, size}) => <Icon name="cog-outline" color={color} size={size - 2} />}
        label="Ustawienia"
        onPress={() => navigate('ComingSoon')}
      />
    </Wrapper>
  );
};

export default DrawerMenuSection;
