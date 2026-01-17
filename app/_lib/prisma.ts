import { PrismaPg } from "@prisma/adapter-pg"
import { PrismaClient } from "../../app/generated/prisma/client"

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL })

declare global {
  var cachedPrisma: PrismaClient
}

let prisma: PrismaClient
if (process.env.NODE_ENV === "production") {
  prisma = new PrismaClient({ adapter })
} else {
  if (!global.cachedPrisma) {
    global.cachedPrisma = new PrismaClient({ adapter })
  }
  prisma = global.cachedPrisma
}

export const db = prisma
