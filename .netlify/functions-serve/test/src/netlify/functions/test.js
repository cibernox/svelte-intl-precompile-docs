// netlify/functions/test.js
exports.handler = async function(request) {
  return {
    statusCode: 200,
    body: request.headers.cookie
  };
};
//# sourceMappingURL=test.js.map
