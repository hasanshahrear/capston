import { PrismaClient } from "@prisma/client";
import { z } from "zod";

const prisma = new PrismaClient();

const categorySchema = z.object({
  categoryName: z.string().min(3),
});

export async function POST(req: Request) {
  const userData = await req.json();

  try {
    const validatedData = categorySchema.parse(userData);

    const newCategory = await prisma.category.create({
      data: validatedData,
    });

    const response = {
      isSuccess: true,
      statusCode: 201,
      status: "OK",
      message: "Your request is success!",
      data: {
        ...newCategory,
      },
    };
    return Response.json(response, {
      status: 201,
      statusText: "Created successfully",
    });
  } catch (error) {
    return Response.json({ message: error }, { status: 500 });
  }
}
