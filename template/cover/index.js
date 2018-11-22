import fetch from 'utils/fetch';

<% _.forEach(data.mocks, function(mock){ %>/** {{mock.description}} */
const {{$$.convertMethod(mock)}} = (opts) => fetch({
  method: '{{mock.method}}',
  url: '{{mock.url}}',
  {{mock.method === 'get' ? 'params' : 'data'}}: opts
});

<% }) %>export {<% _.forEach(data.mocks, function(mock, i){ %>
  {{$$.convertMethod(mock)}}<% if(data.mocks.length - 1 !== i) { %>,<% } %>   // {{mock.description}} <% }) %>
};
