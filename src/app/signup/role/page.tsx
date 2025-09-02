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
        <p className="mt-8 font-semibold uppercase tracking-widest text-sm">ACCESS THE PORTAL</p>
      </div>
      <Icon className="absolute -right-4 -bottom-4 h-32 w-32 text-white/20 transform" />
    </Card>
  </Link>
);

export default function RoleSelectionPage() {
  return (
    <div className="relative min-h-screen w-full bg-white text-gray-800">
      <div className="relative min-h-screen flex flex-col items-center justify-center p-4 text-center">
        <header className="absolute top-0 py-6">
          <UniversityLogo />
        </header>
        <main className="flex flex-wrap justify-center gap-8 mt-24 mb-16">
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
        </main>
        <footer className="absolute bottom-0 py-4 text-sm text-gray-600">
          <p>Copyright © 2024 UNIVERSCO Web App 2024 All Rights Reserved.</p>
        </footer>
      </div>
    </div>
  );
}
