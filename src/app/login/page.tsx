import { Feather, Home } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const InfoCard = ({
  gradient,
  title,
  arabicTitle,
  icon: Icon,
  href,
}: {
  gradient: string;
  title: string;
  arabicTitle: string;
  icon: React.ElementType;
  href: string;
}) => (
  <Link href={href} className="block w-full md:w-1/3 p-4">
    <div
      className={`relative rounded-2xl shadow-lg text-white p-8 overflow-hidden h-64 flex flex-col justify-between transition-transform transform hover:-translate-y-2 ${gradient}`}
    >
      <div className="z-10">
        <h2 className="text-2xl font-bold">{title}</h2>
        <p className="text-3xl font-bold mt-2" dir="rtl">{arabicTitle}</p>
      </div>
      <p className="text-sm font-semibold z-10">ACCESS THE PORTAL</p>
      <Icon className="absolute -right-4 -bottom-4 h-48 w-48 text-white/20 z-0" strokeWidth={1} />
    </div>
  </Link>
);

export default function LoginPage() {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center font-sans">
      <div className="container mx-auto px-4 py-8 text-center">
        <header className="mb-12">
           <Image
              src="https://picsum.photos/seed/logo/200/80"
              alt="University of Saida Logo"
              width={200}
              height={80}
              className="mx-auto object-contain"
              data-ai-hint="university logo"
            />
        </header>

        <main className="flex flex-col md:flex-row justify-center items-center gap-8">
          <InfoCard
            href="#"
            gradient="bg-gradient-to-br from-blue-400 to-blue-600"
            title="READER SPACE"
            arabicTitle="فضاء القارئ"
            icon={Feather}
          />
          <InfoCard
            href="#"
            gradient="bg-gradient-to-br from-green-400 to-green-600"
            title="WRITER SPACE"
            arabicTitle="فضاء الكاتب"
            icon={Home}
          />
          <InfoCard
            href="#"
            gradient="bg-gradient-to-br from-purple-400 to-purple-600"
            title="PUBLISHER SPACE"
            arabicTitle="فضاء الناشر"
            icon={Home}
          />
        </main>
      </div>
       <footer className="w-full py-6 text-center">
          <p className="text-gray-600 text-sm">
            Copyright © 2024 UNIVERSCO Web App 2024 All Rights Reserved.
          </p>
        </footer>
    </div>
  );
}
