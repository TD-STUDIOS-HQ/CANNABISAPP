
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { MessageSquare } from "lucide-react";
import { customers } from "@/data/mockDashboardData";

export const DashboardCustomers = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-white">Customers</h2>
      
      <Card className="bg-black/20 backdrop-blur-xl border-white/10 text-white">
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow className="border-white/10 hover:bg-white/5">
                <TableHead className="text-white/60">Customer</TableHead>
                <TableHead className="text-white/60">Email</TableHead>
                <TableHead className="text-white/60">Orders</TableHead>
                <TableHead className="text-white/60">Total Spent</TableHead>
                <TableHead className="text-white/60">Joined</TableHead>
                <TableHead className="text-white/60">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {customers.map((customer) => (
                <TableRow key={customer.id} className="border-white/10 hover:bg-white/5">
                  <TableCell className="font-medium text-white">{customer.name}</TableCell>
                  <TableCell className="text-white/80">{customer.email}</TableCell>
                  <TableCell className="text-white/80">{customer.orders}</TableCell>
                  <TableCell className="text-white/80">${customer.spent.toFixed(2)}</TableCell>
                  <TableCell className="text-white/80">{customer.joined}</TableCell>
                  <TableCell>
                    <Button variant="ghost" size="sm" className="text-white/60 hover:text-white hover:bg-white/10">
                      <MessageSquare className="h-4 w-4" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};
