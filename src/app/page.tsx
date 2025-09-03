import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';

export default function WelcomePage() {
  return (
    <div className="relative min-h-screen w-full font-serif text-white">
       <Image
        src="https://storage.googleapis.com/project-ichra-images/witch-reading.png"
        alt="A person reading a book under a large tree in a serene field"
        fill
        className="object-cover"
        data-ai-hint="fantasy illustration"
      />
      <div className="absolute inset-0 bg-black/50" />

      <div className="relative z-10 container mx-auto px-4 py-8 text-center">
        
        <header className="flex justify-between items-center py-4">
            <h1 className="text-4xl font-bold tracking-wider">Edra</h1>
            <nav className="hidden md:flex items-center gap-6 text-sm font-semibold">
                <Link href="#" className="hover:text-primary transition-colors">HOME</Link>
                <Link href="/library" className="hover:text-primary transition-colors">LIBRARY</Link>
                <Link href="#" className="hover:text-primary transition-colors">COMMUNITY</Link>
                <Link href="/login" className="hover:text-primary transition-colors">LOG IN</Link>
            </nav>
            <Button variant="outline" className="md:hidden bg-transparent border-white/50 hover:bg-white/10">Menu</Button>
        </header>

        <main>
            <section className="py-20 md:py-32">
                 <h2 className="text-5xl md:text-7xl font-bold leading-tight">
                    COME FOR THE <span className="text-primary">STORIES</span>,
                    <br />
                    STAY FOR THE <span className="text-primary">COMMUNITY</span>.
                </h2>
                <p className="mt-4 text-white/80 max-w-2xl mx-auto">
                    Discover your next favorite read, connect with fellow book lovers, and share your own stories with a vibrant and welcoming community.
                </p>
                <div className="mt-8 flex justify-center gap-4">
                    <Link href="/library">
                        <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-6 text-base">
                            Explore Library
                        </Button>
                    </Link>
                    <Link href="/signup">
                         <Button size="lg" variant="outline" className="font-semibold px-8 py-6 text-base bg-transparent border-white/80 hover:bg-white/10">
                            Join Now
                        </Button>
                    </Link>
                </div>
            </section>

            <section className="py-16">
                 <h3 className="text-3xl font-bold mb-8">Trending Now</h3>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
                    <Image src="https://picsum.photos/seed/b1/300/450" alt="Book cover 1" width={300} height={450} className="rounded-lg w-full" data-ai-hint="book cover" />
                    <Image src="https://picsum.photos/seed/b2/300/450" alt="Book cover 2" width={300} height={450} className="rounded-lg w-full" data-ai-hint="book cover" />
                    <Image src="https://picsum.photos/seed/b3/300/450" alt="Book cover 3" width={300} height={450} className="rounded-lg w-full" data-ai-hint="book cover" />
                    <Image src="https://picsum.photos/seed/b4/300/450" alt="Book cover 4" width={300} height={450} className="rounded-lg w-full" data-ai-hint="book cover" />
                    <Image src="https://picsum.photos/seed/b5/300/450" alt="Book cover 5" width={300} height={450} className="rounded-lg w-full" data-ai-hint="book cover" />
                </div>
            </section>
        </main>

        <footer className="py-8 mt-16 border-t border-white/20">
             <p className="text-sm text-white/70">&copy; 2024 Edra. All rights reserved.</p>
        </footer>

      </div>
    </div>
  );
}
