import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

async function main() {
    const res = await prisma.user.findMany({});
    const response = await prisma.user.findUnique({
        where:{
            id:1
        },
        include:{
            posts: true
        }
    })
    console.log(res)
    console.log(response)

}

main()

