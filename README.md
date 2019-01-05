# next-slice2str
> Slice string to two part

## install:
```bash
npm install -S afeiship/next-slice2str --registry=https://registry.npm.taobao.org
```

## usage:
```js
import 'next-slice2str';

const str = 'test@123.com';
const idx = str.indexOf('@');
const arr = nx.slice2str(str, idx);

// [ 'test', '123.com' ]
```
