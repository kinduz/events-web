const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    process.env.REACT_APP_MKRF_APP_ORIGIN,
    createProxyMiddleware({
      target: process.env.REACT_APP_MKRF_API_URL,
      changeOrigin: true,
      secure: false,
      pathRewrite: {
        '^/v2': '',
      },
    }),
  );
};
