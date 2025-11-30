
import { motion } from "framer-motion";
import { Verified, Crown, Calendar, Plus, MessageCircle, Share } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CreatorProfile, CreatorStats } from "../types";

interface CreatorInfoCardProps {
  profile: CreatorProfile;
  stats: CreatorStats;
  isFollowing: boolean;
  onFollow: () => void;
}

export const CreatorInfoCard = ({ profile, stats, isFollowing, onFollow }: CreatorInfoCardProps) => {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', { 
      month: 'long', 
      year: 'numeric' 
    });
  };

  return (
    <div className="relative px-4 sm:px-6 lg:px-8 -mt-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6"
      >
        <div className="flex flex-col sm:flex-row sm:items-start gap-6 mb-6">
          <div className="relative flex-shrink-0">
            <Avatar className="w-24 h-24 ring-4 ring-white">
              <AvatarImage 
                src={profile.avatar_url || undefined} 
                alt={profile.display_name || profile.username} 
              />
              <AvatarFallback className="bg-gray-200 text-gray-600 text-2xl">
                {(profile.display_name || profile.username)[0].toUpperCase()}
              </AvatarFallback>
            </Avatar>
            
            {profile.is_creator_verified && (
              <div className="absolute -bottom-1 -right-1 w-7 h-7 bg-blue-500 rounded-full border-3 border-white flex items-center justify-center">
                <Verified className="w-4 h-4 text-white" />
              </div>
            )}
          </div>
          
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-1">
              <h2 className="text-2xl font-bold text-gray-900">
                {profile.display_name || profile.username}
              </h2>
              {profile.role === 'creator' && (
                <Crown className="w-5 h-5 text-amber-500" />
              )}
            </div>
            
            <p className="text-gray-500 mb-3">@{profile.username}</p>

            <div className="flex gap-6 mb-4">
              <div className="text-center">
                <div className="font-bold text-gray-900">{stats.posts}</div>
                <div className="text-sm text-gray-500">Posts</div>
              </div>
              <div className="text-center">
                <div className="font-bold text-gray-900">{stats.subscribers.toLocaleString()}</div>
                <div className="text-sm text-gray-500">Subscribers</div>
              </div>
              <div className="text-center">
                <div className="font-bold text-gray-900">4.8K</div>
                <div className="text-sm text-gray-500">Following</div>
              </div>
            </div>

            {profile.bio && (
              <p className="text-gray-700 mb-4 leading-relaxed">
                {profile.bio}
              </p>
            )}

            <div className="flex flex-wrap gap-4 text-sm text-gray-500 mb-4">
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                Joined {formatDate(profile.created_at)}
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mb-4">
              {profile.role === 'creator' && (
                <Badge variant="secondary" className="bg-amber-100 text-amber-700">
                  Creator
                </Badge>
              )}
              {profile.is_creator_verified && (
                <Badge variant="secondary" className="bg-blue-100 text-blue-700">
                  Verified
                </Badge>
              )}
            </div>
          </div>
        </div>

        <div className="flex flex-wrap gap-3">
          <Button
            variant={isFollowing ? "secondary" : "default"}
            onClick={onFollow}
            className={`flex-1 min-w-0 ${!isFollowing ? 'bg-gray-900 hover:bg-gray-800' : ''}`}
          >
            <Plus className="w-4 h-4 mr-2" />
            {isFollowing ? 'Following' : 'Follow'}
          </Button>
          
          <Button variant="outline" size="icon" className="border-gray-300 hover:bg-gray-50">
            <MessageCircle className="w-4 h-4" />
          </Button>
          
          <Button variant="outline" size="icon" className="border-gray-300 hover:bg-gray-50">
            <Share className="w-4 h-4" />
          </Button>
        </div>
      </motion.div>
    </div>
  );
};
