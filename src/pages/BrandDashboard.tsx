
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { DashboardLayout } from "@/layouts/DashboardLayout";
import {
  DashboardOverview,
  DashboardProducts,
  DashboardOrders,
  DashboardCustomers,
  DashboardMessages,
  DashboardSettings
} from "@/features/dashboard";

const BrandDashboard = () => {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <DashboardLayout title="Brand Dashboard">
      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
        <TabsList className="grid w-full grid-cols-6 bg-black/20 backdrop-blur-xl border border-white/10 p-1">
          <TabsTrigger value="overview" className="data-[state=active]:bg-white/10 data-[state=active]:text-white text-white/60">Overview</TabsTrigger>
          <TabsTrigger value="products" className="data-[state=active]:bg-white/10 data-[state=active]:text-white text-white/60">Products</TabsTrigger>
          <TabsTrigger value="orders" className="data-[state=active]:bg-white/10 data-[state=active]:text-white text-white/60">Orders</TabsTrigger>
          <TabsTrigger value="customers" className="data-[state=active]:bg-white/10 data-[state=active]:text-white text-white/60">Customers</TabsTrigger>
          <TabsTrigger value="messages" className="data-[state=active]:bg-white/10 data-[state=active]:text-white text-white/60">Messages</TabsTrigger>
          <TabsTrigger value="settings" className="data-[state=active]:bg-white/10 data-[state=active]:text-white text-white/60">Settings</TabsTrigger>
        </TabsList>

        <TabsContent value="overview">
          <DashboardOverview />
        </TabsContent>

        <TabsContent value="products">
          <DashboardProducts />
        </TabsContent>

        <TabsContent value="orders">
          <DashboardOrders />
        </TabsContent>

        <TabsContent value="customers">
          <DashboardCustomers />
        </TabsContent>

        <TabsContent value="messages">
          <DashboardMessages />
        </TabsContent>

        <TabsContent value="settings">
          <DashboardSettings />
        </TabsContent>
      </Tabs>
    </DashboardLayout>
  );
};

export default BrandDashboard;