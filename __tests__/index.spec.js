(function () {
  require('../src');

  describe('api.basic test', () => {
    test('str no separator use default index', function () {
      const str = 'abc';
      const res = nx.slice2str(str, '@');
      expect(res).toEqual(['', 'abc']);
    });

    test('str no separator use input index', function () {
      const str = 'abc';
      const res = nx.slice2str(str, 2);
      expect(res).toEqual(['ab', 'c']);
    })

    test('nx.slice2str default step is 1', function () {
      const str = 'abc@21.cn';
      const res = nx.slice2str(str, '@');
      expect(res).toEqual(['abc', '21.cn']);
    });

    test('nx.slice2str with step1', function () {
      const str = 'test@123.com';
      const idx = str.indexOf('@');
      const arr = nx.slice2str(str, idx, 1);

      expect(arr[0]).toBe('test');
      expect(arr[1]).toBe('123.com');
    });

    test('nx.slice2str with step 0', function () {
      const str = 'test@123.com';
      const idx = str.indexOf('@');
      const arr = nx.slice2str(str, idx, 0);

      expect(arr[0]).toBe('test');
      expect(arr[1]).toBe('@123.com');
    });
  });
})();
