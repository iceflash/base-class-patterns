import test from 'ava';
import Singleton from '../src/Singleton';

test('Should not created directly by constructor', t => {
  const res = t.throws(() => { new Singleton() });
  t.is(res.message, 'This is singleton. Use getInstance()', 'message');
});

test.todo('Base method getInstance() must throw exception');

test.todo('Base method getInstance() should be overrided in subclass');

test('Get Instance of Singleton', t => {
  singletonInstance = Singleton.getInstance();
});