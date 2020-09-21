const net = require('net');
const parseRequest = require('./utils/parseRequest');
const createResponse = require('./utils/createResponse');

const app = net.createServer(socket => {
  socket.on('data', data => {
    const request = parseRequest(data.toString());  
    
    if (request.path === '/' && request.method === 'GET') {
      socket.end(createResponse({ body: 'hi', status: '200 OK', contentType: 'text/plain' }))
    } else if( request.path === '/red' && request.method === 'GET') {
      console.log('you made it to red route', request)
      socket.end(createResponse({ body: '<html><body><h1>Red</h1></body></html>', status: '200 OK', contentType: 'text/html'}))
    } else if(request.path === '/green' && request.method === 'GET') {
      console.log('you made it to green route', request)
      socket.end(createResponse({ body: '<html><body><h1>Green</h1></body></html>', status: '200 OK', contentType: 'text/html'}))
    } else if(request.path === '/blue' && request.method === 'GET') {
      console.log('you made it to blue route', request)
      socket.end(createResponse({ body: '<html><body><h1>Blue</h1></body></html>', status: '200 OK', contentType: 'text/html'}))
    }else  {
      socket.end(createResponse({ body: 'Not Found', status: '404 Not Found', contentType: 'text/plain' }));
    }
  
    });
});

module.exports = app;
