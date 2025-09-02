import { books as allBooks } from '@/lib/data';
import type { Book } from '@/lib/types';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Star, PlusSquare } from 'lucide-react';
import Link from 'next/link';

interface BookPageProps {
  params: {
    id: string;
  };
}

const InfoRow = ({ label, value }: { label: string; value: string | React.ReactNode }) => (
  <div className="flex justify-between items-center py-2">
    <dt className="font-bold text-lg text-white">{label}</dt>
    <dd className="text-right text-gray-200">{value}</dd>
  </div>
);

export default function BookPage({ params }: BookPageProps) {
  const book = allBooks.find(b => b.id.toString() === params.id);

  if (!book) {
    notFound();
  }

  // Mock data based on screenshot
  const mockDetails = {
    alternativeTitles: '纯情反派, Villain With a Crush, 순정빌런',
    authors: ['Seyoon'],
    artists: ['Seyoon'],
    genres: ['Webtoon', 'Drama', 'Comedy', 'Romance', 'Shoujo', 'Suspense'],
    origin: 'Korean Manhwa',
    readingDirection: 'From left to right',
    publishDate: '2022/7/20',
    endDate: '2025/2/5',
    storyStatus: 'Finished',
    translationStatus: 'Ongoing',
    sources: ['Raw', 'Manga Updates'],
    description: 'A special police force exists to deal with superpowered criminals. A special, powerful police officer, Han Do-ryeong, who is a quiet person! But is he the worst villain with the worst villain, the insane "Park Ro-za"?',
  };

  return (
    <div className="bg-[#3a6a6a] min-h-screen py-8">
      <div className="container mx-auto px-4">
        <div className="bg-[#4e8e8e] p-8 rounded-lg shadow-xl text-white">
          <div className="text-center mb-6">
            <h1 className="text-4xl font-bold font-headline">{book.title}</h1>
            <p className="text-gray-300 mt-2">{mockDetails.alternativeTitles}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <div className="flex flex-wrap gap-2 mb-6">
                {mockDetails.genres.map(genre => (
                  <Badge key={genre} variant="outline" className="border-white text-white">{genre}</Badge>
                ))}
              </div>

              <dl className="space-y-2">
                <InfoRow label="المؤلفون" value={<div className="flex gap-2">{mockDetails.authors.map(a => <Link key={a} href={`/author/${encodeURIComponent(a)}`}><Badge variant="secondary" className="hover:bg-primary/20">{a}</Badge></Link>)}</div>} />
                <InfoRow label="الرسامون" value={<div className="flex gap-2">{mockDetails.artists.map(a => <Badge key={a} variant="secondary">{a}</Badge>)}</div>} />
                <InfoRow label="التصنيف" value="-" />
                <InfoRow label="الأصل" value={mockDetails.origin} />
                <InfoRow label="جهة القراءة" value={mockDetails.readingDirection} />
                <InfoRow label="تاريخ النشر" value={mockDetails.publishDate} />
                <InfoRow label="تاريخ الانتهاء" value={mockDetails.endDate} />
                <InfoRow label="حالة القصة" value={mockDetails.storyStatus} />
                <InfoRow label="حالة الترجمة" value={mockDetails.translationStatus} />
                <InfoRow label="المصادر" value={<div className="flex gap-2">{mockDetails.sources.map(s => <Badge key={s} variant="outline" className="border-gray-400 text-gray-200">{s}</Badge>)}</div>} />
              </dl>

              <div className="mt-8">
                <h2 className="font-bold text-xl mb-2 text-white">القصة</h2>
                <p className="text-gray-200 leading-relaxed text-right" dir="rtl">
                  {mockDetails.description}
                </p>
              </div>

            </div>
            <div className="flex flex-col items-center">
              <Image
                src={book.coverImage}
                alt={`Cover of ${book.title}`}
                width={350}
                height={525}
                className="rounded-lg shadow-lg object-cover w-full aspect-[2/3]"
                data-ai-hint="book cover"
              />
              <div className="flex gap-4 mt-4">
                <Button variant="outline" size="icon" className="bg-transparent border-white text-white hover:bg-white hover:text-black">
                  <Star />
                </Button>
                <Button variant="outline" size="icon" className="bg-transparent border-white text-white hover:bg-white hover:text-black">
                  <PlusSquare />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
