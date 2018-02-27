export default {
  getRandomNum: (length) => {
    const randnum = Math.random();
    const rand = Math.round(randnum * (length - 1)) + 1;
    return rand;
  }
}