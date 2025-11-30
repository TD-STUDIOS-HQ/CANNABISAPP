
import { ArrowLeft, MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CreatorProfileHeaderProps {
  displayName: string;
  postsCount: number;
  onBack: () => void;
}

export const CreatorProfileHeader = ({ displayName, postsCount, onBack }: CreatorProfileHeaderProps) => {
  return (
    <div className="bg-white border-b border-gray-200 sticky top-0 z-40">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Button variant="ghost" onClick={onBack} className="p-2">
            <ArrowLeft className="w-5 h-5" />
          </Button>
          
          <div className="text-center">
            <h1 className="font-semibold text-gray-900">{displayName}</h1>
            <p className="text-xs text-gray-500">{postsCount} posts</p>
          </div>
          
          <Button variant="ghost" className="p-2">
            <MoreHorizontal className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </div>
  );
};
