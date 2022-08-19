//The URL will be change. It's depends on server side

const devEnv = {
  baseURL: 'https://dev.api.codingtown.com',
};
const prodEnv = {
  baseURL: 'https://dev.api.codingtown.com',
};

const environment =
  process.env.NODE_ENV === 'production' ? { ...prodEnv } : { ...devEnv };

export default environment;
