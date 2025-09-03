import { books as allBooks } from '@/lib/data';
import type { Book } from '@/lib/types';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Star, PlusSquare, BookOpen, Calendar, Tag, User, Languages, Milestone } from 'lucide-react';
import Link from 'next/link';
import Header from '@/components/header';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

interface BookPageProps {
  params: {
    id: string;
  };
}

const DetailItem = ({ icon: Icon, label, value, children }: { icon: React.ElementType, label: string, value?: string | React.ReactNode, children?: React.ReactNode }) => (
    <div className="flex items-start">
        <div className="flex-shrink-0 flex items-center gap-2 text-muted-foreground w-36">
            <Icon className="h-5 w-5" />
            <span className="font-semibold">{label}</span>
        </div>
        <div className="text-foreground flex-grow">
            {children || value}
        </div>
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
    <>
      <Header />
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Left Column (Cover and Actions) */}
          <div className="lg:col-span-1 flex flex-col items-center">
            <Card className="w-full overflow-hidden">
                <Image
                    src={book.coverImage}
                    alt={`Cover of ${book.title}`}
                    width={350}
                    height={525}
                    className="object-cover w-full aspect-[2/3]"
                    data-ai-hint="book cover"
                />
            </Card>
            <div className="flex gap-2 mt-4 w-full">
              <Button size="lg" className="flex-1">
                <BookOpen className="mr-2 h-5 w-5" /> Read
              </Button>
              <Button variant="outline" size="lg">
                <PlusSquare className="mr-2 h-5 w-5" /> Add to Library
              </Button>
            </div>
             <div className="flex gap-2 mt-2 w-full">
               <Button variant="ghost" className="flex-1">
                <Star className="mr-2 h-5 w-5 text-yellow-400 fill-yellow-400" /> 
                <span>{book.rating}</span>
              </Button>
            </div>
          </div>

          {/* Right Column (Details) */}
          <div className="lg:col-span-3">
            <Card>
                <CardHeader>
                    <CardTitle className="font-headline text-4xl">{book.title}</CardTitle>
                    <p className="text-muted-foreground">{mockDetails.alternativeTitles}</p>
                </CardHeader>
                <CardContent>
                    <div className="flex flex-wrap gap-2 mb-6">
                        {mockDetails.genres.map(genre => (
                        <Link href={`/?genre=${encodeURIComponent(genre)}`} key={genre}>
                            <Badge variant="secondary" className="hover:bg-primary/20 transition-colors">{genre}</Badge>
                        </Link>
                        ))}
                    </div>
                    
                    <Separator className="my-6"/>

                    <div className="space-y-4 text-sm">
                        <DetailItem icon={User} label="Authors">
                            <div className="flex flex-wrap gap-2">
                                {mockDetails.authors.map(a => (
                                    <Link key={a} href={`/author/${encodeURIComponent(a)}`}>
                                        <Badge variant="outline" className="hover:bg-accent/20">{a}</Badge>
                                    </Link>
                                ))}
                            </div>
                        </DetailItem>
                        <DetailItem icon={User} label="Artists">
                            <div className="flex flex-wrap gap-2">
                                {mockDetails.artists.map(a => <Badge key={a} variant="outline">{a}</Badge>)}
                            </div>
                        </DetailItem>
                        <DetailItem icon={Milestone} label="Origin" value={mockDetails.origin} />
                        <DetailItem icon={Languages} label="Reading Direction" value={mockDetails.readingDirection} />
                        <DetailItem icon={Calendar} label="Publish Date" value={mockDetails.publishDate} />
                        <DetailItem icon={Calendar} label="End Date" value={mockDetails.endDate} />
                        <DetailItem icon={Tag} label="Story Status" value={<Badge variant={mockDetails.storyStatus === 'Finished' ? 'default' : 'secondary'}>{mockDetails.storyStatus}</Badge>} />
                        <DetailItem icon={Tag} label="Translation" value={<Badge variant={mockDetails.translationStatus === 'Ongoing' ? 'secondary' : 'default'}>{mockDetails.translationStatus}</Badge>} />
                         <DetailItem icon={BookOpen} label="Sources">
                             <div className="flex flex-wrap gap-2">
                                {mockDetails.sources.map(s => <Badge key={s} variant="outline" >{s}</Badge>)}
                            </div>
                        </DetailItem>
                    </div>

                    <Separator className="my-6"/>

                    <div>
                        <h3 className="font-headline text-2xl font-bold mb-3">Synopsis</h3>
                        <p className="text-muted-foreground leading-relaxed">
                            {mockDetails.description}
                        </p>
                    </div>
                </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}
