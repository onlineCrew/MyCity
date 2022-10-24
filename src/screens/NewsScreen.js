import {View, Text, SafeAreaView} from 'react-native';
import styled from 'styled-components';
import {useSelector} from 'react-redux';
import WebView from 'react-native-webview';
import Loader from 'components/atoms/Loader';
import Hamburger from 'components/atoms/Hamburger';
import {replaceDiacriticalMarks} from 'utils';

const StyledWrapper = styled(View)`
  width: 100%;
  height: 100%;
`;
const StyledWebView = styled(WebView)`
  width: 100%;
  height: 100%;
`;
const FeedbackWrapper = styled(View)`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  justify-content: center;
  align-items: center;
`;

const NewsScreen = () => {
  const cityName = useSelector(({authReducer}) => authReducer.city) || 'Gliwice';
  const formattedCityName = replaceDiacriticalMarks(cityName);

  return (
    <SafeAreaView>
      <StyledWrapper>
        <StyledWebView
          source={{uri: `https://${formattedCityName}.naszemiasto.pl`}}
          renderLoading={() => (
            <FeedbackWrapper>
              <Loader />
            </FeedbackWrapper>
          )}
          renderError={() => (
            <FeedbackWrapper>
              <Text>Coś poszło nie tak :(</Text>
            </FeedbackWrapper>
          )}
        />
      </StyledWrapper>
      <Hamburger />
    </SafeAreaView>
  );
};
export default NewsScreen;
