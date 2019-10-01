/* eslint-disable space-before-function-paren */
/* eslint-disable func-names */
exports.handler = function(event, context, callback) {
  callback(null, {
    statusCode: 200,
    body: 'Hello, World',
  });
};
