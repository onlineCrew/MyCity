import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import DrawerContent from 'components/organisms/DrawerContent';
import ComingSoonScreen from 'screens/ComingSoonScreen';
import HomeScreen from 'screens/HomeScreen';
import ListScreen from 'screens/ListScreen';
import NewEventScreen from 'screens/NewEventScreen';
import NewsScreen from 'screens/NewsScreen';
import WasteDisposalScreen from 'screens/WasteDisposalScreen';
import BlackoutScreen from 'screens/BlackoutScreen';
import MapScreen from 'screens/MapScreen';
import DetailsScreen from 'screens/DetailsScreen';

const Drawer = createDrawerNavigator();

const AppStack = () => {
  return (
    <Drawer.Navigator
      drawerContent={props => <DrawerContent {...props} />}
      initialRouteName="List"
      backBehavior="history"
      screenOptions={{
        headerShown: false,
      }}>
      <Drawer.Screen name="List" component={ListScreen} />
      <Drawer.Screen name="EventDetails" component={NewEventScreen} />
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="News" component={NewsScreen} />
      <Drawer.Screen name="WasteDisposal" component={WasteDisposalScreen} />
      <Drawer.Screen name="Blackout" component={BlackoutScreen} />
      <Drawer.Screen name="Map" component={MapScreen} />
      <Drawer.Screen name="Details" component={DetailsScreen} />
      <Drawer.Screen name="ComingSoon" component={ComingSoonScreen} />
    </Drawer.Navigator>
  );
};

export default AppStack;
