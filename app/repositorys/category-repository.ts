import prisma from "../database"


export const findByCategory = async (id: string) => {
  return await prisma.category.findUnique({
    where: {
      id
    }
  })
}