
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export const DashboardSettings = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-white">Settings</h2>
      
      <div className="grid gap-6">
        <Card className="bg-black/20 backdrop-blur-xl border-white/10 text-white">
          <CardHeader>
            <CardTitle className="text-white">Brand Information</CardTitle>
            <CardDescription className="text-white/60">Update your brand details and preferences</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid gap-2">
              <Label htmlFor="brand-name" className="text-white">Brand Name</Label>
              <Input id="brand-name" placeholder="Your Brand Name" className="bg-white/5 border-white/10 text-white placeholder:text-white/40 focus:border-emerald-500/50" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="brand-description" className="text-white">Description</Label>
              <Textarea id="brand-description" placeholder="Tell customers about your brand" className="bg-white/5 border-white/10 text-white placeholder:text-white/40 focus:border-emerald-500/50" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="contact-email" className="text-white">Contact Email</Label>
              <Input id="contact-email" type="email" placeholder="contact@yourbrand.com" className="bg-white/5 border-white/10 text-white placeholder:text-white/40 focus:border-emerald-500/50" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-black/20 backdrop-blur-xl border-white/10 text-white">
          <CardHeader>
            <CardTitle className="text-white">Business Settings</CardTitle>
            <CardDescription className="text-white/60">Configure your business preferences</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid gap-2">
              <Label htmlFor="tax-rate" className="text-white">Tax Rate (%)</Label>
              <Input id="tax-rate" type="number" placeholder="8.25" className="bg-white/5 border-white/10 text-white placeholder:text-white/40 focus:border-emerald-500/50" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="delivery-fee" className="text-white">Delivery Fee ($)</Label>
              <Input id="delivery-fee" type="number" placeholder="5.00" className="bg-white/5 border-white/10 text-white placeholder:text-white/40 focus:border-emerald-500/50" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="currency" className="text-white">Currency</Label>
              <Select>
                <SelectTrigger className="bg-white/5 border-white/10 text-white focus:border-emerald-500/50">
                  <SelectValue placeholder="Select currency" />
                </SelectTrigger>
                <SelectContent className="bg-zinc-950 border-white/10 text-white">
                  <SelectItem value="usd" className="focus:bg-white/10 focus:text-white">USD ($)</SelectItem>
                  <SelectItem value="cad" className="focus:bg-white/10 focus:text-white">CAD ($)</SelectItem>
                  <SelectItem value="eur" className="focus:bg-white/10 focus:text-white">EUR (€)</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
