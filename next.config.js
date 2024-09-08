// next.config.js
module.exports = {
    async redirects() {
      return [
        {
          source: '/',
          destination: '/dashboard',
          permanent: true, // Permanent redirect (301) or temporary (308)
        },
      ];
    },
  };
  