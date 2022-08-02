// const app = require('../database')
const app = require('../src/database');

describe('Post Data Parking', () => {
  it('Buat post baru data parking', async () => {
    const res = await request(app)
      .post('/parking')
      .send({
        level: 'B77',
        slot: 5,
      })
    expect(res.statusCode).toEqual(201)
    expect(res.body).toHaveProperty('post')
  })
})