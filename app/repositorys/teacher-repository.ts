import prisma from "../database"

export const findByTeacher = async (teacherId: string) => {
  return await prisma.teacher.findUnique({
    where: {
      id: teacherId
    }
  })
}