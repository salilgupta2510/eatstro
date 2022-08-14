import {Dimensions, PixelRatio} from 'react-native';

export var {width: SCREEN_WIDTH, height: SCREEN_HEIGHT} =
  Dimensions.get('window');

// based on iPhone 11 scale
const wscale = SCREEN_WIDTH / 414;
const hscale = SCREEN_HEIGHT / 896;

//for width  pixel
const wp = (size: number) => {
  return normalize(size, 'width');
};
//for height  pixel
const hp = (size: number) => {
  return normalize(size, 'height');
};

//for font  pixel
const fp = (size: number) => {
  return hp(size);
};

//for margin and Padding verticle  pixel
const spV = (size: number) => {
  return hp(size);
};

//for margin and Padding horizontal  pixel
const spH = (size: number) => {
  return wp(size);
};

//for margin and Padding horizontal  pixel
const mpAll = (size: number) => {
  return {
    marginLeft: spH(size),
    marginRight: spH(size),
    marginTop: spV(size),
    marginBottom: spV(size),
  };
};

function normalize(size: number, based = 'width') {
  const newSize = based === 'height' ? size * hscale : size * wscale;
  return Math.round(PixelRatio.roundToNearestPixel(newSize));
}

export {normalize, wp, hp, fp, spH, spV, mpAll};
