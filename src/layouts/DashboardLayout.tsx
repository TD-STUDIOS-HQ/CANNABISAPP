
import { ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Calendar, LogOut } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

interface DashboardLayoutProps {
  children: ReactNode;
  title: string;
  showDateFilter?: boolean;
}

export const DashboardLayout = ({ children, title, showDateFilter = true }: DashboardLayoutProps) => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await supabase.auth.signOut();
      navigate('/auth');
      toast.success('Logged out successfully');
    } catch (error) {
      toast.error('Error logging out');
    }
  };

  return (
    <div 
      className="min-h-screen relative bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-emerald-900/20 via-zinc-950 to-zinc-950"
    >
      {/* Ambient background effects */}
      <div className="fixed inset-0 bg-[url('/noise.png')] opacity-[0.03] pointer-events-none mix-blend-overlay" />
      <div className="fixed top-[-20%] right-[-10%] w-[600px] h-[600px] rounded-full bg-emerald-600/10 blur-[120px] pointer-events-none" />
      <div className="fixed bottom-[-20%] left-[-10%] w-[500px] h-[500px] rounded-full bg-emerald-900/10 blur-[100px] pointer-events-none" />
      
      <div className="relative z-10">
        <div className="border-b border-white/5 bg-black/20 backdrop-blur-xl sticky top-0 z-50 supports-[backdrop-filter]:bg-black/20">
          <div className="flex h-16 items-center px-6">
            <h1 className="text-2xl font-semibold">{title}</h1>
            <div className="ml-auto flex items-center space-x-4">
              {showDateFilter && (
                <Button variant="frost" size="sm">
                  <Calendar className="mr-2 h-4 w-4" />
                  Last 30 days
                </Button>
              )}
              <Button variant="frost" size="sm" onClick={handleLogout}>
                <LogOut className="h-4 w-4 mr-2" />
                Logout
              </Button>
              <Avatar className="h-8 w-8">
                <AvatarImage src="/placeholder.svg" />
                <AvatarFallback>BD</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>

        <div className="flex-1 space-y-6 p-6">
          {children}
        </div>
      </div>
    </div>
  );
};
