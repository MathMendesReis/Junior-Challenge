import request from 'supertest'
import { app } from '../../../../app'
import { describe, expect, test } from 'vitest'
describe('DELETE /ring (e2e)', () => {
  test('It should be possible to list all rings', async () => {
    const res = await request(app).delete('/api/ring/98a7841c-800a-401d-8c38-724d4ef95abc').send()
    console.log(res.status)
    expect(res.status).toBe(200);
  })
})

