Basic class pattern. On that moment just *Singleton* :smile:
```
npm install base-class-patterns
```
# Singleton
You may use Singleton pattern like:

```javascript
import {Singleton} from 'base-class-patterns';

class childSingleton extends Singleton {
  
  inc() {
    this.counter = this.counter ? this.counter += 1 : 1;
  }

  static getInstance() {
    return super.getInstance(this);
  }
}
```
You need to override method getInstance() from base class, at least call the base method
```javascript
return super.getInstance(this);
```