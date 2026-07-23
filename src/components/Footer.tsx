import React from 'react';
import { personalInfo } from '../data/portfolioData';

export const Footer: React.FC = () => {
  return (
    <footer className="py-8 bg-white text-slate-500 text-xs border-t border-slate-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
        <div>
          <p className="font-bold text-slate-700">
            © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
          </p>
          <p className="text-[11px] text-slate-400 mt-0.5">
            데이터 기반 서비스 기획자 서달미 1페이지 포트폴리오
          </p>
        </div>

        <div className="flex items-center gap-4 text-slate-500 font-semibold">
          <a
            href="#hero"
            className="hover:text-emerald-600 transition-colors"
          >
            맨 위로 스크롤 ↑
          </a>
        </div>
      </div>
    </footer>
  );
};
