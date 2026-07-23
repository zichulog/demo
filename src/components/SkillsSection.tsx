import React from 'react';
import { skillCategories } from '../data/portfolioData';
import { Layout, Search, Kanban, TrendingUp, Check } from 'lucide-react';

export const SkillsSection: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Layout':
        return <Layout className="w-6 h-6 text-emerald-400" />;
      case 'Search':
        return <Search className="w-6 h-6 text-emerald-400" />;
      case 'Kanban':
        return <Kanban className="w-6 h-6 text-emerald-400" />;
      case 'TrendingUp':
        return <TrendingUp className="w-6 h-6 text-emerald-400" />;
      default:
        return <Layout className="w-6 h-6 text-emerald-400" />;
    }
  };

  return (
    <section id="skills" className="py-20 bg-slate-50 text-slate-800 border-b border-slate-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="mb-12">
          <div className="flex items-center gap-2 text-emerald-600 font-bold text-xs tracking-wider uppercase">
            <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
            Section 04
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">보유 역량</h2>
          <p className="text-slate-500 text-sm mt-1">
            서비스 기획자로서 가치를 입증하기 위해 갖춘 4가지 핵심 역량군입니다.
          </p>
        </div>

        {/* Sleek Dark Contrast Container for Core Competencies */}
        <div className="p-8 sm:p-10 rounded-3xl bg-slate-900 text-white shadow-xl border border-slate-800 space-y-8">
          <div className="flex items-center justify-between border-b border-slate-800 pb-4">
            <h3 className="font-bold text-lg text-white">4대 핵심 기획 및 관리 역량</h3>
            <span className="text-xs font-semibold px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
              CORE COMPETENCIES
            </span>
          </div>

          {/* 4 Skill Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillCategories.map((cat, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-slate-800/80 border border-slate-700/60 hover:border-emerald-500/50 transition-all space-y-3.5 flex flex-col justify-between"
              >
                <div>
                  <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 w-fit mb-3">
                    {getIcon(cat.icon)}
                  </div>
                  <h4 className="font-bold text-base text-white">{cat.title}</h4>
                  
                  <div className="flex flex-wrap gap-1 mt-2">
                    {cat.skills.map((s, i) => (
                      <span
                        key={i}
                        className="px-2 py-0.5 rounded bg-slate-900 text-emerald-300 font-semibold text-[10px] border border-slate-800"
                      >
                        {s}
                      </span>
                    ))}
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed mt-3">
                    {cat.description}
                  </p>
                </div>

                <div className="pt-2 border-t border-slate-700/50 space-y-1">
                  {cat.skills.map((skill, i) => (
                    <div key={i} className="flex items-center gap-1.5 text-[11px] text-slate-400">
                      <Check className="w-3 h-3 text-emerald-400 shrink-0" />
                      <span>{skill} 산출물 작성 가능</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
