
export const salesData = [
  { month: "Jan", revenue: 12500, orders: 45 },
  { month: "Feb", revenue: 15200, orders: 52 },
  { month: "Mar", revenue: 18700, orders: 61 },
  { month: "Apr", revenue: 22300, orders: 73 },
  { month: "May", revenue: 25100, orders: 89 },
  { month: "Jun", revenue: 28900, orders: 95 }
];

export const productCategories = [
  { name: "Flower", value: 45, color: "#8B5CF6" },
  { name: "Edibles", value: 30, color: "#06B6D4" },
  { name: "Concentrates", value: 15, color: "#10B981" },
  { name: "Accessories", value: 10, color: "#F59E0B" }
];

export const recentOrders = [
  { id: "ORD-001", customer: "John Smith", items: 3, total: 125.50, status: "completed", date: "2024-01-27" },
  { id: "ORD-002", customer: "Sarah Johnson", items: 2, total: 89.99, status: "processing", date: "2024-01-27" },
  { id: "ORD-003", customer: "Mike Brown", items: 1, total: 45.00, status: "pending", date: "2024-01-26" },
  { id: "ORD-004", customer: "Lisa Davis", items: 4, total: 203.75, status: "completed", date: "2024-01-26" },
  { id: "ORD-005", customer: "Tom Wilson", items: 2, total: 156.25, status: "shipped", date: "2024-01-25" }
];

export const products = [
  { id: 1, name: "Purple Haze", category: "Flower", price: 45.00, stock: 23, sales: 156, rating: 4.8 },
  { id: 2, name: "Gummy Bears", category: "Edibles", price: 25.00, stock: 45, sales: 89, rating: 4.6 },
  { id: 3, name: "Live Resin Cart", category: "Concentrates", price: 65.00, stock: 12, sales: 67, rating: 4.9 },
  { id: 4, name: "Glass Pipe", category: "Accessories", price: 35.00, stock: 8, sales: 34, rating: 4.3 }
];

export const customers = [
  { id: 1, name: "John Smith", email: "john@email.com", orders: 12, spent: 1250.00, joined: "2023-08-15" },
  { id: 2, name: "Sarah Johnson", email: "sarah@email.com", orders: 8, spent: 890.50, joined: "2023-09-22" },
  { id: 3, name: "Mike Brown", email: "mike@email.com", orders: 15, spent: 1875.25, joined: "2023-07-10" },
  { id: 4, name: "Lisa Davis", email: "lisa@email.com", orders: 6, spent: 540.00, joined: "2023-11-05" }
];

export const messages = [
  { id: 1, from: "John Smith", subject: "Question about Purple Haze", time: "2 hours ago", unread: true },
  { id: 2, from: "Support Team", subject: "New compliance guidelines", time: "1 day ago", unread: false },
  { id: 3, from: "Sarah Johnson", subject: "Order status inquiry", time: "2 days ago", unread: false },
  { id: 4, from: "Admin", subject: "Monthly performance report", time: "3 days ago", unread: false }
];
