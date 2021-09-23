'use strict';

const ipToInt = (ip = '127.0.0.1') => {
  const move = (all, now) => (parseInt(all) << 8) + parseInt(now);
  return ip.split('.').reduce(move, 0);
};

module.exports = { ipToInt };
