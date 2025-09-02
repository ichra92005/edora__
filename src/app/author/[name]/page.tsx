import { books } from '@/lib/data';
import BookCard from '@/components/book-card';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Eye } from 'lucide-react';
import Link from 'next/link';

interface AuthorPageProps {
  params: {
    name: string;
  };
}

export default function AuthorPage({ params }: AuthorPageProps) {
  const authorName = decodeURIComponent(params.name);
  const authorBooks = books.filter(book => book.author === authorName);

  return (
    <div className="container mx-auto px-4 py-8">
      <Card className="mb-8 overflow-hidden">
        <div className="relative h-48 bg-primary/10">
           <Image
              src="https://picsum.photos/1200/400"
              alt="Author background"
              fill
              className="object-cover"
              data-ai-hint="abstract background"
            />
          <div className="absolute inset-0 bg-black/30" />
          <div className="absolute bottom-4 left-4 flex items-end gap-4">
            <Image
              src="https://picsum.photos/seed/author/150/150"
              alt={`Photo of ${authorName}`}
              width={128}
              height={128}
              className="rounded-full border-4 border-background shadow-lg object-cover"
              data-ai-hint="author portrait"
            />
             <div>
              <h1 className="text-4xl font-bold font-headline text-white shadow-text">{authorName}</h1>
              <p className="text-white/90 shadow-text">{authorBooks.length} Published Works</p>
            </div>
          </div>
        </div>
      </Card>

      <div>
        <h2 className="text-3xl font-bold font-headline mb-6">Books by {authorName}</h2>
        {authorBooks.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
            {authorBooks.map(book => (
              <BookCard key={book.id} book={book} />
            ))}
          </div>
        ) : (
          <p className="text-muted-foreground">No books found for this author.</p>
        )}
      </div>
    </div>
  );
}
