# next-slice2str
> Slice string to two part.

## installation
```bash
npm install -S @feizheng/next-slice2str
```

## apis
| argument | type   | default |
|----------|--------|---------|
| str      | String | -       |
| index    | Number | -       |
| step     | Number | 0       |

## usage:
```js
import '@feizheng/next-slice2str';

const str = 'test@123.com';
const idx = str.indexOf('@');
const arr = nx.slice2str(str, idx);

// [ 'test', '123.com' ]
```
