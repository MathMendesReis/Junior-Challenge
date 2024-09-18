import request from 'supertest'
import { describe, expect, it, test } from 'vitest'
import { app } from './app'
describe('GET / (e2e)', async () => {
  test('API is running on ', async () => {
    const res = await request(app).get('/')
    expect(res.status).toBe(200);
    expect(res.body).toEqual({ status: 'API is running on /api' });

  })
})

