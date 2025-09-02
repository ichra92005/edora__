import Image from 'next/image';
import Link from 'next/link';
import { Card } from '@/components/ui/card';
import { PenTool, Home, Building } from 'lucide-react';
import UniversityLogo from '@/components/university-logo';

const RoleCard = ({ title, arabicTitle, icon: Icon, color, href }: { title: string, arabicTitle: string, icon: React.ElementType, color: string, href: string }) => (
  <Link href={href} className="block w-full max-w-sm transform transition-transform hover:scale-105">
    <Card className={`relative overflow-hidden rounded-2xl p-8 text-white shadow-2xl ${color}`}>
      <div className="relative z-10">
        <h2 className="text-2xl font-bold uppercase tracking-wider">{title}</h2>
        <p className="text-4xl font-headline mt-2">{arabicTitle}</p>
        <p className="mt-8 font-semibold uppercase tracking-widest text-sm">Access The Portal</p>
      </div>
      <Icon className="absolute -right-4 -bottom-4 h-32 w-32 text-white/20 transform" />
    </Card>
  </Link>
);

export default function RoleSelectionPage() {
  return (
    <div className="relative min-h-screen w-full">
      <Image
        src="https://picsum.photos/seed/space/1920/1080"
        alt="Background"
        fill
        className="object-cover"
        data-ai-hint="starry background"
      />
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative min-h-screen flex flex-col items-center justify-center p-4 text-center">
        <div className="mb-12">
            <UniversityLogo />
        </div>
        <div className="flex flex-wrap justify-center gap-8">
          <RoleCard 
            title="READER SPACE"
            arabicTitle="فضاء القارئ"
            icon={PenTool}
            color="bg-gradient-to-br from-blue-500 to-cyan-400"
            href="/library"
          />
          <RoleCard 
            title="WRITER SPACE"
            arabicTitle="فضاء الكاتب"
            icon={Home}
            color="bg-gradient-to-br from-lime-500 to-green-400"
            href="/#"
          />
          <RoleCard 
            title="PUBLISHER SPACE"
            arabicTitle="فضاء الناشر"
            icon={Building}
            color="bg-gradient-to-br from-purple-500 to-indigo-400"
            href="/#"
          />
        </div>
         <footer className="absolute bottom-4 text-white/80 text-sm">
          Copyright © 2024 UNIVERSCO Web App 2024 All Rights Reserved.
        </footer>
      </div>
    </div>
  );
}
