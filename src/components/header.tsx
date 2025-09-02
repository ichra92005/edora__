"use client";

import Link from 'next/link';
import {
  Menu,
  Home,
  LayoutGrid,
  Search,
  Newspaper,
  BookImage,
  RefreshCw,
  MessageSquare,
  LifeBuoy,
  Settings,
  HelpCircle,
  Phone,
  User,
  Wand2,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from '@/components/ui/input';

const Logo = () => (
  <svg
    width="40"
    height="40"
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M20 40C31.0457 40 40 31.0457 40 20C40 8.9543 31.0457 0 20 0C8.9543 0 0 8.9543 0 20C0 31.0457 8.9543 40 20 40Z"
      fill="none"
    />
    <path
      d="M11.6364 28.3636C15.9649 32.6922 23.0351 32.6922 27.3636 28.3636C31.6922 24.0351 31.6922 16.9649 27.3636 12.6364C23.0351 8.30786 15.9649 8.30786 11.6364 12.6364"
      stroke="hsl(var(--primary))"
      strokeWidth="4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M6 34C9.4131 37.4131 14.5869 39 20 39C25.4131 39 30.5869 37.4131 34 34"
      stroke="hsl(var(--primary))"
      strokeWidth="4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default function Header() {
  const menuItems = [
    { href: '/', label: 'Home', icon: Home },
    { href: '/recommendations', label: 'AI Recommendations', icon: Wand2 },
    { href: '/', label: 'News', icon: Newspaper },
    { href: '/', label: 'Manga', icon: BookImage },
    { href: '/latest', label: 'Latest Releases', icon: RefreshCw },
    { href: '/', label: 'Comments', icon: MessageSquare },
    { href: '/', label: 'Support', icon: LifeBuoy },
    { href: '/', label: 'Settings', icon: Settings },
    { href: '/', label: 'FAQ', icon: HelpCircle },
    { href: '/', label: 'Contact Us', icon: Phone },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-2">
          <Logo />
           <span className="font-headline text-xl font-bold">Nexus Library</span>
        </Link>
        <div className="flex flex-1 items-center justify-center">
          <div className="flex w-full max-w-lg items-center space-x-2">
            <Link href="/" passHref>
              <Button variant="outline" size="icon" aria-label="Layout Grid">
                <LayoutGrid className="h-5 w-5" />
              </Button>
            </Link>
            <Link href="/latest" passHref>
              <Button variant="outline" size="icon" aria-label="Home">
                <Home className="h-5 w-5" />
              </Button>
            </Link>
            <div className="relative w-full">
              <Input
                type="search"
                placeholder="Search..."
                className="pl-4 pr-10"
              />
              <Search className="absolute right-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" aria-label="Login">
            <User className="h-5 w-5" />
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon" aria-label="Menu">
                <Menu className="h-5 w-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <DropdownMenuLabel>Nexus Library</DropdownMenuLabel>
              <DropdownMenuSeparator />
              {menuItems.map((item, index) => (
                <DropdownMenuItem key={index} asChild>
                  <Link
                    href={item.href}
                    className="flex w-full items-center justify-between"
                  >
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
