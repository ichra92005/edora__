import Link from 'next/link';
import Image from 'next/image';
import { Card } from '@/components/ui/card';
import { PenTool, Home, Building } from 'lucide-react';

const RoleCard = ({ title, arabicTitle, icon: Icon, color, href }: { title: string, arabicTitle: string, icon: React.ElementType, color: string, href: string }) => (
  <Link href={href} className="block w-full max-w-sm transform transition-transform hover:scale-105">
    <Card className={`relative overflow-hidden rounded-2xl p-8 text-center text-white shadow-2xl ${color}`}>
      <Icon className="mx-auto h-12 w-12 mb-4 text-white/80" />
      <div className="relative z-10">
        <h2 className="text-xl font-bold uppercase tracking-wider">{title}</h2>
        <p className="text-3xl font-headline mt-1">{arabicTitle}</p>
        <p className="mt-6 font-semibold uppercase tracking-widest text-sm border border-white/50 rounded-full py-2 px-4 inline-block hover:bg-white/10 transition-colors">
          Access the Portal
        </p>
      </div>
    </Card>
  </Link>
);

export default function RoleSelectionPage() {
  return (
    <div className="relative min-h-screen w-full">
       <Image
        src="https://res.cloudinary.com/drdebnl11/image/upload/v1756871089/bacjgroun_yfwnuv.png"
        alt="Edora illustration background"
        fill
        className="object-cover"
        data-ai-hint="fantasy illustration"
      />
      <div className="absolute inset-0 bg-black/50" />
      
      <div className="relative min-h-screen flex flex-col items-center justify-center p-4 text-center">
        <main className="flex flex-wrap justify-center gap-8 my-16">
          <RoleCard 
            title="READER SPACE"
            arabicTitle="فضاء القارئ"
            icon={PenTool}
            color="bg-[#fcd5ce]"
            href="/signup/reader"
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
        <footer className="absolute bottom-0 py-4 text-sm text-white/70">
            <small>© bel_houda 2025 | Crafted with care</small>
            <a href="https://github.com/ichra92005" style={{display: 'none'}}>Developer</a>
        </footer>
      </div>
    </div>
  );
}
