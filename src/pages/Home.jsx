import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Sparkles,
  Code2,
  BookOpen,
  ArrowRight,
  TrendingUp,
  Award,
  Users,
  Zap,
  Target
} from "lucide-react";
import { Github } from "../components/ui/Icons";
import { fadeUp, staggerContainer } from "../utils/motion";
import GradientButton from "../components/ui/GradientButton";
import Card from "../components/ui/Card";
import ThemeToggle from "../components/ui/ThemeToggle";

export const Home = () => {
  const features = [
    {
      title: "GitRank",
      description: "Analyze commits, pull requests, and reviews to rank developers globally and by language.",
      icon: Github,
      color: "text-blue-500 bg-blue-500/10 border-blue-500/20",
      path: "/gitrank"
    },
    {
      title: "RankHer",
      description: "A specialized spotlight ranking and community to support and showcase female software engineers.",
      icon: Sparkles,
      color: "text-pink-500 bg-pink-500/10 border-pink-500/20",
      path: "/rankher"
    },
    {
      title: "CodingPlace",
      description: "Solve daily algorithmic challenges, earn points, and climb the problem-solving ladder.",
      icon: Code2,
      color: "text-purple-500 bg-purple-500/10 border-purple-500/20",
      path: "/codingplace"
    },
    {
      title: "CodingOwl",
      description: "Build ironclad habits. Follow streaks and focus sessions backed by a cute habit owl.",
      icon: BookOpen,
      color: "text-orange-500 bg-orange-500/10 border-orange-500/20",
      path: "/codingowl"
    }
  ];

  const valueProps = [
    { label: "Tracked Developers", value: "85,420+", icon: Users },
    { label: "Challenges Solved", value: "1.2M+", icon: Target },
    { label: "Pull Requests Analyzed", value: "3.4M+", icon: Zap },
    { label: "Global Badges Issued", value: "24,000+", icon: Award }
  ];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-100 transition-colors duration-300 relative overflow-hidden">
      
      {/* Background Orbs */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-violet-500/10 dark:bg-violet-600/5 rounded-full blur-[120px] pointer-events-none -z-10 animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-blue-500/10 dark:bg-blue-600/5 rounded-full blur-[120px] pointer-events-none -z-10 animate-pulse-slow" />

      {/* Top Navbar mockup for landing */}
      <header className="h-16 border-b border-slate-200/50 dark:border-slate-800/50 backdrop-blur-md bg-white/40 dark:bg-slate-950/40 sticky top-0 z-30 px-6 max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2.5">
          <div className="w-8.5 h-8.5 rounded-lg bg-gradient-to-tr from-violet-600 via-indigo-600 to-blue-600 flex items-center justify-center shadow-md">
            <TrendingUp className="w-4.5 h-4.5 text-white" />
          </div>
          <span className="font-extrabold text-lg bg-clip-text text-transparent bg-gradient-to-r from-violet-600 to-blue-500 tracking-tight">
            RankHub
          </span>
        </Link>
        <div className="flex items-center gap-4">
          <ThemeToggle />
          <Link to="/about" className="text-sm font-semibold text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 transition-colors">
            About Us
          </Link>
          <Link to="/login" className="text-sm font-semibold text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 transition-colors">
            Sign In
          </Link>
          <Link to="/login">
            <GradientButton size="sm" className="px-4 py-1.5 text-xs rounded-lg">
              Launch Dashboard
            </GradientButton>
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 md:py-28 px-6 max-w-6xl mx-auto text-center space-y-8 flex flex-col items-center">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer(0.1, 0.05)}
          className="space-y-6 flex flex-col items-center"
        >
          {/* Tagline Badge */}
          <motion.span
            variants={fadeUp()}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-violet-500/10 text-violet-600 dark:text-violet-400 border border-violet-500/20"
          >
            🚀 The Developer Gamification Platform
          </motion.span>

          {/* Heading */}
          <motion.h1
            variants={fadeUp()}
            className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-[1.1] max-w-4xl text-slate-900 dark:text-white my-0"
          >
            Level Up Your Code. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 via-indigo-600 to-blue-500">
              Claim Your Leaderboard Rank.
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={fadeUp()}
            className="text-base sm:text-lg md:text-xl text-slate-500 dark:text-slate-400 max-w-2xl font-medium"
          >
            RankHub tracks commits, streaks, and problem-solving to gamify your software development journey. Build habits, spot-light contributions, and earn badges.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={fadeUp()}
            className="flex flex-col sm:flex-row gap-4 pt-4 justify-center"
          >
            <Link to="/login">
              <GradientButton className="w-full sm:w-auto flex items-center justify-center">
                View Dashboard <ArrowRight className="w-4 h-4 ml-1" />
              </GradientButton>
            </Link>
            <Link to="/login">
              <GradientButton variant="secondary" className="w-full sm:w-auto">
                Explore GitRank
              </GradientButton>
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Metrics Section */}
      <section className="py-12 bg-white/40 dark:bg-slate-900/40 backdrop-blur-sm border-y border-slate-200/50 dark:border-slate-800/50">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {valueProps.map((prop, idx) => {
            const Icon = prop.icon;
            return (
              <div key={idx} className="space-y-1">
                <div className="flex items-center justify-center text-violet-500 mb-2">
                  <Icon className="w-6 h-6" />
                </div>
                <span className="block text-2xl md:text-3xl font-extrabold text-slate-900 dark:text-white">
                  {prop.value}
                </span>
                <span className="text-xs font-semibold text-slate-400 dark:text-slate-500">
                  {prop.label}
                </span>
              </div>
            );
          })}
        </div>
      </section>

      {/* Features Grid Section */}
      <section className="py-20 px-6 max-w-6xl mx-auto space-y-12">
        <div className="text-center space-y-2">
          <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white my-0">
            Core Ranking Modules
          </h2>
          <p className="text-sm md:text-base text-slate-500 dark:text-slate-400 font-medium">
            Discover the distinct features that drive developers' motivation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <Link key={idx} to={feature.path} className="group">
                <Card className="p-6 h-full flex flex-col justify-between border-slate-200/50 dark:border-slate-800/50 hover:border-violet-500/30 dark:hover:border-violet-600/20 hover:shadow-xl transition-all duration-300">
                  <div className="space-y-4">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center border ${feature.color} group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                  <div className="mt-6 flex items-center text-xs font-bold text-violet-600 dark:text-violet-400 group-hover:underline">
                    Explore Feature <ArrowRight className="w-3.5 h-3.5 ml-1 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </Card>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-slate-200/50 dark:border-slate-800/50 text-center text-xs text-slate-400 dark:text-slate-500 bg-slate-50 dark:bg-slate-950 transition-colors">
        <div className="flex justify-center gap-6 mb-4">
          <Link to="/about" className="hover:text-slate-900 dark:hover:text-slate-100 transition-colors font-semibold">About Us</Link>
          <a href="#" className="hover:text-slate-900 dark:hover:text-slate-100 transition-colors font-semibold">Terms of Service</a>
          <a href="#" className="hover:text-slate-900 dark:hover:text-slate-100 transition-colors font-semibold">Privacy Policy</a>
        </div>
        <p className="font-semibold">© 2026 RankHub. Built with React + Vite + TailwindCSS.</p>
        <p className="mt-2">Premium developer ranking dashboard. All features simulate active states.</p>
      </footer>

    </div>
  );
};

export default Home;
