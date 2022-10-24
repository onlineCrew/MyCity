import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Image} from 'react-native';
import {useSelector} from 'react-redux';
import {HeaderBackButton} from '@react-navigation/elements';
import {createStackNavigator} from '@react-navigation/stack';
import {useNavigation} from '@react-navigation/native';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import Geocoder from 'react-native-geocoding';
import styled from 'styled-components';
import images from 'utils/images';
import Loader from 'components/atoms/Loader';
import OtherImage from 'assets/icons/other.png';
import {GOOGLE_API_KEY} from 'constants';
Geocoder.init(GOOGLE_API_KEY, {language: 'pl'});

const Stack = createStackNavigator();

const LoaderWrapper = styled(View)`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  justify-content: center;
  align-items: center;
`;

const StackMapScreen = () => {
  const items = useSelector(({userReducer}) => userReducer.items);
  const city = useSelector(({authReducer}) => authReducer.city);

  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const {navigate} = useNavigation();

  useEffect(() => {
    const getLocation = async () => {
      const json = await Geocoder.from(city);
      const {lat, lng} = json.results[0].geometry.location;
      setLatitude(lat);
      setLongitude(lng);
    };
    getLocation();
  }, []);

  return (
    <View style={styles.body}>
      {longitude ? (
        <MapView
          provider={PROVIDER_GOOGLE}
          style={styles.map}
          showUserLocation
          initialRegion={{
            latitude: latitude,
            longitude: longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}>
          {items.map(({title, description, location, address, type, time, date, _id}) => {
            const [latitude, longitude] = location.split(' ');
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
              <Marker
                key={_id}
                coordinate={{
                  latitude: Number(latitude),
                  longitude: Number(longitude),
                }}
                title={title}
                description={description}
                pinColor={'linen'}
                onCalloutPress={() => navigate('Details', {item})}>
                <Image source={image} style={{height: 32, width: 32}} />
              </Marker>
            );
          })}
        </MapView>
      ) : (
        <LoaderWrapper>
          <Loader />
        </LoaderWrapper>
      )}
    </View>
  );
};

const MapScreen = () => (
  <Stack.Navigator
    name="StackMap"
    initialRouteName="StackMap"
    screenOptions={({navigation, route}) => ({
      headerLeft: props => {
        return (
          <>
            <HeaderBackButton onPress={() => navigation.goBack()} />
            {props.canGoBack && <HeaderBackButton {...props} />}
          </>
        );
      },
    })}>
    <Stack.Screen name="Mapa zgłoszeń" component={StackMapScreen} />
  </Stack.Navigator>
);

export default MapScreen;

const styles = StyleSheet.create({
  body: {
    flex: 1,
    alignItems: 'center',
  },
  text: {
    fontSize: 40,
    margin: 10,
  },
  map: {
    width: '100%',
    height: '100%',
  },
});
