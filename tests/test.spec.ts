import { faker } from '@faker-js/faker';
import prisma  from '../app/database'

import supertest from 'supertest'
import app from '../app/settings/server';
import jwt from 'jsonwebtoken'



const makeRequestValid = () => ({
  name: faker.name.firstName(),
	uri: faker.internet.url(),
	category_id: "b4900458-a466-4bef-903d-06b900e1e801",
	teacher_discipline_id: "89f56120-56e7-444e-9342-8de6c6f792d6"
})



const generateToken = () => ({
  token: jwt.sign({ id: faker.unique }, process.env.JWT_KEY)
})



describe('Test', () => {

  beforeAll(async () => {
    await prisma.$executeRaw`TRUNCATE TABLE test`;
  })

  afterAll(async () => {
    await prisma.$disconnect();
  });

  it('should call router  /test with parameters valid and receive status 200', async () => {
    const response = await supertest(app).post('/test').send(makeRequestValid()).set('Authorization', `Bearer ${generateToken().token}`)
    expect(response.status).toBe(201)
  })

  it('should call router /test with category that does not exists and receive status 404', async () => {
    const response = await supertest(app).post('/test').send({
      name: faker.name.firstName(),
      uri: faker.internet.url(),
      category_id: "b4900458",
      teacher_discipline_id: "89f56120-56e7-444e-9342-8de6c6f792d6"
    }).set('Authorization', `Bearer ${generateToken().token}`)
    expect(response.status).toBe(404)
  })

  it('should call router /test with teacher_discipline_id that does not exists and receive status 500', async () => {
    const response = await supertest(app).post('/test').send({
      name: faker.name.firstName(),
      uri: faker.internet.url(),
      category_id: "b4900458-a466-4bef-903d-06b900e1e801",
      teacher_discipline_id: "89f56120"
    }).set('Authorization', `Bearer ${generateToken().token}`)
    expect(response.status).toBe(500)
  })

  it('should call router /test and receive status 422 if name not provided', async () => {
    const response = await supertest(app).post('/test').send({
      uri: faker.internet.url(),
      category_id: "b4900458-a466-4bef-903d-06b900e1e801",
      teacher_discipline_id: "89f56120-56e7-444e-9342-8de6c6f792d6"
    }).set('Authorization', `Bearer ${generateToken().token}`)
    expect(response.status).toBe(422)
  })

  it('should call router /test and receive status 422 if uri not provided', async () => {
    const response = await supertest(app).post('/test').send({
      name: faker.name.firstName(),
      category_id: "b4900458-a466-4bef-903d-06b900e1e801",
      teacher_discipline_id: "89f56120-56e7-444e-9342-8de6c6f792d6"
    }).set('Authorization', `Bearer ${generateToken().token}`)
    expect(response.status).toBe(422)
  })

  it('should call router /test and receive status 422 if uri not valid', async () => {
    const response = await supertest(app).post('/test').send({
      name: faker.name.firstName(),
      uri: faker.internet.email(),
      category_id: "b4900458-a466-4bef-903d-06b900e1e801",
      teacher_discipline_id: "89f56120-56e7-444e-9342-8de6c6f792d6"
    }).set('Authorization', `Bearer ${generateToken().token}`)
    expect(response.status).toBe(422)
  })

  it('should call router /test-to-discipline with valid token and receive status 200', async () => {
    const response = await supertest(app).get('/test-to-discipline').set('Authorization', `Bearer ${generateToken().token}`)
    expect(response.status).toBe(200)
  })

  it('should call router /test-to-teacher with valid token and receive status 200', async () => {
    const response = await supertest(app).get('/test-to-teacher').set('Authorization', `Bearer ${generateToken().token}`)
    expect(response.status).toBe(200)
  })

})