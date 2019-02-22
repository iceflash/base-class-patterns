import test from 'ava';
import {Singleton} from '../main';
import Child from './childClass';

test('Should not created directly by constructor', t => {
  const res = t.throws(() => { new Singleton() });
  t.is(res.message, 'This is singleton. Use getInstance()', 'message');
});

test('Base method getInstance() must throw exception', t => {
  t.throws(() => {Singleton.getInstance()});
});

test('Base method getInstance() should be overrided in subclass', t => {
  const subclass = class subclass extends Singleton {

  };
  t.throws(() => { subclass.getInstance()});
});

test('Get Instance of Child class Singleton', t => {
  t.notThrows(() => { const singletonInstance = Child.getInstance(); }, 'message');
});