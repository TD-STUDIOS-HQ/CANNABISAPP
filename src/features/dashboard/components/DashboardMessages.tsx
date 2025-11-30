
import { Card, CardContent } from "@/components/ui/card";
import { messages } from "@/data/mockDashboardData";

export const DashboardMessages = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-white">Messages</h2>
      
      <Card className="bg-black/20 backdrop-blur-xl border-white/10 text-white">
        <CardContent className="p-0">
          <div className="divide-y divide-white/10">
            {messages.map((message) => (
              <div key={message.id} className="flex items-center space-x-4 p-4 hover:bg-white/5 transition-colors">
                <div className={`h-2 w-2 rounded-full ${message.unread ? 'bg-emerald-500' : 'bg-white/20'}`} />
                <div className="flex-1 space-y-1">
                  <div className="flex items-center justify-between">
                    <p className="font-medium text-white">{message.from}</p>
                    <p className="text-sm text-white/60">{message.time}</p>
                  </div>
                  <p className="text-sm text-white/60">{message.subject}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
