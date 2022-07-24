import { Request, Response } from 'express'
import {  Test } from '@prisma/client'
import { NewTestService, TestRequest } from '../services/test-service'


export const NewTestController = async (req: Request, res: Response) => {
  const testData: TestRequest  = req.body

  const addTest = await NewTestService(testData)

  res.status(200).json(addTest)
}