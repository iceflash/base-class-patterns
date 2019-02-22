import test from 'ava';
import {Singleton} from '../main';
import Child from './childClass';

const subclass = class subclass extends Singleton {
};

test('Should not created directly by constructor', t => {
  const res = t.throws(() => { new Singleton() });
  t.is(res.message, 'This is singleton. Use getInstance()', 'message');
});

test('Base method getInstance() must throw exception', t => {
  t.throws(() => {Singleton.getInstance()});
});

test('Base method getInstance() should be overrided in subclass', t => {
  t.throws(() => { subclass.getInstance()});
});

test('Get Instance of Child class Singleton', t => {
  const res = t.notThrows(() => { 
    const inst = Child.getInstance();
    inst.inc(); // counter is 1
    t.is(inst.counter, 1, 'Counter must be 1');
  });

  // create other instance
  const inst2 = Child.getInstance();
  inst2.inc(); // counter is 2
  t.is(inst2.counter, 2, 'Counter must be 2');
});