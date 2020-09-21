module.exports = rawRequest => {
  let response = {};
  const parsedMethod = rawRequest.toString().split('\n')[0].split(' ')[0];
  const parsedPath = rawRequest.toString().split('\n')[0].split(' ')[1];
  const h1Body = rawRequest.toString().split('\n');

  h1Body.includes("") ? response = {
    method: parsedMethod,
    path: parsedPath,
    body: h1Body.pop()
  } : response = {
    method: parsedMethod,
    path: parsedPath,
  };

  return response;
};

