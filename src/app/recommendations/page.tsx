import RecommendationForm from "./recommendation-form";

export default function RecommendationsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <section className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-headline font-bold mb-4">
          AI Book Recommendations
        </h2>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Unsure what to read next? Let our AI-powered expert analyze your tastes and suggest books you're sure to love. Provide your reading history and preferred genres to get started.
        </p>
      </section>

      <div className="max-w-2xl mx-auto">
        <RecommendationForm />
      </div>
    </div>
  );
}
