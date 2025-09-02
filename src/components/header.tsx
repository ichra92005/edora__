"use client";

import Link from 'next/link';
import { Search, User, Sun, Moon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const Logo = ({ isDark }: { isDark: boolean }) => (
  <Image 
    src={isDark ? "/assets/logo-dark.png" : "/assets/logo-light.png"} 
    alt="Salsabile Logo" 
    width={120} 
    height={40}
    className="object-contain"
    data-ai-hint="logo"
    unoptimized
  />
);

export default function Header() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    // This logic assumes you might want to sync with a class on the `html` or `body` tag
    // For now, it just toggles its own state.
    const isDarkMode = document.documentElement.classList.contains('dark');
    setIsDark(isDarkMode);
  }, []);

  const toggleTheme = () => {
    document.documentElement.classList.toggle('dark');
    setIsDark(prev => !prev);
  };
  
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-20 items-center justify-between gap-4">
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center gap-2">
            <Logo isDark={isDark} />
          </Link>
          <div className="relative w-full max-w-xs hidden md:block">
            <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
            <Input
              type="search"
              placeholder="ابحث هنا..."
              className="pl-10 pr-4 bg-foreground/5 border-border"
            />
          </div>
        </div>

        <nav className="flex items-center gap-4">
           <ul className="hidden md:flex items-center gap-6 text-lg">
                <li><Link href="/" className="hover:text-primary transition-colors font-medium">الرئيسية</Link></li>
                <li><Link href="/library" className="hover:text-primary transition-colors font-medium">المكتبة</Link></li>
                <li><Link href="/login" className="hover:text-primary transition-colors font-medium">تسجيل الدخول</Link></li>
            </ul>
          
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" onClick={toggleTheme} aria-label="Toggle theme">
              {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
            <Link href="/login" passHref>
              <Button variant="ghost" size="icon" aria-label="Login">
                <User className="h-5 w-5" />
              </Button>
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
