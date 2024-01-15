//define findkey function to search fo key in object and return undefined for keys not found

const findKey = function(object, callback) {
  for (const key in object) {
    if (callback(object[key])) {
      return key;
    }
  }
  return undefined;
};
module.exports = findKey;
