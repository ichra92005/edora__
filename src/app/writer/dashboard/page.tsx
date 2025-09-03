import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MoreHorizontal, MessageSquare } from "lucide-react";
import Header from "@/components/header";
import Link from "next/link";

const mockInvitations = [
  { id: 1, publisher: "Tor Books", status: "Accepted", date: "2024-08-15" },
  { id: 2, publisher: "Celadon Books", status: "Pending", date: "2024-08-12" },
  { id: 3, publisher: "Ballantine Books", status: "Declined", date: "2024-08-10" },
  { id: 4, publisher: "Ace Books", status: "Accepted", date: "2024-08-05" },
];

const getStatusVariant = (status: string) => {
    switch (status) {
        case 'Accepted':
            return 'default';
        case 'Pending':
            return 'secondary';
        case 'Declined':
            return 'destructive';
        default:
            return 'outline';
    }
}

export default function WriterDashboardPage() {
  return (
    <>
      <Header />
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle>Writer Dashboard</CardTitle>
              <CardDescription>
                Track your connection invitations sent to publishers.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Publisher</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Date Sent</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {mockInvitations.map((invite) => (
                    <TableRow key={invite.id}>
                      <TableCell className="font-medium">{invite.publisher}</TableCell>
                      <TableCell>
                        <Badge variant={getStatusVariant(invite.status)}>{invite.status}</Badge>
                      </TableCell>
                      <TableCell>{invite.date}</TableCell>
                      <TableCell className="text-right">
                         {invite.status === 'Accepted' && (
                           <Link href={`/chat/${invite.id}`} passHref>
                              <Button variant="ghost" size="icon">
                                <MessageSquare className="h-4 w-4" />
                                <span className="sr-only">Open Chat</span>
                              </Button>
                           </Link>
                         )}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
}
