const fs = require('fs');
const path = require('path');

const vueComponents = fs.readdirSync(path.join(__dirname, '../../../src/js/component'));

function componentExists(comp) {
  return vueComponents.some(e => e.toLowerCase() === comp.toLowerCase());
}

module.exports = {
  componentExists,
};
