/* eslint-disable no-undef */
// eslint-disable-next-line import/no-extraneous-dependencies
const requset = require('supertest');
const app = require('../src/app');

describe('Testing Static GET', () => {
  test('/route', (done) => {
    requset(app)
      .get('/')
      .expect(200)
      .expect('content-type', /html/)
      .end((err) => {
        if (err) return done(err);
        return done();
      });
  });

  test('not found', (done) => {
    requset(app)
      .get('/notfound')
      .expect(404)
      .expect('content-type', /html/)
      .end((err) => {
        if (err) return done(err);
        return done();
      });
  });
  test('search route GET', (done) => {
    requset(app)
      .get('/search')
      .expect(200)
      .expect('content-type', /json/)
      .end((err) => {
        if (err) return done(err);
        return done();
      });
  });
});
