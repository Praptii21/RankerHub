import React from "react";
import { Shield, Users, Trophy, Code2, Award, Cpu, Info } from "lucide-react";
import Card from "../components/ui/Card";
import SectionHeader from "../components/ui/SectionHeader";

export const About = () => {
  const stats = [
    { label: "Community Members", value: "250K+", icon: Users, color: "text-violet-500 bg-violet-500/10 border-violet-500/20" },
    { label: "XP Points Issued", value: "85M+", icon: Trophy, color: "text-amber-500 bg-amber-500/10 border-amber-500/20" },
    { label: "Algorithms Compiled", value: "12M+", icon: Code2, color: "text-emerald-500 bg-emerald-500/10 border-emerald-500/20" },
    { label: "Open-Source Integrations", value: "1,500+", icon: Cpu, color: "text-blue-500 bg-blue-500/10 border-blue-500/20" }
  ];

  const team = [
    { name: "Indresh", role: "Lead Architect & Developer", avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=200", bio: "Passionate about full-stack engineering, gamified developer tools, and building responsive, premium UI components." },
    { name: "Oliver the Owl", role: "Chief Motivation Officer", avatar: "https://images.unsplash.com/photo-1544390158-44754023dd70?auto=format&fit=crop&q=80&w=200", bio: "The brains behind the CodingOwl focus module. Helps developers stay on track and maintain their daily streak goals." }
  ];

  return (
    <div className="space-y-8">
      {/* Page Header */}
      <SectionHeader
        title="About RankHub"
        subtitle="Exploring the mission, values, and architectural details powering the premium developer leaderboard platform."
        badge="Platform Mission"
        badgeColor="bg-violet-500/10 text-violet-600 dark:text-violet-400 border border-violet-500/20"
      />

      {/* Intro section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="p-6 md:col-span-2 relative overflow-hidden flex flex-col justify-between">
          <div className="absolute top-0 right-0 w-32 h-32 bg-violet-500/5 rounded-full blur-2xl pointer-events-none" />
          <div className="space-y-4">
            <h3 className="text-xl font-extrabold text-slate-900 dark:text-white">Our Vision</h3>
            <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-medium">
              RankHub was built with a simple goal: to make developer analytics and contribution tracking exciting, engaging, and motivating. By integrating daily Git milestones, problem-solving, habit formation, and equity-focused initiatives, RankHub brings a premium gamified experience to modern engineering teams.
            </p>
            <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-medium">
              We believe coding is more than a job—it's a journey of continuous learning. By visualizing progress and rewarding consistency, we empower developers to claim their spots on leaderboards, verify their achievements, and spotlight their craft.
            </p>
          </div>
          <div className="pt-6 border-t border-slate-100 dark:border-slate-800 flex items-center gap-3 text-xs font-semibold text-slate-400">
            <Shield className="w-4 h-4 text-violet-500" />
            <span>Secure analytics, zero tracking data leakage, public verify systems.</span>
          </div>
        </Card>

        <Card className="p-6 bg-gradient-to-br from-violet-600 to-indigo-700 text-white border-none shadow-[0_10px_30px_rgba(124,58,237,0.25)] flex flex-col justify-between">
          <div className="space-y-4">
            <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center backdrop-blur-md">
              <Award className="w-5 h-5 text-white" />
            </div>
            <h3 className="text-lg font-extrabold leading-tight">Driven by Performance</h3>
            <p className="text-xs text-violet-100 leading-relaxed font-medium">
              RankHub runs high-performance ranking engines checking commits, streaks, and focus times. Our clean UI-first setup matches active metrics to create a dynamic developer environment.
            </p>
          </div>
          <div className="pt-4 border-t border-white/20 text-xs font-bold text-violet-200">
            Version 1.0.0 Stable Build
          </div>
        </Card>
      </div>

      {/* Metrics grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, idx) => {
          const Icon = stat.icon;
          return (
            <Card key={idx} className="p-4 flex items-center gap-4">
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center border ${stat.color} flex-shrink-0`}>
                <Icon className="w-5 h-5" />
              </div>
              <div>
                <span className="block text-lg font-black text-slate-900 dark:text-white leading-none">
                  {stat.value}
                </span>
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mt-1">
                  {stat.label}
                </span>
              </div>
            </Card>
          );
        })}
      </div>

      {/* Core Values Section */}
      <Card className="p-6">
        <h3 className="text-xl font-extrabold text-slate-900 dark:text-white mb-6">Core Development Values</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
          <div className="space-y-2">
            <h4 className="font-extrabold text-slate-900 dark:text-white flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-violet-500" />
              Gamification & Fun
            </h4>
            <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed font-medium">
              Streaks, badges, and avatars keep coding fresh. We make routine habits exciting and rewarding for both junior and senior developers.
            </p>
          </div>
          <div className="space-y-2">
            <h4 className="font-extrabold text-slate-900 dark:text-white flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-pink-500" />
              Diversity & Representation
            </h4>
            <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed font-medium">
              We celebrate all engineers. The RankHer module is dedicated to supporting, highlighting, and advancing women in technical roles.
            </p>
          </div>
          <div className="space-y-2">
            <h4 className="font-extrabold text-slate-900 dark:text-white flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
              Data-Driven Growth
            </h4>
            <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed font-medium">
              Visualize developer focus, commits, and algorithmic rankings with detailed breakdowns that encourage incremental improvement.
            </p>
          </div>
        </div>
      </Card>

      {/* Meet the Creators */}
      <div className="space-y-4">
        <h3 className="text-xl font-extrabold text-slate-900 dark:text-white">Meet the Project Leads</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {team.map((member, idx) => (
            <Card key={idx} className="p-6 flex flex-col sm:flex-row items-center gap-6">
              <div className="w-20 h-20 rounded-2xl overflow-hidden flex-shrink-0 ring-4 ring-slate-100 dark:ring-slate-800">
                <img src={member.avatar} alt={member.name} className="w-full h-full object-cover" />
              </div>
              <div className="flex-1 space-y-2 text-center sm:text-left">
                <div>
                  <h4 className="text-base font-extrabold text-slate-900 dark:text-white">{member.name}</h4>
                  <span className="text-xs font-semibold text-violet-600 dark:text-violet-400">{member.role}</span>
                </div>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed font-medium">
                  {member.bio}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
