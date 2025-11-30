
import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/supabase";
import { useAuth } from "@/hooks/useAuth";
import { useToast } from "@/hooks/use-toast";
import { CreatorProfile, CreatorContent, CreatorStats } from "../types";

export const useCreatorProfile = (username: string | undefined) => {
  const { user } = useAuth();
  const { toast } = useToast();
  
  const [creatorProfile, setCreatorProfile] = useState<CreatorProfile | null>(null);
  const [creatorContent, setCreatorContent] = useState<CreatorContent[]>([]);
  const [creatorStats, setCreatorStats] = useState<CreatorStats>({
    posts: 0,
    subscribers: 0,
    subscriptionPrice: 0
  });
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isFollowing, setIsFollowing] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (username) {
      loadCreatorData();
    }
  }, [username, user]);

  const loadCreatorData = async () => {
    try {
      setLoading(true);
      setError(null);

      // Load creator profile
      const { data: profile, error: profileError } = await supabase
        .from('profiles')
        .select('*')
        .eq('username', username)
        .single();

      if (profileError) {
        throw new Error('Creator not found');
      }

      setCreatorProfile(profile);

      // Load creator content
      const { data: content, error: contentError } = await supabase
        .from('creator_content')
        .select('*')
        .eq('creator_id', profile.user_id)
        .eq('moderation_status', 'approved') // Only show approved content
        .order('created_at', { ascending: false });

      if (contentError) {
        console.error('Error loading content:', contentError);
      } else {
        setCreatorContent(content || []);
      }

      // Load creator stats
      const { data: subscriptions, error: subsError } = await supabase
        .from('subscriptions')
        .select('*')
        .eq('creator_id', profile.user_id)
        .eq('status', 'active');

      if (subsError) {
        console.error('Error loading subscriptions:', subsError);
      }

      // Check if current user is subscribed
      if (user) {
        const { data: userSub } = await supabase
          .from('subscriptions')
          .select('*')
          .eq('creator_id', profile.user_id)
          .eq('subscriber_id', user.id)
          .eq('status', 'active')
          .maybeSingle();

        setIsSubscribed(!!userSub);
      }

      // Set stats
      setCreatorStats({
        posts: content?.length || 0,
        subscribers: subscriptions?.length || 0,
        subscriptionPrice: profile.subscription_price || 0
      });

    } catch (err) {
      console.error('Error loading creator data:', err);
      setError(err instanceof Error ? err.message : 'Failed to load creator profile');
      toast({
        title: "Error",
        description: "Failed to load creator profile",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  const handleSubscribe = () => {
    setIsSubscribed(!isSubscribed);
  };

  const handleFollow = () => {
    setIsFollowing(!isFollowing);
  };

  return {
    creatorProfile,
    creatorContent,
    creatorStats,
    isSubscribed,
    isFollowing,
    loading,
    error,
    handleSubscribe,
    handleFollow
  };
};
