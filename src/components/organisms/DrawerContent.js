import {View} from 'react-native';
import {DrawerContentScrollView} from '@react-navigation/drawer';
import styled from 'styled-components';
import DrawerHeader from 'components/molecules/DrawerHeader';
import DrawerMenuSection from 'components/molecules/DrawerMenuSection';
import DrawerAppearanceSection from 'components/molecules/DrawerAppearanceSection';
import DrawerLogoutSection from 'components/molecules/DrawerLogoutSection';

const FlexWrapper = styled(View)`
  flex: 1;
`;

const DrawerContent = props => (
  <FlexWrapper>
    <DrawerContentScrollView {...props}>
      <FlexWrapper>
        <DrawerHeader />
        <DrawerMenuSection />
        <DrawerAppearanceSection />
      </FlexWrapper>
    </DrawerContentScrollView>
    <DrawerLogoutSection />
  </FlexWrapper>
);

export default DrawerContent;
