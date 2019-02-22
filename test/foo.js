const child3 = require('./childClass').getInstance();
const useSingletonFromModule = function () {
  child3.inc();
};

module.exports = useSingletonFromModule; 