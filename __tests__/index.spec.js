(function () {
  require('../src');

  describe('api.basic test', () => {
    test('nx.slice2str default step is 1', function () {
      var str = 'abc@21.cn';
      const res = nx.slice2str(str, '@');
      expect(res).toEqual(['abc', '21.cn']);
    });

    test('nx.slice2str with step1', function () {
      var str = 'test@123.com';
      var idx = str.indexOf('@');
      var arr = nx.slice2str(str, idx, 1);

      expect(arr[0]).toBe('test');
      expect(arr[1]).toBe('123.com');
    });

    test('nx.slice2str with step 0', function () {
      var str = 'test@123.com';
      var idx = str.indexOf('@');
      var arr = nx.slice2str(str, idx, 0);

      expect(arr[0]).toBe('test');
      expect(arr[1]).toBe('@123.com');
    });
  });
})();
