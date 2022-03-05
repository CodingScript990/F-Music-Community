// setupProxy.js
// createProxyMiddleware module
const { createProxyMiddleware } = require("http-proxy-middleware");

// exports createProxyMiddleware
module.exports = function (app) {
  // url
  app.use(
    "/users/",
    createProxyMiddleware({
      target: "http://localhost:4000",
      changeOrigin: true,
    })
  );
};
