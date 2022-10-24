import styled from 'styled-components';
import {View, Text} from 'react-native';
import {isObjectEmpty, convertObjToArray} from 'utils';

const ErrorText = styled(Text)`
  color: rgb(235, 64, 52);
`;

const Errors = ({errors, authError, registrationError}) => (
  <View>
    {!isObjectEmpty(errors) &&
      convertObjToArray(errors).map(err => (
        <ErrorText key={err.ref.name}>{err?.message}</ErrorText>
      ))}
    {authError && <ErrorText>{authError}</ErrorText>}
    {registrationError && <ErrorText>{registrationError}</ErrorText>}
  </View>
);

export default Errors;
