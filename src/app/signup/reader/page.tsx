import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';

export default function ReaderSignUpPage() {
  return (
    <div className="relative min-h-screen w-full">
      <Image
        src="https://res.cloudinary.com/drdebnl11/image/upload/v1756871089/bacjgroun_yfwnuv.png"
        alt="Enchanting book illustration"
        fill
        className="object-cover"
        data-ai-hint="fantasy illustration"
      />
      <div className="absolute inset-0 bg-black/30" />
      
      <div className="relative min-h-screen flex items-center justify-center p-4">
        <Card className="w-full max-w-md bg-background/80 backdrop-blur-sm border-white/20 text-foreground">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl font-headline">إنشاء حساب قارئ</CardTitle>
            <CardDescription className="text-foreground/80">
              املأ التفاصيل أدناه للانضمام إلينا
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="username" className="text-foreground/90">اسم المستخدم</Label>
              <Input 
                id="username" 
                type="text" 
                placeholder="اختر اسم مستخدم فريد"
                className="bg-foreground/10 border-foreground/30 text-foreground placeholder:text-foreground/50 focus:bg-foreground/20 focus:ring-accent"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">كلمة المرور</Label>
              <Input 
                id="password" 
                type="password" 
                placeholder="اختر كلمة مرور قوية"
                className="bg-foreground/10 border-foreground/30 text-foreground placeholder:text-foreground/50 focus:bg-foreground/20 focus:ring-accent"
              />
            </div>
             <div className="space-y-2">
              <Label htmlFor="confirm-password">تأكيد كلمة المرور</Label>
              <Input 
                id="confirm-password" 
                type="password" 
                placeholder="أعد إدخال كلمة المرور الخاصة بك"
                className="bg-foreground/10 border-foreground/30 text-foreground placeholder:text-foreground/50 focus:bg-foreground/20 focus:ring-accent"
              />
            </div>
            <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground text-lg font-bold py-6">
              إنشاء حساب
            </Button>
          </CardContent>
           <CardFooter className="flex justify-center">
            <p className="text-sm text-foreground/80">
              لديك حساب بالفعل؟{' '}
              <Link href="/login" className="font-semibold text-accent hover:underline">
                تسجيل الدخول
              </Link>
            </p>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
