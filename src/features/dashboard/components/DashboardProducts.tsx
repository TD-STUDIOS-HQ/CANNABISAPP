
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Upload, Star, Eye, Edit, MoreHorizontal } from "lucide-react";
import { products } from "@/data/mockDashboardData";

export const DashboardProducts = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-white">Products</h2>
        <Button variant="frost">
          <Upload className="mr-2 h-4 w-4" />
          Add Product
        </Button>
      </div>

      <Card className="bg-black/20 backdrop-blur-xl border-white/10 text-white">
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow className="border-white/10 hover:bg-white/5">
                <TableHead className="text-white/60">Product</TableHead>
                <TableHead className="text-white/60">Category</TableHead>
                <TableHead className="text-white/60">Price</TableHead>
                <TableHead className="text-white/60">Stock</TableHead>
                <TableHead className="text-white/60">Sales</TableHead>
                <TableHead className="text-white/60">Rating</TableHead>
                <TableHead className="text-white/60">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {products.map((product) => (
                <TableRow key={product.id} className="border-white/10 hover:bg-white/5">
                  <TableCell className="font-medium text-white">{product.name}</TableCell>
                  <TableCell>
                    <Badge variant="outline" className="border-white/20 text-white hover:bg-white/10">{product.category}</Badge>
                  </TableCell>
                  <TableCell className="text-white/80">${product.price.toFixed(2)}</TableCell>
                  <TableCell>
                    <span className={product.stock < 15 ? "text-red-400" : "text-white/80"}>
                      {product.stock}
                    </span>
                  </TableCell>
                  <TableCell className="text-white/80">{product.sales}</TableCell>
                  <TableCell>
                    <div className="flex items-center text-white/80">
                      <Star className="mr-1 h-4 w-4 fill-yellow-400 text-yellow-400" />
                      {product.rating}
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center space-x-2">
                      <Button variant="ghost" size="sm" className="text-white/60 hover:text-white hover:bg-white/10">
                        <Eye className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm" className="text-white/60 hover:text-white hover:bg-white/10">
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm" className="text-white/60 hover:text-white hover:bg-white/10">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </div>
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
