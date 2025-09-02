"use client";

import Link from 'next/link';
import { 
  BookOpenCheck, 
  LogIn, 
  Menu, 
  Home, 
  Newspaper, 
  BookImage, 
  RefreshCw, 
  MessageSquare, 
  LifeBuoy, 
  Settings, 
  HelpCircle, 
  Phone 
} from 'lucide-react';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function Header() {
  const pathname = usePathname();

  const navLinks = [
    { href: '/', label: 'Browse' },
    { href: '/recommendations', label: 'Recommendations' },
  ];

  const menuItems = [
    { href: '/', label: 'الرئيسية', icon: Home },
    { href: '/news', label: 'الأخبار', icon: Newspaper },
    { href: '/manga', label: 'المانجات', icon: BookImage },
    { href: '/latest', label: 'آخر الإضافات', icon: RefreshCw },
    { href: '/comments', label: 'التعليقات', icon: MessageSquare },
    { href: '/support', label: 'الدعم الفني', icon: LifeBuoy },
    { href: '/settings', label: 'إعدادات الموقع', icon: Settings },
    { href: '/faq', label: 'أسئلة شائعة', icon: HelpCircle },
    { href: '/contact', label: 'تواصل معنا', icon: Phone },
  ];


  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center justify-between">
        <div className="flex items-center">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <BookOpenCheck className="h-6 w-6 text-primary" />
            <span className="font-bold font-headline text-lg">Nexus Library</span>
          </Link>
          <nav className="hidden items-center space-x-2 md:flex">
            {navLinks.map(link => (
              <Button
                key={link.href}
                variant="link"
                asChild
                className={cn(
                  'text-muted-foreground transition-colors hover:text-foreground',
                  pathname === link.href && 'text-foreground'
                )}
              >
                <Link href={link.href}>{link.label}</Link>
              </Button>
            ))}
          </nav>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" aria-label="Login">
            <LogIn className="h-5 w-5" />
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="Menu">
                <Menu className="h-5 w-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <DropdownMenuLabel>قوائم الموقع</DropdownMenuLabel>
              <DropdownMenuSeparator />
              {menuItems.map((item) => (
                <DropdownMenuItem key={item.href} asChild>
                  <Link href={item.href} className="flex items-center justify-between w-full">
                    <span>{item.label}</span>
                    <item.icon className="h-4 w-4 text-muted-foreground" />
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
}
