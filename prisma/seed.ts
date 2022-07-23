import bcrypt from 'bcrypt'

import prisma from '../app/database'

// create admin user
async function main() {
  const SALT = 10
  const hashedPassword = bcrypt.hashSync('teste@teste', SALT)

  await prisma.user.createMany({
    data: [
      {
        email: 'admin@gmail.com',
        password: hashedPassword
      },
      {
        email: 'teste@gmail.com',
        password: hashedPassword
      }
    ],
    skipDuplicates: true
  })
}

main()
  .catch((e) => {
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
