import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({log: ['info','query','error','warn']});

async function main() {
    await prisma.post.create({
        data: {
            title: "Test 2",
            content: "description 2",
            published: true,
            author: {
                connect: {
                    id: 1
                }
            }
        }
    })
}

main()

