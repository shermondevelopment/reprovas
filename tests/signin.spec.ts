import prisma  from '../app/database'

import supertest from 'supertest'
import app from '../app/settings/server'

describe('Auth', () => {

  afterAll(async () => {
    await prisma.$disconnect();
  });

 describe('POST /signin', () => {
  it('should call route /signin and get status code 200',  async () => {
    const response = await supertest(app).post('/signin').send({
      email: 'admin@gmail.com',
      password: 'teste@teste'
    })
    expect(response.status).toBe(200)
    expect(response.token).not.toBeNull()
  })
  it('Should return 401 if invalid credentials are provided', async () => {
    const response = await supertest(app).post('/signin').send({
      email: 'admin@gmail.com',
      password: 'password_incorrect'
    })
    expect(response.status).toBe(401)
  })
  it('Should return 422 if email not provided', async () => {
    const response = await supertest(app).post('/signin').send({
      password: 'password_incorrect'
    })
    expect(response.status).toBe(422)
  })
  it('Should return 422 if password not provided', async () => {
    const response = await supertest(app).post('/signin').send({
      email: 'admin@gmail.com',
    })
    expect(response.status).toBe(422)
  })
 })

})