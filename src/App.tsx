
import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

const Index = lazy(() => import("./pages/Index"));
const CreatorSignup = lazy(() => import("./pages/CreatorSignup"));
const CreatorOnboarding = lazy(() => import("./pages/CreatorOnboarding"));
const CreatorPublic = lazy(() => import("./pages/CreatorPublic"));
const BrandDashboard = lazy(() => import("./pages/BrandDashboard"));
const DashboardWireframe = lazy(() => import("./pages/DashboardWireframe"));
const CreatorProfile = lazy(() => import("./pages/CreatorProfile"));

export default function App() {
  return (
    <Suspense fallback={<div className="p-6 text-zinc-200">Loading...</div>}>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/creator/signup" element={<CreatorSignup />} />
        <Route path="/creator/onboarding" element={<CreatorOnboarding />} />
        <Route path="/c/:handle" element={<CreatorPublic />} />

        {/* New Routes */}
        <Route path="/dashboard" element={<BrandDashboard />} />
        <Route path="/wireframe" element={<DashboardWireframe />} />
        <Route path="/creator/:username" element={<CreatorProfile />} />

        {/* Fallback */}
        <Route path="*" element={<div className="p-6">404 Not Found</div>} />
      </Routes>
    </Suspense>
  );
}
