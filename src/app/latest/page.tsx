import { books as allBooks } from '@/lib/data';
import LatestBookCard from '@/components/latest-book-card';
import type { Book } from '@/lib/types';
import { Button } from '@/components/ui/button';
import { List } from 'lucide-react';

export default function LatestPage() {
  const latestBooks: Book[] = [...allBooks].sort((a, b) => b.id - a.id);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-3xl font-headline font-bold text-right" dir="rtl">
          أحدث الفصول
        </h2>
        <div className="flex items-center gap-2">
            <Button variant="outline" size="icon">
                <List className="h-5 w-5" />
            </Button>
            <div className="flex border rounded-md">
                 <Button variant="ghost" className="rounded-r-none border-l">
                    B
                 </Button>
                 <Button variant="ghost" className="rounded-l-none">
                    A
                 </Button>
            </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {latestBooks.map(book => (
          <LatestBookCard key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
}
