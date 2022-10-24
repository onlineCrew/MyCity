import {TextInput, View, Alert, Keyboard} from 'react-native';
import styled from 'styled-components';
import {useNavigation} from '@react-navigation/native';
import Geolocation from '@react-native-community/geolocation';
import Button from 'components/atoms/Button';

const StyledTextInput = styled(TextInput)`
  flex: 1;
  padding-vertical: 0;
  margin-left: 6px;
`;
const InputWrapper = styled(View)`
  flex-direction: row;
  align-items: center;
  border-bottom-color: #ccc;
  border-bottom-width: 1px;
  padding-bottom: 7px;
  margin-bottom: 20px;
`;

const InputField = ({icon, type, forwardedRef, setValueFn, textarea, ...props}) => {
  const {navigate} = useNavigation();

  const getLocation = () => {
    return new Promise((res, rej) => {
      Geolocation.getCurrentPosition(res, rej);
    });
  };

  return (
    <InputWrapper textarea={textarea}>
      {icon}
      <StyledTextInput ref={forwardedRef} {...props} />

      {type === 'password' && (
        <Button secondary onPress={() => navigate('ComingSoon', {mustGoBack: true})}>
          Zapomniałeś hasła?
        </Button>
      )}

      {type === 'location' && (
        <>
          <Button
            secondary
            onPress={async () => {
              try {
                const location = await getLocation();
                const {
                  coords: {latitude, longitude},
                } = location;

                setValueFn('location', `${latitude} ${longitude}`);
              } catch (err) {
                Alert.alert(`Czy włączyłeś GPS i udzieliłeś pozwolenia na usługi lokalizacji?`);
                Alert.alert(`Wystąpił błąd :/`);
              } finally {
                Keyboard.dismiss();
              }
            }}>
            Pobierz lokalizację
          </Button>
        </>
      )}
    </InputWrapper>
  );
};

export default InputField;
