import React from 'react';
import { Image } from 'react-native';

const HeaderImage = () => {
  return (
    <Image style={{width: '100%', height: 230}}
        source={require('../../assets/header-image.png')}
    />
  );
}

export default HeaderImage;
