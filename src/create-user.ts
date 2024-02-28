import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient({log: ['info','query','error','warn']});


async function main() {
    // ... you will write your Prisma Client queries here
    await prisma.user.create({
        data: {
            email: "paras.dev@gmail.com",
            name: "Paras Bharde"
        }
    })
}

main()
