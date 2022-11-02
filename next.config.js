const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');
module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      reactStrictMode: true,
      swcMinify: true,
      env: {
        USERNAME: `${process.env.NEXT_PUBLIC_USERNAME}`,
        PASSWORD: `${process.env.NEXT_PUBLIC_PASSWORD}`,
        CLUSTER: `${process.env.NEXT_PUBLIC_CLUSTER}`,
        DATABASE: `${process.env.NEXT_PUBLIC_DATABASE}-dev`,
      },
    };
  }
  return {
    reactStrictMode: true,
    swcMinify: true,
    env: {
      USERNAME: `${process.env.NEXT_PUBLIC_USERNAME}`,
      PASSWORD: `${process.env.NEXT_PUBLIC_USERNAME}`,
      CLUSTER: `${process.env.NEXT_PUBLIC_CLUSTER}`,
      DATABASE: `${process.env.NEXT_PUBLIC_DATABASE}`,
    },
  };
};
