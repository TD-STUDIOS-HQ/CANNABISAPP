
import { Card, CardContent } from "@/components/ui/card";
import { messages } from "@/data/mockDashboardData";

export const DashboardMessages = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Messages</h2>
      
      <Card>
        <CardContent className="p-0">
          <div className="divide-y">
            {messages.map((message) => (
              <div key={message.id} className="flex items-center space-x-4 p-4">
                <div className={`h-2 w-2 rounded-full ${message.unread ? 'bg-blue-500' : 'bg-gray-300'}`} />
                <div className="flex-1 space-y-1">
                  <div className="flex items-center justify-between">
                    <p className="font-medium">{message.from}</p>
                    <p className="text-sm text-muted-foreground">{message.time}</p>
                  </div>
                  <p className="text-sm text-muted-foreground">{message.subject}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
