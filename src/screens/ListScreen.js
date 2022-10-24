import {useState, useCallback} from 'react';
import {View, Text, FlatList} from 'react-native';
import ListItem from 'components/molecules/ListItem/ListItem';
import styled, {useTheme} from 'styled-components';
import {useFocusEffect} from '@react-navigation/native';
import Heading from 'components/atoms/Heading';
import Hamburger from 'components/atoms/Hamburger';
import Loader from 'components/atoms/Loader';
import {useSelector, useDispatch} from 'react-redux';
import {fetchItems} from 'actions';
import {RadioButton} from 'react-native-paper';

const StyledHeading = styled(Heading)`
  text-align: center;
  margin: 30px 0 20px;
`;
const StyledText = styled(Text)`
  margin: 20px 20px 10px;
`;
const RadiosWrapper = styled(View)`
  width: 150px;
  align-items: flex-end;
  justify-content: flex-end;
`;
const Radio = styled(View)`
  flex-direction: row;
  align-items: center;
`;
const OuterWrapper = styled(View)`
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-between;
`;
const LoaderWrapper = styled(View)`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  justify-content: center;
  align-items: center;
`;

const ListScreen = () => {
  const {primary} = useTheme();
  const [isListInverted, setListInverted] = useState(true);
  const {items, isLoading} = useSelector(({userReducer}) => userReducer);
  const dispatch = useDispatch();

  useFocusEffect(
    useCallback(() => {
      dispatch(fetchItems());
    }, []),
  );

  return (
    <>
      <StyledHeading>Lista zgłoszeń w Twoim mieście</StyledHeading>
      <OuterWrapper>
        <StyledText>Ilość zgłoszeń: {items.length} </StyledText>
        <RadiosWrapper>
          <Radio>
            <Text>Od najnowszego</Text>
            <RadioButton
              color={primary}
              value="first"
              status={isListInverted ? 'checked' : 'unchecked'}
              onPress={() => {
                setListInverted(true);
                items.reverse();
              }}
            />
          </Radio>

          <Radio>
            <Text>Od najstarszego</Text>
            <RadioButton
              color={primary}
              value="second"
              status={!isListInverted ? 'checked' : 'unchecked'}
              onPress={() => {
                setListInverted(false);
                items.reverse();
              }}
            />
          </Radio>
        </RadiosWrapper>
      </OuterWrapper>

      {isLoading ? (
        <LoaderWrapper>
          <Loader />
        </LoaderWrapper>
      ) : (
        <FlatList
          data={items}
          keyExtractor={(item, index) => index.toString()}
          renderItem={props => <ListItem {...props.item} />}
        />
      )}

      <Hamburger />
    </>
  );
};

export default ListScreen;
