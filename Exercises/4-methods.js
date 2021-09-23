'use strict';

const methods = (iface) => {
  const arr = new Array();
  for (const item in iface) {
    const func = iface[item];
    if (typeof func === 'function') {
      arr.push([func.name, func.length]);
    }
  }
  return arr;
};

module.exports = { methods };
