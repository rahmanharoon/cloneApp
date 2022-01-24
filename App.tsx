import 'react-native-gesture-handler';
import React from 'react';
import {Text} from 'react-native';
import RootHome from './src/route/rootHome';

interface TextWithDefaultProps extends Text {
  defaultProps?: {allowFontScaling?: boolean};
}

(Text as unknown as TextWithDefaultProps).defaultProps =
  (Text as unknown as TextWithDefaultProps).defaultProps || {};
(Text as unknown as TextWithDefaultProps).defaultProps!.allowFontScaling =
  false;

const App = () => {
  return (
    <>
      <RootHome />
    </>
  );
};

export default App;
