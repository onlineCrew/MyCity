import {SafeAreaView, View, Text, TouchableOpacity, ScrollView, Keyboard} from 'react-native';
import {useState, useRef, useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {useForm, Controller} from 'react-hook-form';
import {useDispatch, useSelector} from 'react-redux';
import {registerAction} from 'actions';
import styled, {useTheme} from 'styled-components';
import DatePicker from 'react-native-date-picker';
import Heading from 'components/atoms/Heading';
import Button from 'components/atoms/Button';
import Loader from 'components/atoms/Loader';
import InputField from 'components/atoms/InputField';
import Socials from 'components/molecules/Socials';
import HideKeyboard from 'templates/HideKeyboard';
import Errors from 'components/molecules/Errors';

import RegisterSVG from 'assets/register.svg';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import IoniconIcon from 'react-native-vector-icons/Ionicons';

const OuterWrapper = styled(SafeAreaView)`
  height: 100%;
  align-items: center;
`;
const StyledRegisterSVG = styled(RegisterSVG)`
  transform: rotate(-6deg);
  margin-top: -10px;
  margin-bottom: 20px;
`;
const FormWrapper = styled(View)`
  width: 100%;
  padding: 0 25px;
`;
const InputsWrapper = styled(View)`
  margin-top: 30px;
`;
const StyledSocials = styled(Socials)`
  margin: 30px 0 30px;
`;
const DateWrapper = styled(View)`
  flex-direction: row;
  align-items: center;
  border-bottom-color: #ccc;
  border-bottom-width: 1px;
  padding-bottom: 7px;
`;
const DateText = styled(Text)`
  color: #444;
  margin-left: 11px;
`;
const StyledButton = styled(Button)`
  margin: 10px 0 30px;
`;
const StyledText = styled(Text)`
  text-align: center;
`;
const StyledInfo = styled(View)`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-bottom: 50px;
`;
const EncourageText = styled(Text)`
  color: black;
  font-weight: 500;
`;
const StyledErrors = styled(Errors)`
  margin-top: 10px;
`;
const RequiredFieldsCaption = styled(View)`
  margin: 10px 0;
`;

const LoginScreen = () => {
  const {navigate} = useNavigation();
  const dispatch = useDispatch();
  const [date, setDate] = useState(new Date());
  const [isModalOpen, setModalVisibility] = useState(false);
  const [dateValue, setDateValue] = useState('Data urodzenia');
  const theme = useTheme();
  const emailInputRef = useRef(null);
  const passwordInputRef = useRef(null);
  const passwordAgainInputRef = useRef(null);
  const cityInputRef = useRef(null);

  const registrationError = useSelector(({authReducer}) => authReducer.registrationError);
  const registrationStatusCode = useSelector(({authReducer}) => authReducer.registrationStatusCode);
  const isLoading = useSelector(({authReducer}) => authReducer.isLoading);

  const {setError, handleSubmit, reset, control, errors} = useForm({
    defaultValues: {
      username: '',
      email: '',
      password: '',
      passwordAgain: '',
      city: '',
    },
  });

  const submitFn = async ({username, email, password, passwordAgain, city}) => {
    if (password !== passwordAgain) {
      setError('passwordAgain', {
        type: 'passMatch',
        message: 'Podane hasła się nie zgadzają',
      });
      return null;
    }
    dispatch(registerAction(username, email, password, city));

    reset();
    Keyboard.dismiss();
  };

  useEffect(() => {
    if (registrationStatusCode === 200) {
      navigate('Login', {createdInfo: 'Użytkownik stworzony!'});
    }
  }, [registrationStatusCode]);

  return (
    <ScrollView>
      <HideKeyboard>
        <OuterWrapper>
          <StyledRegisterSVG width={280} height={280} />

          <FormWrapper>
            <Heading>Zarejestruj się</Heading>
            <StyledSocials />
            <StyledText>lub, zarejestruj się przez email ...</StyledText>
            <InputsWrapper>
              <Controller
                name="username"
                control={control}
                defaultValue=""
                rules={{
                  required: {value: true, message: 'Podaj imię i nazwisko'},
                  pattern: {value: /\w+\s\w+/, message: 'Podaj nazwisko'},
                }}
                render={({onChange, value}) => (
                  <InputField
                    onChangeText={text => onChange(text)}
                    value={value}
                    error={errors.username}
                    errorText={errors?.username?.message}
                    onSubmitEditing={() => emailInputRef.current?.focus()}
                    blurOnSubmit={false}
                    placeholder="Imię i nazwisko *"
                    icon={<MaterialIcon name="person-outline" size={20} color="#666" />}
                  />
                )}
              />

              <Controller
                name="email"
                control={control}
                defaultValue=""
                rules={{required: {value: true, message: 'Podaj email'}}}
                render={({onChange, value}) => (
                  <InputField
                    onChangeText={text => onChange(text)}
                    value={value}
                    error={errors.email}
                    errorText={errors?.email?.message}
                    onSubmitEditing={() => passwordInputRef.current?.focus()}
                    forwardedRef={emailInputRef}
                    blurOnSubmit={false}
                    placeholder="E-mail lub nazwa użytkownika *"
                    icon={<MaterialIcon name="alternate-email" size={20} color="#666" />}
                    keyboardType="email-address"
                  />
                )}
              />

              <Controller
                name="password"
                control={control}
                defaultValue=""
                rules={{required: {value: true, message: 'Podaj hasło'}}}
                render={({onChange, value}) => (
                  <InputField
                    onChangeText={text => onChange(text)}
                    value={value}
                    error={errors.password}
                    errorText={errors?.password?.message}
                    onSubmitEditing={() => passwordAgainInputRef.current?.focus()}
                    forwardedRef={passwordInputRef}
                    blurOnSubmit={false}
                    placeholder="Hasło *"
                    icon={<IoniconIcon name="ios-lock-closed-outline" size={20} color="#666" />}
                    secureTextEntry={true}
                  />
                )}
              />

              <Controller
                name="passwordAgain"
                control={control}
                defaultValue=""
                rules={{required: {value: true, message: 'Podaj ponownie hasło'}}}
                render={({onChange, value}) => (
                  <InputField
                    onChangeText={text => onChange(text)}
                    value={value}
                    error={errors.passwordAgain}
                    errorText={errors?.passwordAgain?.message}
                    onSubmitEditing={() => cityInputRef.current?.focus()}
                    forwardedRef={passwordAgainInputRef}
                    blurOnSubmit={false}
                    placeholder="Powtórz Hasło *"
                    icon={<IoniconIcon name="ios-lock-closed-outline" size={20} color="#666" />}
                    secureTextEntry={true}
                  />
                )}
              />
              <Controller
                name="city"
                control={control}
                defaultValue=""
                rules={{
                  required: {value: true, message: 'Podaj miasto'},
                }}
                render={({onChange, value}) => (
                  <InputField
                    onChangeText={text => onChange(text)}
                    value={value}
                    error={errors.city}
                    errorText={errors?.city?.message}
                    forwardedRef={cityInputRef}
                    onSubmitEditing={() => setModalVisibility(true)}
                    blurOnSubmit={false}
                    placeholder="Miasto *"
                    icon={<MaterialIcon name="person-outline" size={20} color="#666" />}
                  />
                )}
              />

              <DateWrapper>
                <IoniconIcon name="calendar-outline" color="#666" size={20} />
                <TouchableOpacity onPress={() => setModalVisibility(true)}>
                  <DateText>{dateValue}</DateText>
                </TouchableOpacity>
                <DatePicker
                  title="Podaj datę urodzenia"
                  modal
                  open={isModalOpen}
                  date={date}
                  mode="date"
                  minimumDate={new Date('1980-01-01')}
                  maximumDate={new Date('2021-01-01')}
                  onConfirm={date => {
                    setModalVisibility(false);
                    setDate(date);
                    setDateValue(date.toDateString());
                  }}
                  onCancel={() => {
                    setModalVisibility(false);
                  }}
                />
              </DateWrapper>
            </InputsWrapper>
            <RequiredFieldsCaption>
              <Text>* Pola wymagane</Text>
            </RequiredFieldsCaption>

            <StyledErrors errors={errors} registrationError={registrationError} />

            <StyledButton onPress={handleSubmit(submitFn)}>
              {isLoading ? <Loader color="white" /> : 'Zarejestruj się'}
            </StyledButton>
            <StyledInfo>
              <EncourageText>Masz już konto?</EncourageText>
              <Button secondary onPress={() => navigate('Login')}>
                Zaloguj się
              </Button>
            </StyledInfo>
          </FormWrapper>
        </OuterWrapper>
      </HideKeyboard>
    </ScrollView>
  );
};

export default LoginScreen;
