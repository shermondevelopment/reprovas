import prisma from "../database";
import { TestRequest } from "../services/test-service";

export const createTest =  async (test: TestRequest) => {
  return await prisma.test.create({
    data: {
      name: test.name,
      uri: test.uri,
      category_id: test.category_id,
      teacher_discipline_id: test.teacher_discipline_id,
    }
  })
}