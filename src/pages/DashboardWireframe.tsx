
'use client';
import { AnimatePresence } from "framer-motion";
import {
  AuthStage,
  ConfigStage,
  LinkInBioEditor,
  RoutePickerStage,
  useWireframeState
} from "@/features/wireframe";

export default function DashboardWireframe() {
  const {
    stage, setStage,
    selectedRoute,
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
  } = useWireframeState();

  const renderContent = () => {
    if (stage === "auth") return <AuthStage onContinue={() => setStage("routes")} />;

    if (stage === "routes") return <RoutePickerStage onBack={() => setStage("auth")} onSelect={handleRouteSelect} />;

    if (stage === "config" && selectedRoute) {
      return <ConfigStage selectedRoute={selectedRoute} onBack={() => setStage("routes")} />;
    }

    if (stage === "link-in-bio" && selectedRoute) {
      return (
        <LinkInBioEditor
          selectedRoute={selectedRoute}
          isLoading={isLoading}
          editorTab={editorTab}
          setEditorTab={setEditorTab}
          profile={profile}
          links={links}
          appearance={appearance}
          handleProfileChange={handleProfileChange}
          handleLinkChange={handleLinkChange}
          addNewLink={addNewLink}
          removeLink={removeLink}
          handleAppearanceChange={handleAppearanceChange}
          onBack={() => setStage("routes")}
          devStatus={devStatus}
        />
      );
    }

    return null;
  };

  return (
    <div className="min-h-screen w-full bg-zinc-950 text-white font-sans">
      <div className="mx-auto max-w-7xl px-4 py-10">
        <div className="mb-8 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-lg bg-white/10 backdrop-blur" />
            <div className="font-semibold tracking-wide">TD Studios • Hub</div>
          </div>
          <div className="text-xs text-white/60">Wireframe • v5 (Local)</div>
        </div>
        <AnimatePresence mode="wait">{renderContent()}</AnimatePresence>
      </div>
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(60%_40%_at_50%_0%,rgba(255,255,255,0.08),transparent_60%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),transparent_30%,transparent_70%,rgba(255,255,255,0.04))]" />
      </div>
    </div>
  );
}
