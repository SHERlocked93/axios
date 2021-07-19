import fetch from 'utils/fetch';

<% _.forEach(data.mocks, function(mock){ %>/* {{mock.description}} */
export const {{$$.convertMethod(mock)}} = (<% if(!!$$.convertParam(mock)) { %>{ {{$$.convertParam(mock)}} }<% } %> = {}) => fetch({
  method: '{{mock.method}}',
  url: '{{mock.url}}'<% if(!!$$.convertParam(mock)) { %>,
  {{mock.method === 'get' ? 'params' : 'data'}}: { {{$$.convertParam(mock)}} }<% } %>
});

<% }) %>
