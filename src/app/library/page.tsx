"use client";

import { useState, useMemo, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { books as allBooks } from '@/lib/data';
import type { Book } from '@/lib/types';
import BookCard from '@/components/book-card';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Search } from 'lucide-react';

const genres = Array.from(new Set(allBooks.map(book => book.genre)));

function BookGrid() {
  const searchParams = useSearchParams();
  const genreFromQuery = searchParams.get('genre');

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedGenre, setSelectedGenre] = useState('All');
  const [sortOrder, setSortOrder] = useState('rating-desc');

  useEffect(() => {
    if (genreFromQuery && genres.includes(genreFromQuery)) {
      setSelectedGenre(genreFromQuery);
    }
  }, [genreFromQuery]);

  const filteredAndSortedBooks = useMemo(() => {
    let books: Book[] = [...allBooks];

    if (selectedGenre !== 'All') {
      books = books.filter(book => book.genre === selectedGenre);
    }

    if (searchTerm) {
      const lowercasedTerm = searchTerm.toLowerCase();
      books = books.filter(
        book =>
          book.title.toLowerCase().includes(lowercasedTerm) ||
          book.author.toLowerCase().includes(lowercasedTerm)
      );
    }

    switch (sortOrder) {
      case 'rating-desc':
        books.sort((a, b) => b.rating - a.rating);
        break;
      case 'rating-asc':
        books.sort((a, b) => a.rating - b.rating);
        break;
      case 'title-asc':
        books.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case 'title-desc':
        books.sort((a, b) => b.title.localeCompare(a.title));
        break;
      case 'author-asc':
        books.sort((a, b) => a.author.localeCompare(b.author));
        break;
      case 'author-desc':
        books.sort((a, b) => b.author.localeCompare(a.author));
        break;
    }

    return books;
  }, [searchTerm, selectedGenre, sortOrder]);

  return (
    <div className="container mx-auto px-4 py-8">
      <section className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-headline font-bold mb-4">
          اكتشف قراءتك التالية
        </h2>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          تصفح مجموعتنا المنسقة من الكتب. قم بالتصفية حسب النوع، أو قم بالفرز حسب تفضيلاتك، أو ابحث عن عنوان معين للعثور على مغامرتك التالية.
        </p>
      </section>

      <div className="mb-8 p-4 bg-card rounded-lg shadow-sm border">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              type="text"
              placeholder="البحث عن طريق العنوان أو المؤلف..."
              className="pl-10 w-full"
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
              aria-label="البحث عن طريق العنوان أو المؤلف"
            />
          </div>
          <Select value={selectedGenre} onValueChange={setSelectedGenre}>
            <SelectTrigger className="w-full" aria-label="التصفية حسب النوع">
              <SelectValue placeholder="التصفية حسب النوع" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="All">كل الأنواع</SelectItem>
              {genres.map(genre => (
                <SelectItem key={genre} value={genre}>
                  {genre}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Select value={sortOrder} onValueChange={setSortOrder}>
            <SelectTrigger className="w-full" aria-label="الفرز حسب">
              <SelectValue placeholder="الفرز حسب" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="rating-desc">التقييم: من الأعلى إلى الأقل</SelectItem>
              <SelectItem value="rating-asc">التقييم: من الأقل إلى الأعلى</SelectItem>
              <SelectItem value="title-asc">العنوان: أ-ي</SelectItem>
              <SelectItem value="title-desc">العنوان: ي-أ</SelectItem>
              <SelectItem value="author-asc">المؤلف: أ-ي</SelectItem>
              <SelectItem value="author-desc">المؤلف: ي-أ</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {filteredAndSortedBooks.length > 0 ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
          {filteredAndSortedBooks.map(book => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16">
          <p className="text-xl text-muted-foreground">
            لم يتم العثور على كتب. حاول تعديل البحث أو عوامل التصفية.
          </p>
        </div>
      )}
    </div>
  );
}

export default function LibraryPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <BookGrid />
    </Suspense>
  );
}
