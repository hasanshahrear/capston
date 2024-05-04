import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const prisma = new PrismaClient();
const JWT_SECRET = "eyJhbGciOiJIUzI1NiJ9";

export async function POST(req: Request) {
  const { email, password } = await req.json();

  try {
    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (!user) {
      return Response.json(
        { message: "Invalid email or password" },
        { status: 400 }
      );
    }

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return Response.json(
        { message: "Invalid email or password" },
        { status: 400 }
      );
    }

    const accessToken = jwt.sign({ userId: user }, JWT_SECRET);

    const response = {
      isSuccess: true,
      statusCode: 200,
      status: "OK",
      message: "Your request is success!",
      data: {
        user,
        accessToken,
      },
    };

    return Response.json(response);
  } catch (error) {
    return Response.json({ message: error }, { status: 500 });
  }
}
