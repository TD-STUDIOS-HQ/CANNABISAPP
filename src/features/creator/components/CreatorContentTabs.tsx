
import { motion } from "framer-motion";
import { Grid3X3, Camera, Crown, Play } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import GlassCard from "@/components/GlassCard";
import { CreatorContent } from "../types";

interface CreatorContentTabsProps {
  content: CreatorContent[];
  activeTab: string;
  onTabChange: (value: string) => void;
  isSubscribed: boolean;
  onSubscribe: () => void;
  subscriptionPrice: number | null;
  creatorName: string;
}

export const CreatorContentTabs = ({
  content,
  activeTab,
  onTabChange,
  isSubscribed,
  onSubscribe,
  subscriptionPrice,
  creatorName
}: CreatorContentTabsProps) => {
  const freeContent = content.filter(item => !item.is_premium);
  const premiumContent = content.filter(item => item.is_premium);

  return (
    <div className="px-4 sm:px-6 lg:px-8 mt-8">
      <Tabs value={activeTab} onValueChange={onTabChange} className="w-full">
        <GlassCard className="p-1 mb-8">
          <TabsList className="bg-transparent w-full justify-start">
            <TabsTrigger value="posts" className="data-[state=active]:bg-white/10 data-[state=active]:text-white text-white/60 flex items-center gap-2 flex-1">
              <Grid3X3 className="w-4 h-4" />
              Posts
            </TabsTrigger>
            <TabsTrigger value="free" className="data-[state=active]:bg-white/10 data-[state=active]:text-white text-white/60 flex items-center gap-2 flex-1">
              <Camera className="w-4 h-4" />
              Free
            </TabsTrigger>
            <TabsTrigger value="premium" className="data-[state=active]:bg-white/10 data-[state=active]:text-white text-white/60 flex items-center gap-2 flex-1">
              <Crown className="w-4 h-4" />
              Premium
            </TabsTrigger>
          </TabsList>
        </GlassCard>

        <TabsContent value="posts">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-3 gap-1"
          >
            {content.length === 0 ? (
              <div className="col-span-3 text-center py-16">
                <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-4 border border-white/10">
                  <Camera className="w-8 h-8 text-white/40" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">No posts yet</h3>
                <p className="text-white/60">This creator hasn't shared any content yet.</p>
              </div>
            ) : (
              content.map((item) => (
                <div key={item.id} className="aspect-square bg-white/5 rounded-lg overflow-hidden relative group border border-white/10">
                  {item.file_url ? (
                    <img 
                      src={item.file_url} 
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                      <div className="w-full h-full flex items-center justify-center bg-white/5">
                      {item.content_type === 'video' ? (
                          <Play className="w-8 h-8 text-white/40" />
                      ) : (
                            <Camera className="w-8 h-8 text-white/40" />
                      )}
                    </div>
                  )}
                  
                  {item.is_premium && (
                    <div className="absolute top-2 right-2">
                      <Crown className="w-4 h-4 text-amber-400 drop-shadow-md" />
                    </div>
                  )}
                  
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-sm">
                    <div className="text-white text-center p-2">
                      <h4 className="font-medium text-sm mb-1 line-clamp-2">{item.title}</h4>
                      {item.price && (
                        <p className="text-xs text-emerald-400">${(item.price / 100).toFixed(2)}</p>
                      )}
                    </div>
                  </div>
                </div>
              ))
            )}
          </motion.div>
        </TabsContent>

        <TabsContent value="free">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-3 gap-1"
          >
            {freeContent.length === 0 ? (
              <div className="col-span-3 text-center py-16">
                <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-4 border border-white/10">
                  <Camera className="w-8 h-8 text-white/40" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">No free content</h3>
                <p className="text-white/60">This creator hasn't shared any free content yet.</p>
              </div>
            ) : (
              freeContent.map((item) => (
                <div key={item.id} className="aspect-square bg-white/5 rounded-lg overflow-hidden border border-white/10">
                  {item.file_url ? (
                    <img 
                      src={item.file_url} 
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                      <div className="w-full h-full flex items-center justify-center bg-white/5">
                        <Camera className="w-8 h-8 text-white/40" />
                    </div>
                  )}
                </div>
              ))
            )}
          </motion.div>
        </TabsContent>

        <TabsContent value="premium">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-3 gap-1"
          >
            {premiumContent.length === 0 ? (
              <div className="col-span-3 text-center py-16">
                <div className="w-16 h-16 bg-amber-500/10 rounded-full flex items-center justify-center mx-auto mb-4 border border-amber-500/20">
                  <Crown className="w-8 h-8 text-amber-500" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">No premium content</h3>
                <p className="text-white/60">This creator hasn't shared any premium content yet.</p>
              </div>
            ) : (
              <>
                {!isSubscribed && (
                    <GlassCard className="col-span-3 p-8 text-center mb-6">
                      <div className="w-16 h-16 bg-amber-500/10 rounded-full flex items-center justify-center mx-auto mb-4 border border-amber-500/20">
                      <Crown className="w-8 h-8 text-amber-500" />
                    </div>
                      <h3 className="text-lg font-semibold text-white mb-2">Premium Content</h3>
                      <p className="text-white/60 mb-6">
                      Subscribe to unlock exclusive content from {creatorName}
                    </p>
                    <Button 
                      onClick={onSubscribe} 
                        className="bg-amber-500 hover:bg-amber-600 text-black font-semibold"
                    >
                      Subscribe ${subscriptionPrice}/mo
                    </Button>
                    </GlassCard>
                )}
                {premiumContent.map((item) => (
                  <div key={item.id} className="aspect-square bg-white/5 rounded-lg overflow-hidden relative border border-white/10">
                    {item.file_url ? (
                      <img 
                        src={item.file_url} 
                        alt={item.title}
                        className={`w-full h-full object-cover ${!isSubscribed ? 'blur-md' : ''}`}
                      />
                    ) : (
                        <div className="w-full h-full flex items-center justify-center bg-white/5">
                        <Crown className="w-8 h-8 text-amber-500" />
                      </div>
                    )}
                    
                    {!isSubscribed && (
                      <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                        <Crown className="w-8 h-8 text-amber-500 drop-shadow-lg" />
                      </div>
                    )}
                  </div>
                ))}
              </>
            )}
          </motion.div>
        </TabsContent>
      </Tabs>
    </div>
  );
};
