"use client";

import { useState, useMemo } from 'react';
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

export default function Home() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedGenre, setSelectedGenre] = useState('All');
  const [sortOrder, setSortOrder] = useState('rating-desc');

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
          Discover Your Next Read
        </h2>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Explore our curated collection of books. Filter by genre, sort by your
          preference, or search for a specific title to find your next adventure.
        </p>
      </section>

      <div className="mb-8 p-4 bg-card rounded-lg shadow-sm border">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search by title or author..."
              className="pl-10 w-full"
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
              aria-label="Search by title or author"
            />
          </div>
          <Select value={selectedGenre} onValueChange={setSelectedGenre}>
            <SelectTrigger className="w-full" aria-label="Filter by genre">
              <SelectValue placeholder="Filter by genre" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="All">All Genres</SelectItem>
              {genres.map(genre => (
                <SelectItem key={genre} value={genre}>
                  {genre}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Select value={sortOrder} onValueChange={setSortOrder}>
            <SelectTrigger className="w-full" aria-label="Sort by">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="rating-desc">Rating: High to Low</SelectItem>
              <SelectItem value="rating-asc">Rating: Low to High</SelectItem>
              <SelectItem value="title-asc">Title: A-Z</SelectItem>
              <SelectItem value="title-desc">Title: Z-A</SelectItem>
              <SelectItem value="author-asc">Author: A-Z</SelectItem>
              <SelectItem value="author-desc">Author: Z-A</SelectItem>
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
            No books found. Try adjusting your search or filters.
          </p>
        </div>
      )}
    </div>
  );
}
