import prisma from "../database"

export const findByDiscipline = async (disciplineId: string) => {
  return await prisma.discipline.findUnique({
    where: {
      id: disciplineId
    }
  })
}