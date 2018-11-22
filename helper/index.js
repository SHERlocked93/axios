var convertUrl = exports.convertUrl = function (url) {
  // /restful/:id/:list/{id} -> restful_id_list_id
  // /restful/:id/:list/{id}.json -> restful_id_list_id
  var _url = url
    .replace(/[:{}]/g, '')
    .replace(/-/g, '_')
    .split('/')
    .filter(value => !!value).join('_')
    .replace(/_(\w)/g, (str, letter) => letter.toUpperCase());  // 改成小驼峰
  return _url.split('.')[0];
};

exports.convertMethod = function (mock) {
  // 防止重名
  // restful_id_list_id => restful_id_list_id_g
  // or
  // restful_id_list_id => restful_id_list_id_p
  return convertUrl(mock.url);// + '_' + mock.method.toLowerCase();
};

exports.convertParam = function (mock) {
  return Object.keys(mock.parameters).join(', ');
};

exports.joinUrl = function () {
  // https://www.easy-mock.com//mock/.... => https://www.easy-mock.com/mock/....
  var url = [].slice.call(arguments, 0).join('/');
  url = url.replace(/:\//g, '://');
  url = url.replace(/([^:\s\%\3\A])\/+/g, '$1/');
  return url;
}

exports.isREST = function (url) {
  return /(:|{|})/.test(url);
}
