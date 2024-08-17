import { NODE_ENV } from "@/configs/constant";
import { PrismaClient } from "@/prisma/generated";

const prismaClientSingleton = () => {
    return new PrismaClient();
  };
  
  declare const globalThis: {
    prismaGlobal: ReturnType<typeof prismaClientSingleton>;
  } & typeof global;
  
  const prisma = globalThis.prismaGlobal ?? prismaClientSingleton();
  
  export default prisma;
  
  if (NODE_ENV !== "production") globalThis.prismaGlobal = prisma;
  