import { books } from '@/lib/data';
import BookCard from '@/components/book-card';
import Image from 'next/image';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Mail } from 'lucide-react';

interface PublisherPageProps {
  params: {
    name: string;
  };
}

export default function PublisherPage({ params }: PublisherPageProps) {
  const publisherName = decodeURIComponent(params.name);
  const publisherBooks = books.filter(book => book.publisher === publisherName);
  
  // This is a placeholder. In a real application, you would get the
  // current user's role from your authentication system.
  const userRole = 'writer';


  return (
    <div className="container mx-auto px-4 py-8">
      <Card className="mb-8 overflow-hidden">
        <div className="relative h-48 bg-primary/10">
           <Image
              src="https://picsum.photos/1200/400"
              alt="Publisher background"
              fill
              className="object-cover"
              data-ai-hint="abstract background"
            />
          <div className="absolute inset-0 bg-black/30" />
          <div className="absolute bottom-4 left-4 flex items-end gap-4">
            <Image
              src="https://picsum.photos/seed/publisher/150/150"
              alt={`Logo of ${publisherName}`}
              width={128}
              height={128}
              className="rounded-lg border-4 border-background shadow-lg object-cover bg-white p-2"
              data-ai-hint="company logo"
            />
             <div className="flex items-center gap-4">
                <div>
                    <h1 className="text-4xl font-bold font-headline text-white shadow-text">{publisherName}</h1>
                    <p className="text-white/90 shadow-text">{publisherBooks.length} Published Works</p>
                </div>
                {userRole === 'writer' && (
                  <Button variant="secondary">
                      <Mail className="mr-2 h-4 w-4" />
                      Invite to Connect
                  </Button>
                )}
            </div>
          </div>
        </div>
      </Card>

      <div>
        <h2 className="text-3xl font-bold font-headline mb-6">Books by {publisherName}</h2>
        {publisherBooks.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
            {publisherBooks.map(book => (
              <BookCard key={book.id} book={book} />
            ))}
          </div>
        ) : (
          <p className="text-muted-foreground">No books found for this publisher.</p>
        )}
      </div>
    </div>
  );
}
