
import { ArrowLeft, MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CreatorProfileHeaderProps {
  displayName: string;
  postsCount: number;
  onBack: () => void;
}

export const CreatorProfileHeader = ({ displayName, postsCount, onBack }: CreatorProfileHeaderProps) => {
  return (
    <div className="bg-black/20 backdrop-blur-xl border-b border-white/5 sticky top-0 z-40 supports-[backdrop-filter]:bg-black/20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Button variant="ghost" onClick={onBack} className="p-2 text-white hover:bg-white/10 hover:text-white">
            <ArrowLeft className="w-5 h-5" />
          </Button>
          
          <div className="text-center">
            <h1 className="font-semibold text-white">{displayName}</h1>
            <p className="text-xs text-white/60">{postsCount} posts</p>
          </div>
          
          <Button variant="ghost" className="p-2 text-white hover:bg-white/10 hover:text-white">
            <MoreHorizontal className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </div>
  );
};
