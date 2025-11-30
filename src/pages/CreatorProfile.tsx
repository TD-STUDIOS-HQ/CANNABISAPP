
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
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-8 h-8 border-4 border-gray-300 border-t-gray-900 rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Loading creator profile...</p>
        </div>
      </div>
    );
  }

  if (error || !creatorProfile) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
        <div className="text-center max-w-md">
          <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <AlertCircle className="w-8 h-8 text-red-600" />
          </div>
          <h2 className="text-2xl font-bold text-black mb-2">Creator Not Found</h2>
          <p className="text-black mb-6">
            The creator profile you're looking for doesn't exist or has been removed.
          </p>
          <Button 
            variant="outline" 
            onClick={() => window.history.back()}
            className="border-gray-300 hover:bg-gray-50"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Go Back
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <CreatorProfileHeader
        displayName={creatorProfile.display_name || creatorProfile.username}
        postsCount={creatorStats.posts}
        onBack={() => window.history.back()}
      />

      <div className="max-w-4xl mx-auto">
        <div className="h-48 bg-gradient-to-br from-gray-200 to-gray-300"></div>

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