import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function AddBookPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-2xl mx-auto">
        <Card>
          <CardHeader>
            <CardTitle className="text-3xl font-headline">Add a New Book</CardTitle>
            <CardDescription>
              Fill out the form below to add a new book to the library collection.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="title">Book Title</Label>
                <Input id="title" placeholder="Enter the book title" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="author">Author</Label>
                <Input id="author" placeholder="Enter the author's name" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="genre">Genre</Label>
                <Input id="genre" placeholder="e.g., Fantasy, Sci-Fi, Mystery" />
              </div>
               <div className="space-y-2">
                <Label htmlFor="coverImage">Cover Image URL</Label>
                <Input id="coverImage" placeholder="https://example.com/cover.jpg" />
              </div>
               <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Textarea id="description" placeholder="A brief summary of the book..." />
              </div>
              <Button type="submit" className="w-full">Add Book</Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
