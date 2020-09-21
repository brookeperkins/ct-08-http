const request = require('supertest');
const app = require('../lib/app');

describe('createResponse', () => {

  it('returns html saying hi', async() => {
const response = await request(app)
.get('/')

expect(response.text)
.toEqual('hi')
  })

it('returns HTML doc with Red as the title', async () => {
  const response = await request(app)
  .get('/red')

  expect(response.text).toEqual('<html><body><h1>Red</h1></body></html>')
})

it('returns HTML doc with Green as the title', async() => {
  const response = await request(app)
    .get('/green')

  expect(response.text).toEqual('<html><body><h1>Green</h1></body></html>')
})

it('returns HTML doc with Blue as the title', async() => {
  const response = await request(app)
    .get('/blue')

  expect(response.text).toEqual('<html><body><h1>Blue</h1></body></html>')
});

});

