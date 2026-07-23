import React, { useState } from 'react';
import { personalInfo, toolsList } from '../data/portfolioData';
import { Mail, Copy, Check, FileDown, Sparkles } from 'lucide-react';

interface ContactSectionProps {
  onOpenResumeModal: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenResumeModal }) => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="py-20 bg-white text-slate-800 border-b border-slate-200 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="mb-12">
          <div className="flex items-center gap-2 text-emerald-600 font-bold text-xs tracking-wider uppercase">
            <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
            Section 05
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">연락처 및 사용 도구</h2>
          <p className="text-slate-500 text-sm mt-1">
            서비스 기획자로서 성장을 함께할 좋은 제안을 기다립니다.
          </p>
        </div>

        {/* Contact Card Container */}
        <div className="p-8 sm:p-10 rounded-3xl bg-slate-50 border border-slate-200/90 space-y-8 shadow-xs">
          
          {/* Statement & Email Row */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-8 border-b border-slate-200">
            <div className="space-y-2 max-w-xl">
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 leading-snug">
                &quot;사용자의 목소리에서 시작하여 데이터로 가치를 입증하는 서비스 기획자 서달미입니다.&quot;
              </h3>
              <p className="text-xs sm:text-sm text-slate-500">
                언제든 이메일로 연락주시면 빠르게 답변 드리겠습니다.
              </p>
            </div>

            {/* Email Copy Card */}
            <div className="shrink-0 space-y-3">
              <div className="flex items-center gap-3 p-3.5 bg-white border border-slate-200 rounded-2xl shadow-2xs">
                <div className="p-2.5 rounded-xl bg-emerald-50 text-emerald-600">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] text-slate-400 font-bold">CONTACT EMAIL</div>
                  <div className="text-sm font-mono font-bold text-slate-800">{personalInfo.email}</div>
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="ml-2 p-2 rounded-xl bg-emerald-50 hover:bg-emerald-100/80 text-emerald-700 transition-colors flex items-center gap-1 text-xs font-bold border border-emerald-200/60"
                  title="이메일 복사"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-600" />
                      <span>복사됨!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      <span>복사</span>
                    </>
                  )}
                </button>
              </div>

              {/* Resume Modal Trigger */}
              <button
                onClick={onOpenResumeModal}
                className="w-full flex items-center justify-center gap-2 px-5 py-3 text-xs font-bold text-white bg-slate-900 hover:bg-slate-800 rounded-xl transition-all shadow-sm hover:shadow-md"
              >
                <FileDown className="w-4 h-4 text-emerald-400" />
                이력서 PDF 보기 / 다운로드
              </button>
            </div>
          </div>

          {/* Tools List Section */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-emerald-600" />
                사용 도구 (Tools & Productivity)
              </h4>
              <span className="text-[11px] text-slate-400 font-medium">
                총 {toolsList.length}개 툴 활용 가능
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
              {toolsList.map((tool, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-2xl bg-white border border-slate-200 hover:border-emerald-300 transition-all flex flex-col justify-between shadow-2xs hover:shadow-xs"
                >
                  <span className="text-[10px] font-bold text-emerald-600 mb-1">
                    {tool.category}
                  </span>
                  <span className="font-bold text-sm text-slate-800">
                    {tool.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
