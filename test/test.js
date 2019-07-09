const request = require('supertest');
const {app, server} = require('../server/index.js');

describe('GET /', () => {
  it('responds with hello world', (done) => {
    console.log(server);
    request(app).get('/').then((res) => {
      expect(res.text).toBe('hello world');
      server.close(() => {
        done();
      });
    });
  });
});