"use server";

import { recommendSimilarBooks } from "@/ai/flows/recommend-similar-books";
import { z } from "zod";

const RecommendSimilarBooksInputSchema = z.object({
  readingHistory: z.string().min(10, "Please provide more details about your reading history."),
  preferredCategories: z.string().min(3, "Please provide at least one preferred category."),
});

export type RecommendationState = {
  message?: string;
  errors?: {
    readingHistory?: string[];
    preferredCategories?: string[];
  }
  data?: string | null;
};

export async function getBookRecommendations(
  prevState: RecommendationState,
  formData: FormData
): Promise<RecommendationState> {
  const validatedFields = RecommendSimilarBooksInputSchema.safeParse({
    readingHistory: formData.get('readingHistory'),
    preferredCategories: formData.get('preferredCategories'),
  });

  if (!validatedFields.success) {
    return {
      message: "Invalid form data.",
      errors: validatedFields.error.flatten().fieldErrors,
      data: null,
    };
  }
  
  try {
    const result = await recommendSimilarBooks(validatedFields.data);
    return {
      message: "Success",
      errors: {},
      data: result.recommendedBooks,
    };
  } catch (error) {
    console.error(error);
    return {
      message: "An unexpected error occurred. Please try again.",
      errors: {},
      data: null,
    };
  }
}
