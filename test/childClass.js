const Singleton = require('../src/Singleton');

class childSingleton extends Singleton {
  
  inc() {
    this.counter = this.counter ? this.counter += 1 : 1;
  }

  static getInstance() {
    return super.getInstance(this);
  }
}
module.exports= childSingleton;