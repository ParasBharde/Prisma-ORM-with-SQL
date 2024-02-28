import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
   const res = await prisma.user.update({
        where:{
            id: 1
        },
        data:{
            name: "Paraskumar"
        }
    });
    console.log(res)
}

main()

