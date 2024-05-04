import { PrismaClient } from "@prisma/client";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";
import bcrypt from "bcrypt";
import { z } from "zod";

const prisma = new PrismaClient();

const userSchema = z.object({
  name: z.string().min(3),
  email: z.string().email(),
  password: z.string(),
  isAdmin: z.boolean().optional(),
  age: z.date().optional(),
});

export async function POST(req: Request) {
  const userData = await req.json();

  try {
    const validatedData = userSchema.parse(userData);

    const hashedPassword = await bcrypt.hash(validatedData.password, 10);
    validatedData.password = hashedPassword;

    const newUser = await prisma.user.create({
      data: validatedData,
    });

    return Response.json(
      { user: newUser },
      {
        status: 201,
        statusText: "Created successfully",
      }
    );
  } catch (error) {
    console.log({ error });
    if (error instanceof z.ZodError) {
      return Response.json({ errors: error.errors }, { status: 500 });
    } else {
      const err = error as PrismaClientKnownRequestError;
      return Response.json({ message: err }, { status: 500 });
    }
  }
}
