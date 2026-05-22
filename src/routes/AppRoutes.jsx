import React from "react";
import { Routes, Route } from "react-router-dom";
import DashboardLayout from "../layouts/DashboardLayout";
import Home from "../pages/Home";
import Dashboard from "../pages/Dashboard";
import GitRank from "../pages/GitRank";
import RankHer from "../pages/RankHer";
import CodingPlace from "../pages/CodingPlace";
import CodingOwl from "../pages/CodingOwl";
import Profile from "../pages/Profile";
import Login from "../pages/Login";
import NotFound from "../pages/NotFound";
import About from "../pages/About";
import ComingSoonCard from "../components/ui/ComingSoonCard";
import { Settings as SettingsIcon } from "lucide-react";

// A inline settings page to keep route integrated
const SettingsPage = () => (
  <div className="space-y-6">
    <ComingSoonCard
      title="User & Engine Settings - Coming Soon"
      description="Configure email alerts, change username handles, edit privacy options, and manage GitHub OAuth connection permissions."
      icon={SettingsIcon}
      features={[
        "Account authentication key scopes",
        "Staging profile visibility toggles",
        "Leaderboard notification email alerts",
        "Mascot Oliver focus target customization"
      ]}
      estimatedArrival="Q3 2026"
      showHourglass={true}
    />
  </div>
);

export const AppRoutes = () => {
  return (
    <Routes>
      {/* Public Pages */}
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      
      {/* Layout dashboard sub-pages */}
      <Route element={<DashboardLayout />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/gitrank" element={<GitRank />} />
        <Route path="/rankher" element={<RankHer />} />
        <Route path="/codingplace" element={<CodingPlace />} />
        <Route path="/codingowl" element={<CodingOwl />} />
        <Route path="/about" element={<About />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/settings" element={<SettingsPage />} />
      </Route>

      {/* 404 Catch All */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
