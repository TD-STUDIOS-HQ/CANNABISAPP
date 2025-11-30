
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
      className="min-h-screen relative"
      style={{
        backgroundImage: `url('/lovable-uploads/9625d965-6a42-4323-8497-34b244302dc2.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Overlay for better contrast */}
      <div className="absolute inset-0 bg-black/20 backdrop-blur-[0.5px]" />
      
      <div className="relative z-10">
        <div className="border-b bg-background/60 backdrop-blur-md sticky top-0 z-50">
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
