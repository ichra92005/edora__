import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Upload, FileText, Link as LinkIcon, AlertCircle, CheckCircle } from "lucide-react";
import Header from "@/components/header";

const genres = [
  'خيال علمي', 'فانتازيا', 'غموض', 'رومنسية', 'إثارة', 'رعب', 'تاريخي', 'كوميديا',
  'دراما', 'مغامرة', 'شريحة من الحياة', 'نفسي', 'أكشن', 'خارق للطبيعة', 'ويب تون',
  'مانجا', 'مانهوا', 'خيال', 'جريمة', 'حريم', 'رياضة', 'موسيقى', 'فنون قتالية', 'مدرسي'
];

const Section = ({ title, children, className }: { title: string, children: React.ReactNode, className?: string }) => (
  <div className={`p-6 bg-card/50 rounded-lg border border-border/50 ${className}`}>
    <h2 className="text-xl font-headline font-semibold text-primary mb-6 pb-2 border-b border-border/30">{title}</h2>
    <div className="space-y-6">
      {children}
    </div>
  </div>
);

const FormRow = ({ label, children }: { label: string, children: React.ReactNode }) => (
  <div className="grid grid-cols-1 md:grid-cols-4 items-center gap-4">
    <Label htmlFor={label.toLowerCase().replace(' ', '-')} className="text-right text-muted-foreground">{label}</Label>
    <div className="md:col-span-3">
      {children}
    </div>
  </div>
);


export default function AddBookPage() {
  return (
    <div className="bg-background min-h-screen">
      <Header />
      <main className="container mx-auto px-4 py-8" dir="rtl">
        <div className="max-w-5xl mx-auto space-y-8">
          <div className="text-center">
            <h1 className="text-4xl font-headline font-bold text-foreground">طلب إضافة كتاب جديد</h1>
          </div>
          <Alert variant="destructive" className="bg-destructive/10 border-destructive/20 text-destructive-foreground">
              <AlertCircle className="h-4 w-4" />
              <AlertTitle className="text-destructive">ملاحظة هامة</AlertTitle>
              <AlertDescription>
                  لا نقبل بالمانجات التي تحتوي على مشاهد مخلة. بإضافتك للعمل فأنت توافق على سياسة النشر في موقعنا.
              </AlertDescription>
          </Alert>

          <form className="space-y-8">
            <Section title="العناوين">
              <FormRow label="عنوان الكتاب"><Input placeholder="العنوان الأصلي للكتاب" /></FormRow>
              <FormRow label="العنوان العربي"><Input placeholder="العنوان باللغة العربية" /></FormRow>
              <FormRow label="العنوان الإنجليزي"><Input placeholder="العنوان باللغة الإنجليزية" /></FormRow>
              <FormRow label="العنوان الياباني"><Input placeholder="العنوان باللغة اليابانية (إن وجد)" /></FormRow>
              <FormRow label="مسميات أخرى"><Input placeholder="افصل بينها بفاصلة" /></FormRow>
            </Section>

            <Section title="البيانات">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 <div className="space-y-2">
                    <Label className="text-muted-foreground">الناشر</Label>
                    <Select>
                        <SelectTrigger><SelectValue placeholder="اختر الناشر" /></SelectTrigger>
                        <SelectContent>
                            <SelectItem value="publisher1">الناشر الأول</SelectItem>
                            <SelectItem value="publisher2">الناشر الثاني</SelectItem>
                        </SelectContent>
                    </Select>
                 </div>
                 <div className="space-y-2">
                    <Label className="text-muted-foreground">الكاتب</Label>
                    <Select>
                        <SelectTrigger><SelectValue placeholder="اختر الكاتب" /></SelectTrigger>
                        <SelectContent>
                            <SelectItem value="author1">الكاتب الأول</SelectItem>
                            <SelectItem value="author2">الكاتب الثاني</SelectItem>
                        </SelectContent>
                    </Select>
                 </div>
              </div>
            </Section>
            
            <Section title="التصنيفات">
              <div className="flex flex-wrap gap-3">
                {genres.map(genre => (
                  <Badge key={genre} variant="outline" className="text-lg py-2 px-4 cursor-pointer hover:bg-accent/20 transition-colors">{genre}</Badge>
                ))}
              </div>
            </Section>

            <Section title="الصور">
              <FormRow label="غلاف الكتاب">
                <div className="flex items-center gap-4">
                  <Input type="file" className="flex-1" />
                  <Button variant="outline" size="icon"><Upload className="h-4 w-4" /></Button>
                </div>
              </FormRow>
              <FormRow label="صورة الغلاف">
                 <div className="flex items-center gap-4">
                  <Input type="file" className="flex-1" />
                  <Button variant="outline" size="icon"><FileText className="h-4 w-4" /></Button>
                </div>
              </FormRow>
            </Section>
            
            <Section title="المصادر">
                <FormRow label="رابط المصدر">
                    <div className="flex items-center gap-4">
                    <Input placeholder="https://example.com" />
                    <Button variant="outline" size="icon"><LinkIcon className="h-4 w-4" /></Button>
                    </div>
                </FormRow>
            </Section>

            <div className="flex justify-end pt-4">
                <Button type="submit" size="lg" className="px-10 py-6 text-lg font-bold">
                    <CheckCircle className="mr-2 h-5 w-5" />
                    إرسال الطلب
                </Button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}
