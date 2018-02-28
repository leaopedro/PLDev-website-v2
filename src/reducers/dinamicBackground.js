import Util from './../Util/util';
import { CHOOSE_IMAGES } from '../actions';

const homeImages = [];
const secondaryImages = [];
for(let i = 1; i<14; i++){
  if (i<9) {
    homeImages[i] = {path: "img/home"+i+".jpg"};
  }
  secondaryImages[i] = {path: "img/bg"+i+".jpg"};
}

const defaultState = {
  homeImages,
  secondaryImages,
  page: {
    home: '',
    secondary1: '',
    secondary2: '',
  }
};

export default function dinamicBackground(state = defaultState, action) {
    switch (action.type) {
        case CHOOSE_IMAGES:
          const newSt = Object.assign({}, state);
          const homeBgIndex = Util.getRandomNum(newSt.homeImages.length-1);
          newSt.page.home = newSt.homeImages[homeBgIndex].path;
          newSt.homeImages.splice(homeBgIndex, 1);

          for (let i=0;i<2;i++) {
            let secBgIndex = Util.getRandomNum(newSt.secondaryImages.length-1);
            newSt.page[`secondary${i+1}`] = newSt.secondaryImages[secBgIndex].path;
            newSt.secondaryImages.splice(secBgIndex, 1);
          }
          return newSt;
        default:
            return state;
    }
}
