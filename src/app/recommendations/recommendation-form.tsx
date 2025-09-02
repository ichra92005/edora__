"use client";

import { useFormState, useFormStatus } from "react-dom";
import { getBookRecommendations, type RecommendationState } from "./actions";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Loader2, Wand2 } from "lucide-react";
import RecommendationResults from "./recommendation-results";

const initialState: RecommendationState = {
    message: "",
    errors: {},
    data: null,
};

function SubmitButton() {
    const { pending } = useFormStatus();
    return (
        <Button type="submit" disabled={pending} className="w-full">
            {pending ? (
                <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Getting Recommendations...
                </>
            ) : (
                <>
                    <Wand2 className="mr-2 h-4 w-4" />
                    Get Recommendations
                </>
            )}
        </Button>
    );
}

export default function RecommendationForm() {
    const [state, formAction] = useFormState(getBookRecommendations, initialState);

    return (
        <Card>
            <form action={formAction}>
                <CardHeader>
                    <CardTitle>Tell Us What You Like</CardTitle>
                    <CardDescription>The more details you provide, the better the recommendations will be.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                    <div className="space-y-2">
                        <Label htmlFor="readingHistory">Your Reading History</Label>
                        <Textarea
                            id="readingHistory"
                            name="readingHistory"
                            placeholder="e.g., 'The Lord of the Rings by J.R.R. Tolkien, Pride and Prejudice by Jane Austen'"
                            rows={4}
                            aria-describedby="readingHistory-error"
                        />
                        <div id="readingHistory-error" aria-live="polite" aria-atomic="true">
                           {state.errors?.readingHistory && state.errors.readingHistory.map((error: string) => (
                                <p className="mt-2 text-sm text-destructive" key={error}>{error}</p>
                           ))}
                        </div>
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="preferredCategories">Preferred Genres</Label>
                        <Textarea
                            id="preferredCategories"
                            name="preferredCategories"
                            placeholder="e.g., 'Fantasy, Historical Fiction, Thrillers'"
                            rows={2}
                            aria-describedby="preferredCategories-error"
                        />
                         <div id="preferredCategories-error" aria-live="polite" aria-atomic="true">
                            {state.errors?.preferredCategories && state.errors.preferredCategories.map((error: string) => (
                                <p className="mt-2 text-sm text-destructive" key={error}>{error}</p>
                           ))}
                        </div>
                    </div>
                </CardContent>
                <CardFooter className="flex flex-col gap-4">
                    <SubmitButton />
                    {state.message === "Success" && state.data && <RecommendationResults results={state.data} />}
                    {state.message !== "Success" && state.message !== "" && (
                        <p className="text-sm text-destructive">{state.message}</p>
                    )}
                </CardFooter>
            </form>
        </Card>
    );
}
