'use strict';

const generateKey = (length, possible) => {
  const max = possible.length;
  let res = '';
  for (let i = 0; i < length; i++) {
    const key = Math.floor(Math.random() * max);
    res += possible[key];
  }
  return res;
};

module.exports = { generateKey };
