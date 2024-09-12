import request from 'supertest'
import { app } from '../../../../app'
import { describe, expect, test } from 'vitest'
describe('POST /ring (e2e)', () => {
  test('It should be possible to create a ring', async () => {
    const res = await request(app).post('/api/ring').send({
      name: 'One Ring',
      power: 'Invisibility',
      forgedBy: 'Elfos',
      imageURL: 'http://example.com/one-ring.jpg',
    })
    expect(res.status).toBe(201);
  })
})

