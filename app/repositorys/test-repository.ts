import { url } from "inspector";
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

export const findByTestToDiscipline = async () => {
  const result = await prisma.term.findMany({
    select: {
      number: true,
      Discipline: {
        select: {
          id: true,
          name: true,
          TeacherDiscipline: {
            select: {
              teacher: {
                select: {
                  name: true
                }
              },
              Test: {
                select: {
                  name: true,
                  uri: true,
                  category: { select: { name: true } }
                }
              }
            }
          }
        }
      }
    },
  })
  return result
}

export const  findByTestToTeacher = async () => {
  const test = await prisma.teacher.findMany({
    select: {
      id: true,
      name: true,
      TeacherDiscipline: {
        select: {
          discipline: {
            select: {
              name: true,
              term: { select: {number: true} }
            }
          },
          Test: {
            select: {
              name: true,
              uri: true,
              category: {
                select: {
                  name: true
                }
              }
            }
          }
        }
      }
    }
  })
  return test
}