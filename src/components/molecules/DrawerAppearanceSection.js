import {useState} from 'react';
import {View} from 'react-native';
import {Drawer, TouchableRipple, Switch, Caption} from 'react-native-paper';
import styled, {useTheme} from 'styled-components';

const InnerWrapper = styled(View)`
  flex-direction: row;
  justify-content: space-between;
  padding-vertical: 13px;
  padding-horizontal: 16px;
`;
const StyledCaption = styled(Caption)`
  font-size: 13.75px;
`;
const DrawerAppearanceSection = () => {
  const [isDarkThemeActive, toggleDarkTheme] = useState(false);
  const theme = useTheme();

  return (
    <Drawer.Section title="Wygląd">
      <TouchableRipple onPress={() => toggleDarkTheme(!isDarkThemeActive)}>
        <InnerWrapper>
          <StyledCaption>Ciemny motyw</StyledCaption>
          <View pointerEvents="none">
            <Switch color={theme.primary} value={isDarkThemeActive} />
          </View>
        </InnerWrapper>
      </TouchableRipple>
    </Drawer.Section>
  );
};

export default DrawerAppearanceSection;
