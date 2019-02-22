const Singleton = require('../src/Singleton');

class childSingleton extends Singleton {

  // constructor(key) {
  //   console.log('[child] constructor');
  //   super(key);
  //   this.counter = 0;
  // }

  inc() {
    this.counter = this.counter ? this.counter += 1 : 1;
  }

  static getInstance() {
    // console.log('[child-getInstance]', this);
    return super.getInstance(this);
  }
}
module.exports= childSingleton;