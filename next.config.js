const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');
module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      reactStrictMode: true,
      swcMinify: true,
      env: {
        USERNAME: 'negarl',
        PASSWORD: 'negarBlog22',
        CLUSTER: 'cluster0',
        DATABASE: 'blog-dev',
      },
    };
  }
  return {
    reactStrictMode: true,
    swcMinify: true,
    env: {
      USERNAME: 'negarl',
      PASSWORD: 'negarBlog22',
      CLUSTER: 'cluster0',
      DATABASE: 'blog-prod',
    },
  };
};
