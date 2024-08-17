import prisma from "@/lib/prisma";
import { Result } from "@/types/result";
import { generateToken } from "@/utils/jwt";

const login = async (email: string, password: string): Promise<Result<any>> => {
  const user = await prisma.user.findUnique({
    where: {
      email: email,
    },
  });

  if (!user) {
    return {
      data: null,
      message: "User not found",
      code: 404,
    };
  }

  const isMatch = await Bun.password.verify(password, user.password);

  if (!isMatch) {
    return {
      data: null,
      message: "Invalid credential",
      code: 400,
    };
  }

  const token = await generateToken(user);

  return {
    data: {
      token: token,
    },
    message: "Successfully logged in",
    code: 200,
  };
};

export { login };
