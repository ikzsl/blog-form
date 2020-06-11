const host = 'https://conduit.productionready.io/api/';

export default {
  userPostUrl: () => [host, 'users'].join('/'),
  userLoginUrl: () => [host, 'users', 'login'].join('/'),
  getProfileUrl: () => [host, 'user'].join('/'),
};
