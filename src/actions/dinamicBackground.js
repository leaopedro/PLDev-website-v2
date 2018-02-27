import Config from './../config'

export const CHOOSE_IMAGES = 'CHOOSE_IMAGES';

export function generateBackgroundImages() {
  const st = {
    type: CHOOSE_IMAGES,
  };
  return st;
}
