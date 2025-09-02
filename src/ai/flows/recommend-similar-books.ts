'use server';

/**
 * @fileOverview A book recommendation AI agent.
 *
 * - recommendSimilarBooks - A function that recommends books based on user preferences.
 * - RecommendSimilarBooksInput - The input type for the recommendSimilarBooks function.
 * - RecommendSimilarBooksOutput - The return type for the recommendSimilarBooks function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const RecommendSimilarBooksInputSchema = z.object({
  readingHistory: z
    .string()
    .describe(
      'A list of books the user has read, including titles and authors. Example: "The Lord of the Rings by J.R.R. Tolkien, Pride and Prejudice by Jane Austen"'
    ),
  preferredCategories: z
    .string()
    .describe(
      'A list of the user’s preferred book categories or genres. Example: "Fantasy, Historical Fiction, Romance"'
    ),
});
export type RecommendSimilarBooksInput = z.infer<
  typeof RecommendSimilarBooksInputSchema
>;

const RecommendSimilarBooksOutputSchema = z.object({
  recommendedBooks: z
    .string()
    .describe(
      'A list of recommended books, including titles and authors. Example: "The Hobbit by J.R.R. Tolkien, Emma by Jane Austen"'
    ),
});
export type RecommendSimilarBooksOutput = z.infer<
  typeof RecommendSimilarBooksOutputSchema
>;

export async function recommendSimilarBooks(
  input: RecommendSimilarBooksInput
): Promise<RecommendSimilarBooksOutput> {
  return recommendSimilarBooksFlow(input);
}

const prompt = ai.definePrompt({
  name: 'recommendSimilarBooksPrompt',
  input: {schema: RecommendSimilarBooksInputSchema},
  output: {schema: RecommendSimilarBooksOutputSchema},
  prompt: `You are a book recommendation expert. Based on the user's reading history and preferred categories, recommend similar books.

Reading History: {{{readingHistory}}}
Preferred Categories: {{{preferredCategories}}}

Recommended Books:`, // Removed example from here
});

const recommendSimilarBooksFlow = ai.defineFlow(
  {
    name: 'recommendSimilarBooksFlow',
    inputSchema: RecommendSimilarBooksInputSchema,
    outputSchema: RecommendSimilarBooksOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
