
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { User, Link as LinkIcon, Palette, Image as ImageIcon, Plus, GripVertical, Trash2, Eye, ArrowLeft } from "lucide-react";
import { INPUT_CLASSES, BUTTON_CLASSES } from "../constants";
import { Route, LinkItem, Profile, Appearance } from "../types";

interface LinkInBioEditorProps {
  selectedRoute: Route;
  isLoading: boolean;
  editorTab: 'profile' | 'links' | 'appearance';
  setEditorTab: (tab: 'profile' | 'links' | 'appearance') => void;
  profile: Profile;
  links: LinkItem[];
  appearance: Appearance;
  handleProfileChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  handleLinkChange: (id: number, field: keyof LinkItem, value: string | boolean) => void;
  addNewLink: () => void;
  removeLink: (id: number) => void;
  handleAppearanceChange: (field: keyof Appearance, value: string) => void;
  onBack: () => void;
  devStatus: string;
}

const TabButton = ({ active, onClick, children }: { active: boolean, onClick: () => void, children: React.ReactNode }) => (
  <button onClick={onClick} className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${active ? 'bg-white/10 text-white' : 'text-white/60 hover:bg-white/5'}`}>
    {children}
  </button>
);

export const LinkInBioEditor = ({
  selectedRoute, isLoading, editorTab, setEditorTab, profile, links, appearance,
  handleProfileChange, handleLinkChange, addNewLink, removeLink, handleAppearanceChange, onBack, devStatus
}: LinkInBioEditorProps) => {
  const Icon = selectedRoute.icon;
  return (
    <motion.section key="link-in-bio" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }} className="grid gap-6">
      {/* Header */}
      <div className="rounded-2xl border border-white/10 bg-white/5 p-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="rounded-xl border border-white/10 bg-white/10 p-2"><Icon className="size-5" /></div>
          <div><h2 className="font-semibold">{selectedRoute.title}</h2><p className="text-xs text-white/70">{selectedRoute.subtitle}</p></div>
        </div>
        <div className="text-xs text-white/60">Editing</div>
      </div>

      {isLoading ? (
        <div className="flex justify-center items-center h-64 text-white/50">Loading…</div>
      ) : (
        <div className="grid lg:grid-cols-3 gap-6 items-start">
          {/* Editor Panel */}
          <div className="lg:col-span-2 rounded-2xl border border-white/10 bg-white/5 p-6 grid gap-6">
            <div className="p-1 bg-black/20 rounded-lg flex items-center gap-1 self-start">
              <TabButton active={editorTab === 'profile'} onClick={() => setEditorTab('profile')}><User className="size-4 inline mr-1.5" />Profile</TabButton>
              <TabButton active={editorTab === 'links'} onClick={() => setEditorTab('links')}><LinkIcon className="size-4 inline mr-1.5" />Links</TabButton>
              <TabButton active={editorTab === 'appearance'} onClick={() => setEditorTab('appearance')}><Palette className="size-4 inline mr-1.5" />Appearance</TabButton>
            </div>

            <AnimatePresence mode="wait">
              <motion.div key={editorTab} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.2 }}>
                {editorTab === 'profile' && (
                  <div className="grid gap-4">
                    <h3 className="text-lg font-semibold">Profile Settings</h3>
                    <div className="flex items-start gap-4">
                      <button className="relative group size-20 rounded-full bg-black/20 border border-white/10 flex items-center justify-center"><ImageIcon className="size-8 text-white/40" /></button>
                      <div className="flex-1 grid gap-3">
                        <input name="name" className={INPUT_CLASSES} placeholder="Name" value={profile.name} onChange={handleProfileChange} />
                        <textarea name="bio" className={`${INPUT_CLASSES} min-h-[80px]`} placeholder="Bio" value={profile.bio} onChange={handleProfileChange} />
                      </div>
                    </div>
                  </div>
                )}

                {editorTab === 'links' && (
                  <div className="grid gap-4">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-semibold">Your Links</h3>
                      <button onClick={addNewLink} className={`${BUTTON_CLASSES} bg-white/10 text-xs hover:bg-white/20`}><Plus className="size-4" /> Add Link</button>
                    </div>
                    <div className="grid gap-3">
                      {links.map(link => (
                        <div key={link.id} className="bg-black/20 border border-white/10 rounded-xl p-3 flex items-start gap-3">
                          <GripVertical className="size-5 text-white/40 cursor-grab mt-2.5" />
                          <div className="flex-1 grid gap-2">
                            <input className={INPUT_CLASSES} placeholder="Title" value={link.title} onChange={(e) => handleLinkChange(link.id, 'title', e.target.value)} />
                            <input className={INPUT_CLASSES} placeholder="URL" value={link.url} onChange={(e) => handleLinkChange(link.id, 'url', e.target.value)} />
                          </div>
                          <div className="flex flex-col items-center gap-2">
                            <button onClick={() => removeLink(link.id)} className="p-2 text-white/50 hover:text-white"><Trash2 className="size-4" /></button>
                            <label className="relative inline-flex cursor-pointer items-center">
                              <input type="checkbox" checked={link.enabled} onChange={(e) => handleLinkChange(link.id, 'enabled', e.target.checked)} className="peer sr-only" />
                              <div className="peer h-5 w-9 rounded-full bg-zinc-700 after:absolute after:start-[2px] after:top-[2px] after:h-4 after:w-4 after:rounded-full after:bg-white after:transition-all peer-checked:bg-blue-600 peer-checked:after:translate-x-full"></div>
                            </label>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {editorTab === 'appearance' && (
                  <div className="grid gap-6">
                    <h3 className="text-lg font-semibold">Appearance</h3>
                    <div>
                      <label className="text-sm font-medium text-white/90 mb-2 block">Background</label>
                      <div className="grid grid-cols-4 gap-2">
                        <button onClick={() => handleAppearanceChange('background', 'bg-zinc-900')} className="h-12 rounded-lg bg-zinc-900 border-2 border-white/20"></button>
                        <button onClick={() => handleAppearanceChange('background', 'bg-gradient-to-br from-blue-900 to-zinc-900')} className="h-12 rounded-lg bg-gradient-to-br from-blue-900 to-zinc-900"></button>
                        <button onClick={() => handleAppearanceChange('background', 'bg-gradient-to-br from-purple-900 to-zinc-900')} className="h-12 rounded-lg bg-gradient-to-br from-purple-900 to-zinc-900"></button>
                        <button onClick={() => handleAppearanceChange('background', 'bg-gradient-to-br from-green-900 to-zinc-900')} className="h-12 rounded-lg bg-gradient-to-br from-green-900 to-zinc-900"></button>
                      </div>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-white/90 mb-2 block">Button Style</label>
                      <div className="grid grid-cols-3 gap-2">
                        <button onClick={() => handleAppearanceChange('buttonStyle', 'rounded-lg')} className="h-10 rounded-lg bg-white/10 text-xs">Sharp</button>
                        <button onClick={() => handleAppearanceChange('buttonStyle', 'rounded-2xl')} className="h-10 rounded-2xl bg-white/10 text-xs">Rounded</button>
                        <button onClick={() => handleAppearanceChange('buttonStyle', 'rounded-full')} className="h-10 rounded-full bg-white/10 text-xs">Pill</button>
                      </div>
                    </div>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Preview Panel */}
          <div className="p-6 flex flex-col gap-4 sticky top-10">
            <h3 className="text-lg font-semibold flex items-center gap-2"><Eye className="size-5" /> Phone Preview</h3>
            <div className={`w-full max-w-[300px] mx-auto rounded-[40px] border-[10px] border-zinc-800 shadow-xl overflow-hidden aspect-[9/19.5] transition-colors duration-300 ${appearance.background}`}>
              <div className="p-4 pt-8 flex flex-col items-center gap-4 h-full overflow-y-auto">
                <div className="size-20 rounded-full bg-white/10"></div>
                <div className="text-center">
                  <h4 className="font-semibold">{profile.name || "Your Name"}</h4>
                  <p className="text-xs text-white/70 max-w-xs break-words">{profile.bio || "Your bio goes here..."}</p>
                </div>
                <div className="w-full flex flex-col gap-3 mt-4">
                  {links.filter(l => l.enabled).map(link => (
                    <div key={link.id} className={`w-full p-3 text-center text-sm font-medium transition-all duration-300 ${appearance.buttonStyle} ${appearance.buttonColor}`}>{link.title || "Link Title"}</div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Footer actions */}
      <div className="flex items-center justify-between gap-3 mt-4">
        <button onClick={onBack} className={`${BUTTON_CLASSES} border border-white/15 text-sm text-white/80 hover:bg-white/10`}><ArrowLeft className="size-4" /> Back to Routes</button>
        <p className="text-xs text-white/60">Auto-saved locally ({devStatus}).</p>
      </div>
    </motion.section>
  );
};
