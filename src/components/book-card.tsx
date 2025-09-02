import Image from 'next/image';
import Link from 'next/link';
import type { Book } from '@/lib/types';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Star } from 'lucide-react';

interface BookCardProps {
  book: Book;
}

export default function BookCard({ book }: BookCardProps) {
  return (
    <div className="flex flex-col h-full">
        <Link href={`/book/${book.id}`} className="block h-full">
            <Card className="flex flex-col overflow-hidden h-full transition-all hover:shadow-lg hover:-translate-y-1">
            <CardHeader className="p-0 relative">
                <Image
                src={book.coverImage}
                alt={`Cover of ${book.title}`}
                width={300}
                height={450}
                className="object-cover w-full aspect-[2/3]"
                data-ai-hint="book cover"
                />
                <Badge
                variant="secondary"
                className="absolute top-2 right-2 flex items-center gap-1"
                >
                <Star className="h-3 w-3 text-yellow-500 fill-yellow-500" />
                <span>{book.rating}</span>
                </Badge>
            </CardHeader>
            <CardFooter className="flex-col items-start p-3 flex-grow">
                <p className="font-semibold text-sm leading-tight truncate w-full" title={book.title}>{book.title}</p>
            </CardFooter>
            </Card>
        </Link>
         <div className="pt-1 text-center">
            <Link href={`/author/${encodeURIComponent(book.author)}`} className="text-xs text-muted-foreground hover:text-primary transition-colors truncate w-full" title={book.author}>
                {book.author}
            </Link>
        </div>
    </div>
  );
}
