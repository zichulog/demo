import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { ArrowDownCircle, FileText, CheckCircle2, Search, TrendingUp, MapPin, User, Sparkles } from 'lucide-react';

interface HeroSectionProps {
  onOpenResumeModal: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenResumeModal }) => {
  const scrollToProjects = () => {
    const elem = document.getElementById('projects');
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative pt-28 pb-20 md:pt-36 md:pb-24 overflow-hidden bg-white text-slate-800 border-b border-slate-200/80">
      {/* Background Subtle Gradient Blobs */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/5 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute top-10 right-10 w-[350px] h-[350px] bg-cyan-500/5 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="flex flex-col items-start space-y-6">
          
          {/* Top Info Badges */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs sm:text-sm">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 font-semibold shadow-2xs">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
              신입 / 주니어 서비스 기획자
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-700 font-medium">
              <User className="w-3.5 h-3.5 text-slate-500" />
              {personalInfo.name} ({personalInfo.age}세)
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-700 font-medium">
              <MapPin className="w-3.5 h-3.5 text-slate-500" />
              {personalInfo.location}
            </span>
          </div>

          {/* Main Title / Positioning */}
          <div className="space-y-3">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.15]">
              사용자 조사로 기획하는<br className="hidden sm:inline" />
              서비스 기획자, <span className="text-emerald-600 underline decoration-emerald-200 underline-offset-8">서달미</span>입니다
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-slate-600 font-normal max-w-3xl leading-relaxed pt-1">
              &quot;{personalInfo.subtitle}&quot;
            </p>
          </div>

          {/* Hopeful roles */}
          <div className="flex flex-wrap items-center gap-2 pt-1 text-sm text-slate-500">
            <span className="text-slate-400 font-medium text-xs">희망 직무:</span>
            {personalInfo.targetRoles.map((role) => (
              <span
                key={role}
                className="px-2.5 py-1 rounded-lg bg-slate-100 border border-slate-200 text-slate-700 font-semibold text-xs"
              >
                #{role}
              </span>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-4 w-full sm:w-auto">
            <button
              onClick={scrollToProjects}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-bold rounded-2xl text-white bg-slate-900 hover:bg-slate-800 active:bg-slate-950 transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5"
            >
              <ArrowDownCircle className="w-4 h-4 text-emerald-400" />
              프로젝트 보기
            </button>
            <button
              onClick={onOpenResumeModal}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-bold rounded-2xl text-slate-800 bg-white hover:bg-slate-50 border border-slate-200 transition-all shadow-2xs hover:shadow-sm hover:-translate-y-0.5"
            >
              <FileText className="w-4 h-4 text-emerald-600" />
              이력서 다운로드 (PDF)
            </button>
          </div>

          {/* Data-Driven Proof Cards */}
          <div className="w-full grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8 border-t border-slate-200/80 mt-6">
            <div className="p-4 rounded-2xl bg-slate-50/80 border border-slate-200/80 flex items-start gap-3.5 shadow-2xs">
              <div className="p-2.5 rounded-xl bg-emerald-100 text-emerald-700 shrink-0">
                <Search className="w-5 h-5" />
              </div>
              <div>
                <div className="text-2xl font-extrabold text-slate-900">13명+</div>
                <div className="text-xs font-medium text-slate-500 mt-0.5">사용자 심층 인터뷰 실시</div>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50/80 border border-slate-200/80 flex items-start gap-3.5 shadow-2xs">
              <div className="p-2.5 rounded-xl bg-emerald-100 text-emerald-700 shrink-0">
                <TrendingUp className="w-5 h-5" />
              </div>
              <div>
                <div className="text-2xl font-extrabold text-slate-900">40%</div>
                <div className="text-xs font-medium text-slate-500 mt-0.5">기능 압축 및 복잡도 축소</div>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50/80 border border-slate-200/80 flex items-start gap-3.5 shadow-2xs">
              <div className="p-2.5 rounded-xl bg-emerald-100 text-emerald-700 shrink-0">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <div>
                <div className="text-2xl font-extrabold text-slate-900">60건+</div>
                <div className="text-xs font-medium text-slate-500 mt-0.5">운영 정량 데이터 분석</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
