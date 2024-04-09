import { PrismaClient } from "@prisma/client";
// import { env } from "../../env";

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

export const db =
  globalForPrisma.prisma ??
  new PrismaClient({
    log: ["query", "error", "warn"],
  });

// if (env.NODE_ENV !== "production") globalForPrisma.prisma = db;
