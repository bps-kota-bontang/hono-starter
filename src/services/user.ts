import prisma from "@/libs/prisma";
import { User } from "@/prisma/generated";
import { Result } from "@/types/result";

export async function getUsers(): Promise<Result<User[]>> {
  const users = await prisma.user.findMany();

  return {
    data: users,
    message: "successfully retrieved users",
    code: 200,
  };
}

export async function getUser(userId: string): Promise<Result<User>> {
  const user = await prisma.user.findFirst({
    where: {
      id: userId,
    },
  });

  if (!user) {
    return {
      data: null,
      message: "user not found",
      code: 404,
    };
  }

  return {
    data: user,
    message: "successfully retrieved user details",
    code: 200,
  };
}
