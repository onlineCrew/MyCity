import {useRef} from 'react';
import {View, Text, SafeAreaView, Keyboard, Image} from 'react-native';
import styled from 'styled-components';
import {useNavigation} from '@react-navigation/native';
import {useForm, Controller} from 'react-hook-form';
import {useDispatch} from 'react-redux';
import {addItem} from 'actions';
import Button from 'components/atoms/Button';
import InputField from 'components/atoms/InputField';
import Errors from 'components/molecules/Errors';
import HideKeyboard from 'templates/HideKeyboard';
import IoniconIcon from 'react-native-vector-icons/Ionicons';
import OtherImage from 'assets/icons/other.png';
import images from 'utils/images';

const OuterWrapper = styled(SafeAreaView)`
  height: 100%;
  width: 85%;
  justify-content: space-between;
  margin: 0 auto;
`;
const StyledText = styled(Text)`
  font-size: 25px;
  color: #333;
  font-weight: bold;
  margin-bottom: 20px;
`;
const StyledButton = styled(Button)`
  margin-top: 20px;
`;
const StyledWrapper = styled(View)`
  margin-top: 30%;
`;
const ButtonsWrapper = styled(View)`
  margin: 20px 0 10px;
`;
const StyledInfo = styled(Text)`
  font-size: 12.5px;
  margin: -8px 0 15px 0;
`;
const Header = styled(View)`
  flex-direction: row;
`;
const StyledImage = styled(Image)`
  width: 30px;
  height: 30px;
  margin-right: 15px;
`;

const NewEventScreen = props => {
  const descriptionInputRef = useRef(null);
  const {navigate} = useNavigation();
  const {title, type} = props?.route?.params;
  const dispatch = useDispatch();

  const image = images.filter(obj => obj.name === type)[0]?.image || OtherImage;

  const {setValue, handleSubmit, reset, control, errors} = useForm({
    defaultValues: {
      title: '',
      description: '',
      location: '',
    },
  });

  const submitFn = ({description, title, location}) => {
    const itemObj = {
      type,
      title,
      description,
      location,
    };
    dispatch(addItem(itemObj));

    reset();
    Keyboard.dismiss();
    navigate('Home', {createdInfo: 'Twoje zgłoszenie zostało dodane'});
  };

  return (
    <HideKeyboard>
      <OuterWrapper>
        <StyledWrapper>
          <Header>
            <StyledImage source={image} />
            <StyledText>{title}</StyledText>
          </Header>
          <Controller
            name="title"
            control={control}
            defaultValue=""
            rules={{
              required: {value: true, message: 'Podaj zgłoszenie'},
            }}
            render={({onChange, value}) => (
              <InputField
                onChangeText={text => onChange(text)}
                value={value}
                error={errors.title}
                errorText={errors?.title?.message}
                onSubmitEditing={() => descriptionInputRef.current?.focus()}
                blurOnSubmit={false}
                placeholder="Nazwa zgłoszenia"
                icon={<IoniconIcon name="alert-circle-outline" size={20} color="#666" />}
              />
            )}
          />
          <Controller
            name="description"
            control={control}
            defaultValue=""
            rules={{
              required: {value: true, message: 'Podaj opis zgłoszenia'},
            }}
            render={({onChange, value}) => (
              <InputField
                onChangeText={text => onChange(text)}
                value={value}
                error={errors.description}
                errorText={errors?.description?.message}
                forwardedRef={descriptionInputRef}
                blurOnSubmit={false}
                placeholder="Opis zgłoszenia"
                numberOfLines={8}
                icon={<IoniconIcon name="reader-outline" size={20} color="#666" />}
                multiline
                textarea
                maxLength={500}
              />
            )}
          />
          <Controller
            name="location"
            control={control}
            defaultValue=""
            rules={{
              required: {value: true, message: 'Podaj miejsce / lokalizację'},
            }}
            render={({onChange, value}) => (
              <InputField
                onChangeText={text => onChange(text)}
                value={value}
                error={errors.location}
                errorText={errors?.location?.message}
                placeholder="Miejsce"
                icon={<IoniconIcon name="locate-outline" size={20} Fcolor="#666" />}
                type="location"
                setValueFn={setValue}
              />
            )}
          />
          <StyledInfo>
            {
              'Możesz podać adres (np. ul. 1 Maja 85) lub przekazać bieżącą lokalizację automatycznie'
            }
          </StyledInfo>

          <Errors errors={errors} />
        </StyledWrapper>
        <ButtonsWrapper>
          <Button onPress={handleSubmit(submitFn)}>Wyślij</Button>
          <StyledButton secondary onPress={() => navigate('Home')}>
            Wróć
          </StyledButton>
        </ButtonsWrapper>
      </OuterWrapper>
    </HideKeyboard>
  );
};
export default NewEventScreen;
