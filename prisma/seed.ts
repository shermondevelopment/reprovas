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
  
  await prisma.category.createMany({
    data: [
      {
        id: '0d2c416a-ccb8-487f-92d1-eb5079f6c0e4',
        name: 'Recuperação',
      },
      {
        id: 'b4900458-a466-4bef-903d-06b900e1e801',
        name: 'Projeto'
      }
    ],
    skipDuplicates: true
  })

  await prisma.term.createMany({
    data: [
      {
        id: '08151c6d-9187-42d0-aced-dcbb2b4fa9bd',
        number: 4
      }
    ],
    skipDuplicates: true
  })

  await prisma.discipline.createMany({
    data: [
      { 
        id: '8fd431c3-5d24-455b-8f81-7de6247e949b',
        name: 'HTML e CSS', 
        term_id: '08151c6d-9187-42d0-aced-dcbb2b4fa9bd'  
      }
    ]
  })

  await prisma.teacher.createMany({
    data: [
      { id: 'd4206bda-b344-4914-b2dd-4ca98bfcde5c', name: 'Bruna Hamori' },
      { id: 'e8617cd5-03f9-4d18-86f0-17bb6fa3a40f', name: 'Diego Pinho' }
    ],
    skipDuplicates: true
  })

  await prisma.teacherDiscipline.createMany({
    data: [
      {
        id: '89f56120-56e7-444e-9342-8de6c6f792d6',
        teacher_id: 'e8617cd5-03f9-4d18-86f0-17bb6fa3a40f',
        discipline_id: '8fd431c3-5d24-455b-8f81-7de6247e949b'
      },
      {
        id: '89f56120-56e7-444e-9342-8de6c6f792d6',
        teacher_id: 'e8617cd5-03f9-4d18-86f0-17bb6fa3a40f',
        discipline_id: '8fd431c3-5d24-455b-8f81-7de6247e949b'
      }
    ],
    skipDuplicates: true
  })

  await prisma.test.createMany({
    data: [
      {
        name: 'html e css',
        uri: 'https://www.google.com',
        category_id: '0d2c416a-ccb8-487f-92d1-eb5079f6c0e4',
        teacher_discipline_id: '89f56120-56e7-444e-9342-8de6c6f792d6'
      }
    ],
    skipDuplicates: true
  })


}

main()
  .catch((e) => {
  console.log(e)

    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
