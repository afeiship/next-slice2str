var nx = require('next-js-core2');
require('../src/next-slice2str');

test('nx.slice2str with step1', function() {
  var str = 'test@123.com';
  var idx = str.indexOf('@');
  var arr = nx.slice2str(str, idx);

  expect(arr[0]).toBe('test');
  expect(arr[1]).toBe('123.com');
});

test('nx.slice2str with step 0', function() {
  var str = 'test@123.com';
  var idx = str.indexOf('@');
  var arr = nx.slice2str(str, idx, 0);

  expect(arr[0]).toBe('test');
  expect(arr[1]).toBe('@123.com');
});
