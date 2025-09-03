import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Logo from '@/components/logo';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function WelcomePage() {
  return (
    <div className="relative min-h-screen w-full text-white font-sans overflow-hidden">
      <Image
        src="https://res.cloudinary.com/drdebnl11/image/upload/v1756871119/Screenshot_2025-09-03_030759_xqlr8q.png"
        alt="A mystical library with floating books"
        fill
        className="object-cover"
        data-ai-hint="fantasy library"
      />
      <div className="absolute inset-0 bg-black/40" />

      <div className="relative z-10 flex flex-col min-h-screen">
        <header className="w-full py-6 px-4 md:px-8">
          <div className="container mx-auto flex justify-between items-center">
            <Link href="/">
              <Logo />
            </Link>
            <div className="hidden md:block absolute right-0 top-10 h-20 w-3/5 bg-white/5 backdrop-blur-md border-y border-l border-white/10 rounded-l-md" />
            <nav className="relative z-10 flex items-center gap-8 text-sm uppercase tracking-widest">
              <Link href="#" className="font-bold border-b-2 border-white pb-1 transition-colors hover:border-white/70">
                <span className="font-bold mr-2 hidden lg:inline">00</span> Home
              </Link>
              <Link href="/library" className="pb-1 border-b-2 border-transparent transition-colors hover:border-white/70">
                <span className="font-bold mr-2 hidden lg:inline">01</span> Library
              </Link>
              <Link href="/login" className="pb-1 border-b-2 border-transparent transition-colors hover:border-white/70">
                <span className="font-bold mr-2 hidden lg:inline">02</span> Log In
              </Link>
            </nav>
          </div>
        </header>

        <main className="flex-1 container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 items-center gap-8">
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div>
              <h2 className="text-lg md:text-2xl uppercase tracking-[0.2em] text-secondary">
                So, you want to travel to
              </h2>
              <h1 className="font-headline text-8xl md:text-9xl lg:text-[150px] uppercase my-4">
                Edora
              </h1>
              <p className="max-w-md mx-auto md:mx-0 text-secondary leading-loose">
                Let&apos;s face it; if you want to read, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we&apos;ll give you a truly out of this world experience!
              </p>
            </div>
             <div className="mt-10">
                <Link href="/library">
                <div className="group relative">
                    <div className="w-48 h-48 md:w-64 md:h-64 rounded-full bg-white flex items-center justify-center text-2xl md:text-3xl uppercase tracking-[0.1em] text-background font-headline cursor-pointer transition-all duration-300">
                    Explore
                    </div>
                    <div className="absolute inset-0 rounded-full bg-white/20 scale-100 group-hover:scale-150 transition-transform duration-300 opacity-0 group-hover:opacity-100"></div>
                </div>
                </Link>
            </div>
          </div>

          <div className="flex flex-col justify-center items-center gap-8">
            <Card className="w-full max-w-sm bg-white/5 backdrop-blur-sm border border-white/10 text-white">
              <CardHeader>
                <CardTitle className="text-2xl font-headline text-center">Member Login</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="username">Username</Label>
                  <Input 
                    id="username"
                    type="text"
                    placeholder="Enter your username"
                    className="bg-white/10 border-white/20 placeholder:text-white/50 focus:bg-white/20 focus:ring-white/50"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <Input 
                    id="password"
                    type="password"
                    placeholder="Enter your password"
                     className="bg-white/10 border-white/20 placeholder:text-white/50 focus:bg-white/20 focus:ring-white/50"
                  />
                </div>
                 <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-base py-5">
                  Log In
                </Button>
                <p className="text-center text-xs text-white/70">
                    Not a member? <Link href="/signup" className="font-semibold text-accent hover:underline">Sign up</Link>
                </p>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
}
