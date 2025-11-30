
import { useState } from "react";
import { useParams } from "react-router-dom";
import { AlertCircle, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCreatorProfile } from "@/features/creator/hooks/useCreatorProfile";
import { CreatorProfileHeader } from "@/features/creator/components/CreatorProfileHeader";
import { CreatorInfoCard } from "@/features/creator/components/CreatorInfoCard";
import { CreatorContentTabs } from "@/features/creator/components/CreatorContentTabs";
import { KarolProfile } from "./KarolProfile";

export default function CreatorProfile() {
  const { username } = useParams();
  const [activeTab, setActiveTab] = useState("posts");

  // Special handling for Karol's OCR-extracted profile
  if (username === 'karol') {
    return <KarolProfile />;
  }

  const {
    creatorProfile,
    creatorContent,
    creatorStats,
    isSubscribed,
    isFollowing,
    loading,
    error,
    handleSubscribe,
    handleFollow
  } = useCreatorProfile(username);

  if (loading) {
    return (
      <div className="min-h-screen bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-emerald-900/20 via-zinc-950 to-zinc-950 flex items-center justify-center">
        <div className="text-center">
          <div className="w-8 h-8 border-4 border-white/20 border-t-emerald-500 rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-white/60">Loading creator profile...</p>
        </div>
      </div>
    );
  }

  if (error || !creatorProfile) {
    return (
      <div className="min-h-screen bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-emerald-900/20 via-zinc-950 to-zinc-950 flex items-center justify-center px-4">
        <div className="text-center max-w-md">
          <div className="w-16 h-16 bg-red-500/10 rounded-full flex items-center justify-center mx-auto mb-4 border border-red-500/20">
            <AlertCircle className="w-8 h-8 text-red-500" />
          </div>
          <h2 className="text-2xl font-bold text-white mb-2">Creator Not Found</h2>
          <p className="text-white/60 mb-6">
            The creator profile you're looking for doesn't exist or has been removed.
          </p>
          <Button 
            variant="outline" 
            onClick={() => window.history.back()}
            className="border-white/10 bg-white/5 hover:bg-white/10 text-white"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Go Back
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-emerald-900/20 via-zinc-950 to-zinc-950">
      <CreatorProfileHeader
        displayName={creatorProfile.display_name || creatorProfile.username}
        postsCount={creatorStats.posts}
        onBack={() => window.history.back()}
      />

      <div className="max-w-4xl mx-auto">
        <div className="h-48 bg-gradient-to-r from-emerald-900 via-emerald-800 to-emerald-900 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.1] mix-blend-overlay"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 to-transparent"></div>
        </div>

        <CreatorInfoCard
          profile={creatorProfile}
          stats={creatorStats}
          isFollowing={isFollowing}
          onFollow={handleFollow}
        />

        <CreatorContentTabs
          content={creatorContent}
          activeTab={activeTab}
          onTabChange={setActiveTab}
          isSubscribed={isSubscribed}
          onSubscribe={handleSubscribe}
          subscriptionPrice={creatorStats.subscriptionPrice}
          creatorName={creatorProfile.display_name || creatorProfile.username}
        />
      </div>
    </div>
  );
}