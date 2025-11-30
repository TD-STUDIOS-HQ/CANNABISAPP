
import { motion } from "framer-motion";
import { Grid3X3, Camera, Crown, Play } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
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
        <TabsList className="bg-white border border-gray-200 p-1 mb-8">
          <TabsTrigger value="posts" className="data-[state=active]:bg-gray-900 data-[state=active]:text-white flex items-center gap-2">
            <Grid3X3 className="w-4 h-4" />
            Posts
          </TabsTrigger>
          <TabsTrigger value="free" className="data-[state=active]:bg-gray-900 data-[state=active]:text-white flex items-center gap-2">
            <Camera className="w-4 h-4" />
            Free
          </TabsTrigger>
          <TabsTrigger value="premium" className="data-[state=active]:bg-gray-900 data-[state=active]:text-white flex items-center gap-2">
            <Crown className="w-4 h-4" />
            Premium
          </TabsTrigger>
        </TabsList>

        <TabsContent value="posts">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-3 gap-1"
          >
            {content.length === 0 ? (
              <div className="col-span-3 text-center py-16">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Camera className="w-8 h-8 text-gray-400" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">No posts yet</h3>
                <p className="text-gray-500">This creator hasn't shared any content yet.</p>
              </div>
            ) : (
              content.map((item) => (
                <div key={item.id} className="aspect-square bg-gray-200 rounded-lg overflow-hidden relative group">
                  {item.file_url ? (
                    <img 
                      src={item.file_url} 
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gray-200">
                      {item.content_type === 'video' ? (
                        <Play className="w-8 h-8 text-gray-500" />
                      ) : (
                        <Camera className="w-8 h-8 text-gray-500" />
                      )}
                    </div>
                  )}
                  
                  {item.is_premium && (
                    <div className="absolute top-2 right-2">
                      <Crown className="w-4 h-4 text-amber-400" />
                    </div>
                  )}
                  
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="text-white text-center">
                      <h4 className="font-medium text-sm mb-1">{item.title}</h4>
                      {item.price && (
                        <p className="text-xs">${(item.price / 100).toFixed(2)}</p>
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
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Camera className="w-8 h-8 text-gray-400" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">No free content</h3>
                <p className="text-gray-500">This creator hasn't shared any free content yet.</p>
              </div>
            ) : (
              freeContent.map((item) => (
                <div key={item.id} className="aspect-square bg-gray-200 rounded-lg overflow-hidden">
                  {item.file_url ? (
                    <img 
                      src={item.file_url} 
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gray-200">
                      <Camera className="w-8 h-8 text-gray-500" />
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
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Crown className="w-8 h-8 text-amber-500" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">No premium content</h3>
                <p className="text-gray-500">This creator hasn't shared any premium content yet.</p>
              </div>
            ) : (
              <>
                {!isSubscribed && (
                  <div className="col-span-3 bg-white rounded-2xl border border-gray-200 p-8 text-center mb-6">
                    <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Crown className="w-8 h-8 text-amber-500" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Premium Content</h3>
                    <p className="text-gray-600 mb-6">
                      Subscribe to unlock exclusive content from {creatorName}
                    </p>
                    <Button 
                      onClick={onSubscribe} 
                      className="bg-gray-900 hover:bg-gray-800 text-white"
                    >
                      Subscribe ${subscriptionPrice}/mo
                    </Button>
                  </div>
                )}
                {premiumContent.map((item) => (
                  <div key={item.id} className="aspect-square bg-gray-200 rounded-lg overflow-hidden relative">
                    {item.file_url ? (
                      <img 
                        src={item.file_url} 
                        alt={item.title}
                        className={`w-full h-full object-cover ${!isSubscribed ? 'blur-md' : ''}`}
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-gray-200">
                        <Crown className="w-8 h-8 text-amber-500" />
                      </div>
                    )}
                    
                    {!isSubscribed && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Crown className="w-8 h-8 text-amber-500" />
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
