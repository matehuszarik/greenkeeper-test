const app = require('./index');
const supertest = require('supertest');

const fakeApp = supertest(app);

describe('App test', () => {
  describe('/', () => {
    it('should return OK message', async () => {
      const { body } = await fakeApp.get('/')
        .expect(200);
  
      expect(body).toEqual({
        status: 'ok'
      });
    });
  });

  describe('/mirror', () => {
    // it('should send back posted string message in body', async () => {
    //   const message = 'Hello there';
    //   const { body } = await fakeApp.post('/mirror')
    //     .set('Content-Type','text/plain')
    //     .send(message)
    //     .expect(200);
  
    //   expect(body).toEqual(message);
    // });

    it('should send back parsed JSON message in body ', async () => {
      const message = {
        served: true,
        user: {
          id: 123456789,
          username: 'abcdefgh'
        }
      };
      const { body } = await fakeApp.post('/mirror')
        .set('Content-Type', 'application/json')
        .send(message)
        .expect(200);
  
      expect(body).toStrictEqual(message);
    });
  });
});