import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';

export default function WelcomePage() {
  return (
    <div className="min-h-screen w-full bg-background flex items-center justify-center p-4">
      <Card className="w-full max-w-md bg-card border-border/60">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-headline">تسجيل الدخول</CardTitle>
          <CardDescription className="text-muted-foreground">
            أدخل بياناتك للوصول إلى حسابك
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="username">اسم المستخدم</Label>
            <Input 
              id="username" 
              type="text" 
              placeholder="اسم المستخدم الخاص بك"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">كلمة المرور</Label>
            <Input 
              id="password" 
              type="password" 
              placeholder="كلمة المرور الخاصة بك"
            />
          </div>
          <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground text-lg font-bold py-6">
            تسجيل الدخول
          </Button>
        </CardContent>
         <CardFooter className="flex justify-center">
          <p className="text-sm text-muted-foreground">
            ليس لديك حساب؟{' '}
            <Link href="/signup" className="font-semibold text-accent hover:underline">
              إنشاء حساب
            </Link>
          </p>
        </CardFooter>
      </Card>
    </div>
  );
}
