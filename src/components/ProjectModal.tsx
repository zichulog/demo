import React, { useEffect } from 'react';
import { Project } from '../types';
import { X, Trophy, Users, Calendar, AlertCircle, Quote, Sparkles, CheckCircle2 } from 'lucide-react';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200 overflow-y-auto">
      <div className="relative w-full max-w-3xl my-8 bg-white border border-slate-200 rounded-3xl shadow-2xl overflow-hidden text-slate-800 max-h-[90vh] flex flex-col">
        
        {/* Modal Header */}
        <div className="sticky top-0 z-10 p-6 bg-white/95 border-b border-slate-200/80 flex items-start justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-bold mb-2">
              <Trophy className="w-3.5 h-3.5" />
              {project.metrics.badge}
            </div>
            <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
              {project.title}
            </h3>
            <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500 mt-2 font-medium">
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-emerald-600" />
                {project.period}
              </span>
              <span className="flex items-center gap-1">
                <Users className="w-3.5 h-3.5 text-emerald-600" />
                {project.role} ({project.teamSize})
              </span>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-slate-800 bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors"
            aria-label="닫기"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 space-y-6 overflow-y-auto custom-scrollbar">
          
          {/* Problem Statement Box */}
          <div className="p-4 sm:p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2">
            <div className="flex items-center gap-2 text-rose-600 font-bold text-xs uppercase tracking-wider">
              <AlertCircle className="w-4 h-4" />
              핵심 문제 정의 (Problem Definition)
            </div>
            <p className="text-base sm:text-lg font-bold text-slate-900">
              &quot;{project.problem}&quot;
            </p>
            <p className="text-xs text-slate-500 pt-1 leading-relaxed">
              {project.details.background}
            </p>
          </div>

          {/* User Research Findings */}
          <div className="space-y-3">
            <h4 className="font-bold text-sm text-slate-900 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              조사 데이터 및 발견점 (User Research Insights)
            </h4>
            <div className="grid grid-cols-1 gap-2">
              {project.details.keyFindings.map((finding, idx) => (
                <div key={idx} className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 text-xs sm:text-sm text-slate-700 flex items-start gap-2.5">
                  <span className="p-1 rounded bg-emerald-100 text-emerald-700 font-mono font-bold text-xs shrink-0">
                    0{idx + 1}
                  </span>
                  <span className="font-medium pt-0.5">{finding}</span>
                </div>
              ))}
            </div>
          </div>

          {/* User Quote if available */}
          {project.details.userQuote && (
            <div className="p-4 sm:p-5 rounded-2xl bg-emerald-50/70 border border-emerald-200/80 relative">
              <Quote className="w-6 h-6 text-emerald-300 absolute top-3 left-3" />
              <div className="pl-6 text-xs sm:text-sm italic text-emerald-900 font-medium">
                {project.details.userQuote}
              </div>
              <div className="text-[11px] font-bold text-emerald-700 text-right mt-1">
                — 인터뷰 참가자 VOC
              </div>
            </div>
          )}

          {/* Before & After Feature Reduction Flow */}
          <div className="space-y-3">
            <h4 className="font-bold text-sm text-slate-900 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              기능 압축 및 의사결정 (Data-driven Decision)
            </h4>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {/* Before */}
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2">
                <span className="px-2.5 py-0.5 rounded-md bg-rose-100 text-rose-700 text-xs font-bold">
                  BEFORE (기획 초기)
                </span>
                <ul className="space-y-1.5 text-xs text-slate-600 pt-1 font-medium">
                  {project.details.beforeAfter.before.map((item, i) => (
                    <li key={i} className="flex items-start gap-1.5">
                      <span className="text-rose-500 font-bold">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* After */}
              <div className="p-4 rounded-2xl bg-emerald-50/80 border border-emerald-200/80 space-y-2">
                <span className="px-2.5 py-0.5 rounded-md bg-emerald-100 text-emerald-800 text-xs font-bold">
                  AFTER (데이터 기반 개선)
                </span>
                <ul className="space-y-1.5 text-xs text-emerald-900 font-semibold pt-1">
                  {project.details.beforeAfter.after.map((item, i) => (
                    <li key={i} className="flex items-start gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Screen Concept Mockup Box */}
          {project.details.screenConcept && (
            <div className="p-4 sm:p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-slate-800 flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-emerald-600" />
                  {project.details.screenConcept.title}
                </span>
                <span className="text-[10px] text-slate-400 font-semibold">화면 구조 설계안</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                {project.details.screenConcept.features.map((feat, i) => (
                  <div key={i} className="p-3 rounded-xl bg-white border border-slate-200 text-xs text-slate-700 font-medium flex flex-col justify-between shadow-2xs">
                    <span className="text-emerald-700 font-bold mb-1">Step 0{i + 1}</span>
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Metrics & Results */}
          <div className="p-4 sm:p-5 rounded-2xl bg-emerald-900 text-white shadow-sm space-y-2">
            <h5 className="text-xs font-bold text-emerald-300 uppercase tracking-wider">
              최종 성과 지표 (Outcomes)
            </h5>
            <div className="space-y-1">
              {project.metrics.details.map((m, i) => (
                <div key={i} className="text-sm font-bold text-white flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                  {m}
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 text-xs font-bold rounded-xl bg-slate-900 hover:bg-slate-800 text-white transition-colors"
          >
            닫기
          </button>
        </div>

      </div>
    </div>
  );
};
