import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] text-center px-4 bg-background text-white">
      <div className="max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold font-headline uppercase tracking-widest text-primary mb-6">
          هل تود الانطلاق في رحلة إلى <span className="text-accent">عالم سلسَبيل؟</span>
        </h1>
        <p className="text-lg md:text-xl text-foreground/80 mb-10 max-w-3xl mx-auto font-body">
          اكتشف عالم الكتب مع سَلسَبيل، منصتك المثالية لقراءة وتحميل الكتب الإلكترونية مجاناً. استمتع بتجربة قراءة فريدة وسهلة الوصول إلى مكتبة واسعة من الكتب في مختلف المجالات.
        </p>
        <Button asChild size="lg" className="bg-white text-black hover:bg-white/90 font-bold font-headline text-xl py-8 px-10 rounded-full shadow-lg transition-transform transform hover:scale-105">
          <Link href="/library">استكشف المكتبة</Link>
        </Button>
      </div>
    </div>
  );
}
