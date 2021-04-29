module.exports.handler = async function handler(event) {
  const { request } = event.Records[0].cf;

  request.headers['x-foo'] = [{ key: 'x-foo', value: 'Bar' }];

  return request;
};
