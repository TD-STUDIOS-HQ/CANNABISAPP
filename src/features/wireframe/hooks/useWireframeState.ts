
import { useState, useEffect } from "react";
import { Route, LinkItem, Profile, Appearance, Persisted } from "../types";
import { STORAGE_KEY } from "../constants";

export const useWireframeState = () => {
  const [stage, setStage] = useState<"auth" | "routes" | "config" | "link-in-bio">("auth");
  const [selectedRoute, setSelectedRoute] = useState<Route | null>(null);
  const [editorTab, setEditorTab] = useState<'profile' | 'links' | 'appearance'>('profile');
  const [isLoading, setIsLoading] = useState(false);
  const [devStatus, setDevStatus] = useState<string>("");

  // Local state for Link-in-Bio
  const [links, setLinks] = useState<LinkItem[]>([]);
  const [profile, setProfile] = useState<Profile>({ name: 'Your Name', bio: 'Your bio goes here...' });
  const [appearance, setAppearance] = useState<Appearance>({ background: 'bg-zinc-900', buttonStyle: 'rounded-lg', buttonColor: 'bg-white/10' });

  // --- Local persistence ---
  function loadFromStorage(): Persisted | null {
    try { const raw = localStorage.getItem(STORAGE_KEY); return raw ? JSON.parse(raw) as Persisted : null; } catch { return null; }
  }
  function saveToStorage(next: Partial<Persisted>) {
    const current: Persisted = { profile, links, appearance };
    const merged: Persisted = { ...current, ...next } as Persisted;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(merged));
  }

  useEffect(() => {
    // DEV tests
    try {
      localStorage.setItem("__dev_test__", "ok");
      const t = localStorage.getItem("__dev_test__");
      if (t === "ok") setDevStatus("storage ok"); else setDevStatus("storage failed");
    } catch { setDevStatus("storage disabled"); }

    setIsLoading(true);
    const cached = loadFromStorage();
    if (cached) {
      setProfile(cached.profile);
      setLinks(cached.links);
      setAppearance(cached.appearance);
    }
    setIsLoading(false);
  }, []);

  // Auto-save on changes
  useEffect(() => { saveToStorage({ profile }); }, [profile]);
  useEffect(() => { saveToStorage({ links }); }, [links]);
  useEffect(() => { saveToStorage({ appearance }); }, [appearance]);

  // Handlers
  const handleProfileChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target; setProfile(prev => ({ ...prev, [name]: value }));
  };
  const handleLinkChange = (id: number, field: keyof LinkItem, value: string | boolean) => {
    setLinks(prev => prev.map(l => l.id === id ? { ...l, [field]: value as any } : l));
  };
  const addNewLink = () => { setLinks(prev => [...prev, { id: Date.now(), title: 'New Link', url: '', enabled: true }]); };
  const removeLink = (id: number) => { setLinks(prev => prev.filter(l => l.id !== id)); };
  const handleAppearanceChange = (field: keyof Appearance, value: string) => { setAppearance(prev => ({ ...prev, [field]: value })); };

  // UI routing
  const handleRouteSelect = (route: Route) => { setSelectedRoute(route); setStage(route.title === "Creator Link-in-Bio" ? "link-in-bio" : "config"); };

  return {
    stage, setStage,
    selectedRoute, setSelectedRoute,
    editorTab, setEditorTab,
    isLoading,
    devStatus,
    links,
    profile,
    appearance,
    handleProfileChange,
    handleLinkChange,
    addNewLink,
    removeLink,
    handleAppearanceChange,
    handleRouteSelect
  };
};
