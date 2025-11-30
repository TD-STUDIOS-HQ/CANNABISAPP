
import React from "react";

export type Route = { icon: React.ElementType; title: string; subtitle?: string };
export type LinkItem = { id: number; title: string; url: string; enabled: boolean };
export type Profile = { name: string; bio: string };
export type Appearance = { background: string; buttonStyle: string; buttonColor: string };
export type Persisted = { profile: Profile; links: LinkItem[]; appearance: Appearance };
