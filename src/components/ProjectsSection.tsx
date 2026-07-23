import React, { useState } from 'react';
import { projectsList } from '../data/portfolioData';
import { Project } from '../types';
import { ProjectModal } from './ProjectModal';
import { Trophy, Users, Calendar, ChevronRight } from 'lucide-react';

export const ProjectsSection: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const getBadgeStyle = (index: number) => {
    switch (index) {
      case 0:
        return 'bg-emerald-50 text-emerald-700 border-emerald-200/80';
      case 1:
        return 'bg-blue-50 text-blue-700 border-blue-200/80';
      case 2:
        return 'bg-purple-50 text-purple-700 border-purple-200/80';
      default:
        return 'bg-emerald-50 text-emerald-700 border-emerald-200/80';
    }
  };

  return (
    <section id="projects" className="py-20 bg-white text-slate-800 border-b border-slate-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="flex items-center gap-2 text-emerald-600 font-bold text-xs tracking-wider uppercase">
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              Section 03 (핵심)
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">프로젝트</h2>
            <p className="text-slate-500 text-sm mt-1">
              문제 정의부터 사용자 조사, 데이터 기반 기능 정의 및 성과 검증까지의 전체 과정입니다.
            </p>
          </div>

          <div className="text-xs font-medium text-slate-600 bg-slate-100 border border-slate-200/80 px-3.5 py-2 rounded-xl self-start md:self-auto shadow-2xs">
            💡 카드를 클릭하면 상세 조사 데이터와 와이어프레임을 보실 수 있습니다.
          </div>
        </div>

        {/* 3 Project Cards Grid */}
        <div className="grid grid-cols-1 gap-8">
          {projectsList.map((project, index) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="group relative p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 hover:border-emerald-300 transition-all duration-300 shadow-2xs hover:shadow-md cursor-pointer overflow-hidden"
            >
              {/* Subtle top accent line on hover */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>

              <div className="flex flex-col space-y-6">
                
                {/* Top Row: Title, Meta & Badge */}
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-4 border-b border-slate-100">
                  <div>
                    <div className="flex flex-wrap items-center gap-2.5 mb-2 text-xs">
                      <span className="px-2.5 py-0.5 rounded-md bg-slate-100 text-slate-700 font-bold border border-slate-200">
                        0{index + 1}. 프로젝트
                      </span>
                      <span className="text-slate-500 flex items-center gap-1 font-medium">
                        <Calendar className="w-3.5 h-3.5 text-slate-400" />
                        {project.period}
                      </span>
                      <span className="text-slate-500 flex items-center gap-1 font-medium">
                        <Users className="w-3.5 h-3.5 text-slate-400" />
                        {project.role} · {project.teamSize}
                      </span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900 group-hover:text-emerald-600 transition-colors">
                      {project.title}
                    </h3>
                  </div>

                  {/* Outcome Badge */}
                  <div className="shrink-0">
                    <span className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl border text-xs sm:text-sm font-bold shadow-2xs ${getBadgeStyle(index)}`}>
                      <Trophy className="w-4 h-4 shrink-0" />
                      {project.metrics.badge}
                    </span>
                  </div>
                </div>

                {/* Problem Statement Box */}
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80">
                  <div className="text-[11px] font-bold text-rose-600 tracking-wider uppercase mb-1">
                    한 줄 문제 정의
                  </div>
                  <p className="text-sm sm:text-base font-bold text-slate-800">
                    &quot;{project.problem}&quot;
                  </p>
                </div>

                {/* Process Flow: 조사규모 -> 기능개선 -> 성과 흐름 */}
                <div className="space-y-2">
                  <div className="text-xs font-bold text-slate-500">
                    조사규모 → 기능개선 → 핵심 의사결정
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    
                    {/* Step 1: Research */}
                    <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/60 text-xs space-y-1">
                      <span className="text-[10px] font-bold text-emerald-600 uppercase">
                        STEP 1. 조사 규모
                      </span>
                      <p className="text-slate-700 font-medium leading-snug">
                        {project.process.research}
                      </p>
                    </div>

                    {/* Step 2: Action */}
                    <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/60 text-xs space-y-1">
                      <span className="text-[10px] font-bold text-emerald-600 uppercase">
                        STEP 2. 기능 개선
                      </span>
                      <p className="text-slate-700 font-medium leading-snug">
                        {project.process.action}
                      </p>
                    </div>

                    {/* Step 3: Decision */}
                    <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/60 text-xs space-y-1">
                      <span className="text-[10px] font-bold text-emerald-600 uppercase">
                        STEP 3. 핵심 의사결정
                      </span>
                      <p className="text-slate-700 font-medium leading-snug">
                        {project.process.decision}
                      </p>
                    </div>

                  </div>
                </div>

                {/* Bottom Action bar */}
                <div className="flex items-center justify-between pt-2">
                  <span className="text-xs text-slate-500 font-medium">
                    {project.metrics.details[0]}
                  </span>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedProject(project);
                    }}
                    className="inline-flex items-center gap-1 text-xs font-bold text-emerald-600 group-hover:text-emerald-700 group-hover:translate-x-1 transition-all"
                  >
                    상세 데이터 & 와이어프레임 보기
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Project Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
