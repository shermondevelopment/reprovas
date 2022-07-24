import prisma  from '../app/database'

import supertest from 'supertest'
import app from '../app/settings/server'

const makeSut = (email: string, password: string, outer: object) => ({
  email,
  password,
  ...outer
})

describe('Auth', () => {

  beforeAll(async () => {
    await prisma.$executeRaw`DELETE FROM users WHERE email = 'admin@gmail.com'`;
  })

  afterAll(async () => {
    await prisma.$disconnect();
  });

 describe('POST /signup',  () => {
    it('Should call router /signup with credentials valid', async () => {
      const response = await supertest(app).post('/signup').send(makeSut(
        'admin@gmail.com',
        'teste@teste',
        { confirm_password: 'teste@teste'  }
      ))
      expect(response.status).toBe(201)
      expect(response.token).not.toBeNull()
    })
    it('should receive status 422 if not provided email ', async () => {
      const response = await supertest(app).post('/signup').send({
        password: 'teste@teste',
        confirm_password:'teste@treste'
      })
      expect(response.status).toBe(422)
    })
    it('should receive status 422 if not provided password ', async () => {
      const response = await supertest(app).post('/signup').send({
        email: 'teste@teste',
        confirm_password:'teste@treste'
      })
      expect(response.status).toBe(422)
    })
    it('should receive status 422 if not provided confirm password ', async () => {
      const response = await supertest(app).post('/signup').send({
        email: 'teste@teste',
        password:'teste@treste'
      })
      expect(response.status).toBe(422)
    })
    it('should receive status 401 if user already exists', async () => {
      const response = await supertest(app).post('/signup').send(makeSut(
        'admin@gmail.com',
        'teste@teste',
        { confirm_password: 'teste@teste'  }
      ))
      expect(response.status).toBe(401)
    })
 })

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