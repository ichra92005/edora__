import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';

export default function LoginPage() {
  return (
    <div className="relative min-h-screen w-full">
      <Image
        src="https://picsum.photos/seed/space/1920/1080"
        alt="Earth from space"
        fill
        className="object-cover"
        data-ai-hint="earth space"
      />
      <div className="absolute inset-0 bg-black/60" />
      
      <div className="relative min-h-screen flex items-center justify-center p-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-16 max-w-6xl w-full">
          
          {/* Left Side: Welcome Text & Explore Button */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-right text-white space-y-12">
            <div className="space-y-6">
                 <h1 className="text-4xl md:text-5xl font-bold font-headline uppercase tracking-widest text-primary">
                    هل تود الانطلاق في رحلة إلى <span className="text-accent">عالم سلسَبيل؟</span>
                </h1>
                <p className="text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto lg:mx-0 font-body">
                    اكتشف عالم الكتب مع سَلسَبيل، منصتك المثالية لقراءة وتحميل الكتب الإلكترونية مجاناً. استمتع بتجربة قراءة فريدة وسهلة الوصول إلى مكتبة واسعة من الكتب في مختلف المجالات.
                </p>
            </div>
            <Link href="/library" className="group relative flex items-center justify-center h-48 w-48">
                <div className="absolute inset-0 bg-white rounded-full transition-transform transform group-hover:scale-110"></div>
                <span className="relative text-2xl font-bold font-headline text-black uppercase tracking-widest">
                استكشف
                </span>
            </Link>
          </div>
          
          {/* Right Side: Login Form */}
          <div className="w-full max-w-md">
            <Card className="bg-background/50 backdrop-blur-sm border-white/20 text-white">
              <CardHeader className="text-center">
                <CardTitle className="text-3xl font-headline">تسجيل الدخول</CardTitle>
                <CardDescription className="text-white/70">
                  أدخل بياناتك للوصول إلى حسابك
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="username" className="text-white/90">اسم المستخدم</Label>
                  <Input 
                    id="username" 
                    type="text" 
                    placeholder="اسم المستخدم الخاص بك"
                    className="bg-white/10 border-white/30 text-white placeholder:text-white/50 focus:bg-white/20 focus:ring-accent"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password">كلمة المرور</Label>
                  <Input 
                    id="password" 
                    type="password" 
                    placeholder="كلمة المرور الخاصة بك"
                    className="bg-white/10 border-white/30 text-white placeholder:text-white/50 focus:bg-white/20 focus:ring-accent"
                  />
                </div>
                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground text-lg font-bold py-6">
                  تسجيل الدخول
                </Button>
              </CardContent>
            </Card>
          </div>
          
        </div>
      </div>
    </div>
  );
}
