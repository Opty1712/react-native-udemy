import React from 'react';
import {
  View,
  Text,
} from 'react-native';

const Header = (props) => {
  const { textStyle, viewStyle } = styles;
  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{props.headerText}</Text>
    </View>
  );
};

const styles = {
  viewStyle: {
    backgroundColor: '#F50000',
    paddingTop: 15,
    justifyContent: 'center',
    height: 60,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 50, height: 200 },
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative'
  },
  textStyle: {
    fontSize: 20
  }
};

export default Header;
