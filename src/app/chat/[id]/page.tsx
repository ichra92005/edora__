import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Send } from "lucide-react";
import Header from "@/components/header";
import { books } from "@/lib/data";

interface ChatPageProps {
  params: {
    id: string;
  };
}

export default function ChatPage({ params }: ChatPageProps) {
  // Mock finding publisher based on invite ID
  const publisherName = books.find(b => b.id.toString() === params.id)?.publisher || "Publisher";

  return (
    <div className="flex flex-col h-screen bg-muted/20">
      <Header />
      <main className="flex-1 flex items-center justify-center p-4">
        <Card className="w-full max-w-2xl h-[70vh] flex flex-col">
          <CardHeader className="flex flex-row items-center gap-4 border-b">
            <Avatar>
              <AvatarImage src="https://picsum.photos/seed/publisher-chat/40/40" alt={publisherName} />
              <AvatarFallback>{publisherName.charAt(0)}</AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <p className="text-lg font-semibold">{publisherName}</p>
              <p className="text-sm text-muted-foreground">Online</p>
            </div>
          </CardHeader>
          <CardContent className="flex-1 overflow-y-auto p-6 space-y-4">
            {/* Mocked Chat Messages */}
            <div className="flex items-end gap-3 justify-start">
                <Avatar className="h-8 w-8">
                    <AvatarImage src="https://picsum.photos/seed/publisher-chat/40/40" />
                    <AvatarFallback>P</AvatarFallback>
                </Avatar>
                <div className="p-3 rounded-lg bg-primary/10 max-w-xs">
                    <p className="text-sm">Hello! Thanks for connecting. I saw your manuscript submission, it looks promising.</p>
                </div>
            </div>
             <div className="flex items-end gap-3 justify-end">
                <div className="p-3 rounded-lg bg-primary text-primary-foreground max-w-xs">
                    <p className="text-sm">Thank you for the opportunity! I'm excited to hear your thoughts.</p>
                </div>
                 <Avatar className="h-8 w-8">
                    <AvatarImage src="https://picsum.photos/seed/writer-chat/40/40" />
                    <AvatarFallback>W</AvatarFallback>
                </Avatar>
            </div>
             <div className="flex items-end gap-3 justify-start">
                <Avatar className="h-8 w-8">
                    <AvatarImage src="https://picsum.photos/seed/publisher-chat/40/40" />
                    <AvatarFallback>P</AvatarFallback>
                </Avatar>
                <div className="p-3 rounded-lg bg-primary/10 max-w-xs">
                    <p className="text-sm">I have a few notes I'd like to discuss. Are you available for a call next week?</p>
                </div>
            </div>
          </CardContent>
          <CardFooter className="p-4 border-t">
            <div className="flex w-full items-center gap-2">
              <Input placeholder="Type a message..." className="flex-1"/>
              <Button size="icon">
                <Send className="h-4 w-4" />
                <span className="sr-only">Send</span>
              </Button>
            </div>
          </CardFooter>
        </Card>
      </main>
    </div>
  );
}
