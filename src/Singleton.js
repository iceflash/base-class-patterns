/**
 * Singleton module with base class.
 * @module Singleton
 */
const singletonKey = Symbol();

/**
 * @class Singleton
 */
class Singleton {
  /**
   * In the Singleton pattern you should not call constructor() directly. Call static method getInstance() instead
   * @param {Symbol} key it a Symbol for identify when we call constructor for first creation from getInstance()
   */
  constructor(key) {
    if (key !== singletonKey) {
      throw new Error('This is singleton. Use getInstance()');
    }
  }
  
  /**
   * 
   * @param {Singleton} childClass    Used for inheritance 
   * @return {Singleton} new instance, or alredy created instance from *this.instance*
   */
  static getInstance(childClass) {
    if (!this.instance) {
      if (!childClass) { throw new Error('Override `static getInstance()` in your subclass, and use return super.getInstance(this)');}
      this.instance = new childClass(singletonKey);
    }
    return this.instance;
  }
}

module.exports = Singleton;