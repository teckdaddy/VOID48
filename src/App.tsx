import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Video, 
  Zap, 
  Palette, 
  Clock, 
  CheckCircle2, 
  ChevronRight, 
  ChevronLeft, 
  MessageSquare, 
  Layout,
  Share2,
  Copy,
  Check
} from 'lucide-react';
import { concepts, VideoConcept } from './data/concepts';

const CategoryIcon = ({ category }: { category: string }) => {
  switch (category) {
    case 'Prototype Stalling': return <Layout className="w-5 h-5" />;
    case 'Speed': return <Zap className="w-5 h-5" />;
    case 'Art Block': return <Palette className="w-5 h-5" />;
    case 'Quality': return <CheckCircle2 className="w-5 h-5" />;
    default: return <Video className="w-5 h-5" />;
  }
};

export default function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [copied, setCopied] = useState(false);
  const [filter, setFilter] = useState<string | null>(null);

  const filteredConcepts = filter 
    ? concepts.filter(c => c.category === filter)
    : concepts;

  const currentConcept = filteredConcepts[currentIndex] || filteredConcepts[0];

  const nextConcept = () => {
    setCurrentIndex((prev) => (prev + 1) % filteredConcepts.length);
  };

  const prevConcept = () => {
    setCurrentIndex((prev) => (prev - 1 + filteredConcepts.length) % filteredConcepts.length);
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const categories = Array.from(new Set(concepts.map(c => c.category)));

  return (
    <div className="min-h-screen bg-[#0A0A0B] text-white font-sans selection:bg-emerald-500/30">
      {/* Background Decor */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-emerald-500/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-500/10 blur-[120px] rounded-full" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-12">
        {/* Header */}
        <header className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-2 text-emerald-400 font-mono text-sm tracking-widest uppercase mb-2"
            >
              <Zap className="w-4 h-4 fill-current" />
              Viral Content Strategy
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-7xl font-bold tracking-tighter"
            >
              VOID<span className="text-emerald-500">48</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-zinc-400 mt-4 max-w-xl text-lg leading-relaxed"
            >
              20 high-impact video concepts designed to solve indie dev bottlenecks and drive viral growth.
            </motion.p>
          </div>

          <div className="flex flex-wrap gap-2">
            <button 
              onClick={() => { setFilter(null); setCurrentIndex(0); }}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${!filter ? 'bg-emerald-500 text-black' : 'bg-zinc-900 text-zinc-400 hover:bg-zinc-800'}`}
            >
              All Concepts
            </button>
            {categories.map(cat => (
              <button 
                key={cat}
                onClick={() => { setFilter(cat); setCurrentIndex(0); }}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${filter === cat ? 'bg-emerald-500 text-black' : 'bg-zinc-900 text-zinc-400 hover:bg-zinc-800'}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </header>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Concept Card */}
          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentConcept.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="bg-zinc-900/50 border border-zinc-800 rounded-3xl p-8 md:p-12 backdrop-blur-xl relative overflow-hidden group"
              >
                {/* Card Header */}
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-3 bg-emerald-500/10 text-emerald-400 px-4 py-1.5 rounded-full border border-emerald-500/20">
                    <CategoryIcon category={currentConcept.category} />
                    <span className="text-xs font-bold uppercase tracking-wider">{currentConcept.category}</span>
                  </div>
                  <span className="text-zinc-600 font-mono text-sm">Concept {currentIndex + 1} / {filteredConcepts.length}</span>
                </div>

                {/* Hook */}
                <div className="mb-10">
                  <h3 className="text-zinc-500 text-xs font-bold uppercase tracking-widest mb-3 flex items-center gap-2">
                    <Clock className="w-3 h-3" /> 5-Second Hook
                  </h3>
                  <p className="text-2xl md:text-3xl font-semibold leading-tight text-zinc-100">
                    "{currentConcept.hook}"
                  </p>
                </div>

                {/* Visual Idea */}
                <div className="mb-10 p-6 bg-zinc-950/50 rounded-2xl border border-zinc-800/50">
                  <h3 className="text-zinc-500 text-xs font-bold uppercase tracking-widest mb-3">Visual Direction</h3>
                  <p className="text-zinc-300 leading-relaxed italic">
                    {currentConcept.visual}
                  </p>
                </div>

                {/* Caption & Question */}
                <div className="space-y-8">
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-zinc-500 text-xs font-bold uppercase tracking-widest">Caption</h3>
                      <button 
                        onClick={() => copyToClipboard(currentConcept.caption)}
                        className="text-zinc-500 hover:text-emerald-400 transition-colors flex items-center gap-1.5 text-xs font-medium"
                      >
                        {copied ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                        {copied ? 'Copied' : 'Copy'}
                      </button>
                    </div>
                    <p className="text-zinc-400 text-sm bg-zinc-950 p-4 rounded-xl border border-zinc-800 font-mono">
                      {currentConcept.caption}
                    </p>
                  </div>

                  <div>
                    <h3 className="text-zinc-500 text-xs font-bold uppercase tracking-widest mb-3 flex items-center gap-2">
                      <MessageSquare className="w-3 h-3" /> Engagement Question
                    </h3>
                    <p className="text-emerald-400 font-medium text-lg">
                      {currentConcept.question}
                    </p>
                  </div>
                </div>

                {/* Navigation Controls */}
                <div className="flex items-center gap-4 mt-12 pt-8 border-t border-zinc-800/50">
                  <button 
                    onClick={prevConcept}
                    className="p-4 rounded-2xl bg-zinc-800 hover:bg-zinc-700 transition-all text-zinc-300"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  <button 
                    onClick={nextConcept}
                    className="flex-1 py-4 rounded-2xl bg-emerald-500 hover:bg-emerald-400 transition-all text-black font-bold flex items-center justify-center gap-2"
                  >
                    Next Concept <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Sidebar Info */}
          <div className="lg:col-span-4 space-y-8">
            <div className="bg-zinc-900/30 border border-zinc-800 rounded-3xl p-8">
              <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
                <Share2 className="w-5 h-5 text-emerald-500" /> Strategy Overview
              </h2>
              <ul className="space-y-6">
                <li className="flex gap-4">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center shrink-0">
                    <span className="text-emerald-500 font-bold text-xs">01</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-zinc-200">Pain Point Focus</h4>
                    <p className="text-xs text-zinc-500 mt-1">Targeting the specific emotional frustration of stalling prototypes and art block.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center shrink-0">
                    <span className="text-emerald-500 font-bold text-xs">02</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-zinc-200">The 48h Hook</h4>
                    <p className="text-xs text-zinc-500 mt-1">Leveraging the extreme speed of VOID48 as a unique selling proposition in every video.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center shrink-0">
                    <span className="text-emerald-500 font-bold text-xs">03</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-zinc-200">Community Loop</h4>
                    <p className="text-xs text-zinc-500 mt-1">Ending every video with a high-conversion question to boost algorithmic reach.</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-emerald-500 rounded-3xl p-8 text-black">
              <h3 className="font-black text-2xl mb-2 italic uppercase tracking-tighter">Ready to Scale?</h3>
              <p className="text-emerald-950 font-medium text-sm mb-6">These concepts are designed for TikTok, Reels, and YouTube Shorts.</p>
              <button className="w-full py-3 bg-black text-white rounded-xl font-bold text-sm hover:bg-zinc-900 transition-colors">
                Download PDF Guide
              </button>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-24 pt-8 border-t border-zinc-900 flex flex-col md:flex-row items-center justify-between gap-4 text-zinc-600 text-sm">
          <p>© 2024 VOID48 Strategy Hub. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-emerald-500 transition-colors">Twitter</a>
            <a href="#" className="hover:text-emerald-500 transition-colors">Discord</a>
            <a href="#" className="hover:text-emerald-500 transition-colors">Contact</a>
          </div>
        </footer>
      </div>
    </div>
  );
}
