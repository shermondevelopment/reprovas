import prisma from "../database"

export const findTeachAndDisciplineById = async (teacher_discipline_id: string) => {
  return await prisma.teacherDiscipline.findUnique({
    where: {
      id: teacher_discipline_id
    }
  })
}