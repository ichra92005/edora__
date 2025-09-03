import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';

export default function LoginPage() {
  return (
    <div className="relative min-h-screen w-full">
      <Image
        src="https://res.cloudinary.com/drdebnl11/image/upload/v1756871119/Screenshot_2025-09-03_030759_xqlr8q.png"
        alt="A cozy reading nook"
        fill
        className="object-cover"
        data-ai-hint="cozy reading nook"
      />
      <div className="absolute inset-0 bg-black/40" />
      
      <div className="relative min-h-screen flex items-center justify-center p-4">
        <Card className="w-full max-w-md bg-background/80 backdrop-blur-sm border-white/20 text-foreground">
            <CardHeader className="text-center">
            <CardTitle className="text-3xl font-headline">تسجيل الدخول</CardTitle>
            <CardDescription className="text-foreground/80">
                أدخل بياناتك للوصول إلى حسابك
            </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
            <div className="space-y-2">
                <Label htmlFor="username" className="text-foreground/90">اسم المستخدم</Label>
                <Input 
                id="username" 
                type="text" 
                placeholder="اسم المستخدم الخاص بك"
                className="bg-foreground/10 border-foreground/30 text-foreground placeholder:text-foreground/50 focus:bg-foreground/20 focus:ring-accent"
                />
            </div>
            <div className="space-y-2">
                <Label htmlFor="password">كلمة المرور</Label>
                <Input 
                id="password" 
                type="password" 
                placeholder="كلمة المرور الخاصة بك"
                className="bg-foreground/10 border-foreground/30 text-foreground placeholder:text-foreground/50 focus:bg-foreground/20 focus:ring-accent"
                />
            </div>
            <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground text-lg font-bold py-6">
                تسجيل الدخول
            </Button>
            </CardContent>
            <CardFooter className="flex justify-center">
            <p className="text-sm text-foreground/80">
                ليس لديك حساب؟{' '}
                <Link href="/signup" className="font-semibold text-accent hover:underline">
                إنشاء حساب
                </Link>
            </p>
            </CardFooter>
        </Card>
      </div>
    </div>
  );
}
