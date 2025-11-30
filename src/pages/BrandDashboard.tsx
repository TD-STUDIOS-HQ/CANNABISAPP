
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
        <TabsList className="grid w-full grid-cols-6">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="products">Products</TabsTrigger>
          <TabsTrigger value="orders">Orders</TabsTrigger>
          <TabsTrigger value="customers">Customers</TabsTrigger>
          <TabsTrigger value="messages">Messages</TabsTrigger>
          <TabsTrigger value="settings">Settings</TabsTrigger>
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