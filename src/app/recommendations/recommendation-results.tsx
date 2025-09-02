import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookText } from "lucide-react";

interface RecommendationResultsProps {
  results: string;
}

export default function RecommendationResults({ results }: RecommendationResultsProps) {
  const recommendations = results.split(',').map(book => book.trim()).filter(Boolean);

  return (
    <div className="w-full pt-4">
        <Card className="w-full bg-primary/10 border-primary/20">
            <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg font-headline">
                    <BookText className="h-5 w-5 text-primary" />
                    Here are your recommendations!
                </CardTitle>
            </CardHeader>
            <CardContent>
                <ul className="list-disc pl-5 space-y-2">
                    {recommendations.map((rec, index) => (
                        <li key={index} className="text-foreground/90">{rec}</li>
                    ))}
                </ul>
            </CardContent>
        </Card>
    </div>
  );
}
