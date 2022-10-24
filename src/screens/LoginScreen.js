import {useRef} from 'react';
import {SafeAreaView, View, Text, Keyboard} from 'react-native';
import styled from 'styled-components';
import {useNavigation, useFocusEffect} from '@react-navigation/native';
import {useForm, Controller} from 'react-hook-form';
import {useDispatch, useSelector} from 'react-redux';
import {authenticateAction} from 'actions';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import Heading from 'components/atoms/Heading';
import Button from 'components/atoms/Button';
import InputField from 'components/atoms/InputField';
import Loader from 'components/atoms/Loader';
import Socials from 'components/molecules/Socials';
import HideKeyboard from 'templates/HideKeyboard';
import Errors from 'components/molecules/Errors';

import LoginSVG from 'assets/login.svg';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import IoniconIcon from 'react-native-vector-icons/Ionicons';

const OuterWrapper = styled(SafeAreaView)`
  height: 100%;
  align-items: center;
`;
const StyledLoginSVG = styled(LoginSVG)`
  transform: rotate(-6deg);
  margin-top: -30px;
`;
const InnerWrapper = styled(View)`
  width: 100%;
  padding: 0 25px;
`;
const InputsWrapper = styled(View)`
  margin-top: 30px;
`;
const StyledButton = styled(Button)`
  margin: 5px 0 25px;
`;
const StyledText = styled(Text)`
  text-align: center;
`;
const StyledSocials = styled(Socials)`
  margin-top: 25px;
`;
const StyledInfo = styled(View)`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 25px 0 5px;
`;
const EncourageText = styled(Text)`
  color: black;
  font-weight: 500;
`;
const StyledErrors = styled(Errors)`
  margin-top: -15px;
`;
const CreatedInfo = styled(Text)`
  font-size: ${({theme}) => theme.fontSize.s};
  color: ${({theme}) => theme.primaryVivid};
  font-weight: bold;
  margin-bottom: 15px;
`;

const LoginScreen = props => {
  const {navigate} = useNavigation();
  const dispatch = useDispatch();
  const passwordInputRef = useRef(null);
  const authError = useSelector(({authReducer}) => authReducer.authError);
  const isLoading = useSelector(({authReducer}) => authReducer.isLoading);
  const createdInfo = props?.route?.params?.createdInfo;

  const {handleSubmit, reset, control, errors} = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
  });

  useFocusEffect(() => {
    dispatch({type: 'CLEAR_REGISTRATION_STATUS_CODE'});
  });

  const submitFn = ({email, password}) => {
    dispatch(authenticateAction(email, password));
    reset();
    Keyboard.dismiss();
  };

  return (
    <KeyboardAwareScrollView>
      <HideKeyboard>
        <OuterWrapper>
          <StyledLoginSVG width={320} height={320} />
          {createdInfo && <CreatedInfo>{createdInfo}</CreatedInfo>}
          <InnerWrapper>
            <Heading>Zaloguj się</Heading>
            <InputsWrapper>
              <Controller
                name="email"
                control={control}
                defaultValue=""
                rules={{
                  required: {value: true, message: 'Podaj email'},
                }}
                render={({onChange, value}) => (
                  <InputField
                    onChangeText={text => onChange(text)}
                    value={value}
                    error={errors.email}
                    errorText={errors?.email?.message}
                    onSubmitEditing={() => passwordInputRef.current?.focus()}
                    blurOnSubmit={false}
                    placeholder="E-mail"
                    icon={<MaterialIcon name="alternate-email" size={20} color="#666" />}
                    keyboardType="email-address"
                  />
                )}
              />
              <Controller
                name="password"
                control={control}
                defaultValue=""
                rules={{
                  required: {value: true, message: 'Podaj hasło'},
                }}
                render={({onChange, value}) => (
                  <InputField
                    onChangeText={text => onChange(text)}
                    value={value}
                    error={errors.password}
                    errorText={errors?.password?.message}
                    onSubmitEditing={handleSubmit(submitFn)}
                    forwardedRef={passwordInputRef}
                    placeholder="Hasło"
                    icon={<IoniconIcon name="ios-lock-closed-outline" size={20} color="#666" />}
                    type="password"
                    secureTextEntry={true}
                  />
                )}
              />
            </InputsWrapper>
            <StyledErrors errors={errors} authError={authError} />
            <StyledButton onPress={handleSubmit(submitFn)}>
              {isLoading ? <Loader color="white" /> : 'Zaloguj się'}
            </StyledButton>
            <StyledText>lub, skorzystaj z ...</StyledText>
            <StyledSocials />
            <StyledInfo>
              <EncourageText>Nowy w aplikacji?</EncourageText>
              <Button secondary onPress={() => navigate('Register')}>
                Zarejestruj się
              </Button>
            </StyledInfo>
          </InnerWrapper>
        </OuterWrapper>
      </HideKeyboard>
    </KeyboardAwareScrollView>
  );
};

export default LoginScreen;
