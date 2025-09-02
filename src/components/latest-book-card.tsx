import Image from 'next/image';
import Link from 'next/link';
import type { Book } from '@/lib/types';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Bookmark, Clock } from 'lucide-react';

interface LatestBookCardProps {
  book: Book;
}

export default function LatestBookCard({ book }: LatestBookCardProps) {
  // Mock data for chapter and time since it doesn't exist in the data model
  const chapter = Math.floor(Math.random() * 100) + 1;
  const time = Math.floor(Math.random() * 24) + 1;

  return (
    <Link href={`/book/${book.id}`} className="block">
        <Card className="flex items-center gap-4 p-3 overflow-hidden transition-all hover:shadow-md">
        <div className="relative shrink-0">
            <Image
            src={book.coverImage}
            alt={`غلاف ${book.title}`}
            width={80}
            height={120}
            className="object-cover rounded-md w-20 h-[120px]"
            data-ai-hint="book cover"
            />
            <Badge className="absolute top-1 right-1 bg-green-600 text-white hover:bg-green-700">متقدم</Badge>
        </div>
        <div className="flex-grow min-w-0">
            <h3 className="font-semibold truncate font-headline text-lg" title={book.title}>{book.title}</h3>
            <div className="flex items-center gap-4 text-sm text-muted-foreground mt-2">
                <div className="flex items-center gap-1">
                    <Bookmark className="h-4 w-4" />
                    <span>الفصل {chapter}</span>
                </div>
                <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    <span>منذ {time} ساعات</span>
                </div>
            </div>
            <p className="text-xs text-muted-foreground truncate w-full mt-1" title={book.author}>{book.author}</p>
        </div>
        </Card>
    </Link>
  );
}
