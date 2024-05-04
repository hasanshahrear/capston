import { PrismaClient } from "@prisma/client";
import { z } from "zod";

const prisma = new PrismaClient();

const movieSchema = z.object({
  name: z.string().min(3),
  hero: z.string().optional(),
  heroine: z.string().optional(),
  director: z.string().optional(),
  producer: z.string().optional(),
  thumbnail: z.string(),
  categories: z.array(z.number()),
  movieUrl: z.string(),
  isFeatured: z.boolean(),
  description: z.string().optional(),
  rating: z.number(),
  requestedForCategory: z.string(),
});

export async function POST(req: Request) {
  const movieData = await req.json();

  try {
    const validatedData = movieSchema.parse(movieData);

    if (!Array.isArray(validatedData.categories)) {
      throw new Error("categoryId must be an array of numbers");
    }

    const dataWithSingleCategoryId = {
      ...validatedData,
      categoryId: validatedData.categories,
    };

    console.log({ validatedData });

    const newMovie = await prisma.movie.create({
      data: movieData,
    });

    const response = {
      isSuccess: true,
      statusCode: 201,
      status: "OK",
      message: "Your request is success!",
      data: {
        ...newMovie,
      },
    };
    return Response.json(response, {
      status: 201,
      statusText: "Created successfully",
    });
  } catch (error) {
    console.log({ error });
    return Response.json({ message: error }, { status: 500 });
  }
}
