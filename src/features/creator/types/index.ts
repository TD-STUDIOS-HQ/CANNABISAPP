
export interface CreatorProfile {
  id: string;
  user_id: string;
  username: string;
  display_name: string | null;
  bio: string | null;
  avatar_url: string | null;
  is_creator_verified: boolean | null;
  subscription_price: number | null;
  role: string | null;
  created_at: string;
}

export interface CreatorContent {
  id: string;
  title: string;
  description: string | null;
  content_type: string;
  file_url: string | null;
  is_premium: boolean | null;
  price: number | null;
  created_at: string;
}

export interface CreatorStats {
  posts: number;
  subscribers: number;
  subscriptionPrice: number;
}
