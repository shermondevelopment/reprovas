import { findByCategory } from "../repositorys/category-repository"
import { findByDiscipline } from "../repositorys/discipline-repository"
import { findTeachAndDisciplineById } from "../repositorys/teacher-discipline-repository"
import { findByTeacher } from "../repositorys/teacher-repository"
import { createTest, findByTestToDiscipline, findByTestToTeacher } from "../repositorys/test-repository"
import { AppErrorResponse } from "../utils/app-error-response"

export interface TestRequest {
  name: string
  uri: string
  category_id: string
  teacher_discipline_id: string
}

export const NewTestService = async (test: TestRequest) => {

  const  { name, uri, category_id, teacher_discipline_id } = test

  /** search category */
  const categoryExist = await findByCategory(category_id)

  const findDisciplineByTeacher = await findTeachAndDisciplineById(teacher_discipline_id)  

  if(!categoryExist) {
    return AppErrorResponse(404, 'category does not exist')
  }

  if(!teacher_discipline_id) {
    return AppErrorResponse(404, 'discipline does not exist')
  }



  return await createTest({ name, uri, category_id, teacher_discipline_id})


}

export const findByTestToDisciplineService = async () => {

  const disciplines = await findByTestToDiscipline()

  return disciplines

}

export const findByTestToTeacherService = async () => {

  const disciplines = await findByTestToTeacher()

  return disciplines

}