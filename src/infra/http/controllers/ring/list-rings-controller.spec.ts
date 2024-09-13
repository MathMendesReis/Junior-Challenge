import request from 'supertest'
import { app } from '../../../../app'
import { describe, expect, test } from 'vitest'
describe('GET /ring (e2e)', () => {
  test('It should be possible to list all rings', async () => {
    const res = await request(app).get('/api/ring')
    expect(res.status).toBe(200);
  })
})

