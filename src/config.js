export default {
  API_ENDPOINT:
    process.env.NODE_ENV === 'production'
      ? process.env.REACT_APP_API_ENDPOINT
      : 'http://localhost:8000/api',
  TOKEN_KEY: 'cubby-client-auth-token',
  USERNAME_KEY: 'cubby-client-current-username',
};
