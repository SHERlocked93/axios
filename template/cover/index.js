import fetch from 'utils/fetch';

<% _.forEach(data.mocks, function(mock){ %>/** {{mock.description}} */
const {{$$.convertMethod(mock)}} = (<% if(!!$$.convertParam(mock)) { %>{ {{$$.convertParam(mock)}} }<% } %>) => fetch({
  method: '{{mock.method}}',
  url: '{{mock.url}}'<% if(!!$$.convertParam(mock)) { %>,
  {{mock.method === 'get' ? 'params' : 'data'}}: { {{$$.convertParam(mock)}} }<% } %>
});

<% }) %>export {<% _.forEach(data.mocks, function(mock, i){ %>
  {{$$.convertMethod(mock)}}<% if(data.mocks.length - 1 !== i) { %>,<% } %>   // {{mock.description}} <% }) %>
};
